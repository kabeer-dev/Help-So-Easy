const { Call, PaymentMethod, User, Service, StripePlugin } = require("../models");
const { Op, literal } = require("sequelize");
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
let stripe;
(async () => {
  try {
    const stripeCredentials = await StripePlugin.findOne();
    stripe = require("stripe")(
      stripeCredentials.activeKeys === "test"
        ? stripeCredentials.testSecretKey
        : stripeCredentials.liveSecretKey
    );

    // Your controller functions using `stripe` can go here
  } catch (error) {
    console.error("Error during initialization:", error);
  }
})();
const onlineUsers = new Set(); // Set to store online users
const activeCalls = new Map(); // To store active call information

module.exports.onlineUsers = onlineUsers;

module.exports.initSocketIO = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: [
        "https://rn357986421.helpsoeasy.com",
        "https://staging.helpsoeasy.com",
        "http://localhost:3000",
        "http://help-so-easy-admin.s3-website.ca-central-1.amazonaws.com"
      ],
      methods: ["GET", "POST"],
    },
    pingInterval: 1000,
    // pingTimeout: 2500,
    pingTimeout: 10000,
  });

  // Function to emit a socket event
  const helperPermissions = () => {
    io.emit('checkHelperPermissions'); // Adjust event name and data as needed
  };

  // // Set up the interval to call the function every 10 minutes
  setInterval(helperPermissions, 10000);

  function findUserBySocketId(socketId) {
    for (const user of onlineUsers) {
      console.log("sid", socketId);
      console.log("online users inside find user by sid", onlineUsers);
      if (user.socketId === socketId) {
        return user;
      }
    }
    return null; // User not found
  }

  function findUserByUuidId(id) {
    for (const user of onlineUsers) {
      if (user.id === id) {
        return user;
      }
    }
    return null; // User not found
  }

  function addUserToActiveCall(callId, socket, myUuid) {
    let call = activeCalls.get(callId);

    if (call) {
      if (call.reconnectionTimeout) {
        clearTimeout(call.reconnectionTimeout);
        call.reconnectionTimeout = null;
      }

      call.participants = [...call.participants, socket.id];
      call.micStats[myUuid] = { toggles: [], totalToggles: { On: 0, Off: 0 } };
      call.videoStats[myUuid] = {
        toggles: [],
        totalToggles: { On: 0, Off: 0 },
      };
    } else {
      // Add the socket to the active call
      activeCalls.set(callId, {
        participants: [socket.id],
        reconnectionTimeout: null,
        buyerConnected: false,
        helperConnected: false,
        callStartingTime: 0,
        micStats: {
          [myUuid]: { toggles: [], totalToggles: { On: 0, Off: 0 } },
        },
        videoStats: {
          [myUuid]: { toggles: [], totalToggles: { On: 0, Off: 0 } },
        },
      });
    }

    // Join a room with the callId (you can use rooms to manage calls)
    socket.join(callId);
    console.log("activeCalls", activeCalls);
  }

  function reconnectUserToActiveCall(callId, socket) {
    let call = activeCalls.get(callId);
    console.log("reconnecting call", call);

    if (call) {
      if (call.reconnectionTimeout) {
        clearTimeout(call.reconnectionTimeout);
        call.reconnectionTimeout = null;
      }

      call.participants = [...call.participants, socket.id];

      // Join a room with the callId (you can use rooms to manage calls)
      socket.join(callId);
      console.log("activeCalls", activeCalls);
    } else {
      // io.to(callId).emit('disconnectTheCall');
      socket.emit("disconnectTheCall");
    }
  }

  function removeCallFromActiveCalls(callId) {
    if (activeCalls.has(callId)) {
      activeCalls.delete(callId); // Remove the call by its callId
    }
    console.log("Updated activeCalls", activeCalls);
  }

  function calculateX(w, y) {
    const stripeFee = ((2.9 * w) / 100) + 0.3 + 0.25;
    // Additional Stripe Fee
        // 20% of w + 20C
    const additionalStripeFee = ((20 * w) / 100) + 0.2;
    // Help So Easy Fee (QST & GST Tax)
        // additionalStripeFee + 9.95% of additional stripe fee + 5% of additional stripe fee
    const helpSoEasyFee = additionalStripeFee + ((9.95 * additionalStripeFee) / 100) + ((5 * additionalStripeFee) / 100);
    
    // Calculate X
    var x = ((y * 2.9) / 100) + 0.3;
    x = (x + parseFloat(helpSoEasyFee.toFixed(2))) + 0.25;
    return x.toFixed(1);
  }

  function calculateW(y) {
    let w = y * 0.971;
        w = w - 0.7799;
        w = w / 1.287375;
        w = w.toFixed(2);
        console.log('value of w is', w);
    return w;
  }

  function cancelOrCapturePayment(callId, callIsCanceled, activeCall, bothUserDisconnected, socket = null, payload = null) {

    let now = Date.now();
    let endingCallTime = null;
    let totalPriceCaptured = null;
    // let tmpHelperToReceiveAmount;
    let helperAmount;
    let buyerUser;
    let helperUser;
    let totalCallSeconds;
    let buyerPaymentMethod;
    let helperPaymentMethod;

    Call.findByPk(callId)
      .then(async (call) => {
        let paymentIntent = null;
        let startingCallTime = new Date(call.call_start).getTime(); // Convert to timestamp
        if (callIsCanceled || !call.call_start) {
          paymentIntent = await stripe.paymentIntents.cancel(call.intent_id);
        } else {
        // const removeTaxFromHelperAmount = calculateX(call.intent_helper_receive, call.rate);
        // console.log("remove tax from helper amount", removeTaxFromHelperAmount);
          endingCallTime = now;
          const timeDifferenceInMilliseconds =
            endingCallTime - startingCallTime;
          let totalSeconds = Math.floor(timeDifferenceInMilliseconds / 1000);
          totalCallSeconds = totalSeconds;
          const totalPrice = parseFloat(
            (((call.rate) * (totalSeconds / 60)) + 0.90).toFixed(2)
          );
          totalPriceCaptured =
            totalPrice > call.intent_hold
              ? call.intent_hold
              : totalPrice > 1
              ? totalPrice
              : 1;
          try {
            paymentIntent = await stripe.paymentIntents.capture(
              call.intent_id,
              {
                amount_to_capture: parseInt(totalPriceCaptured * 100),
              }
            );
          } catch (error) {
            console.log("Unable to capture funds", error);
          }
          try {
            const paymentMethod = await PaymentMethod.findOne({
              where: {
                fk_user_id: call.fk_helper_id,
                is_default: 1,
                type_send_receive_nm: "receive",
              },
            });
            helperPaymentMethod = paymentMethod;
            buyerPaymentMethod = await PaymentMethod.findByPk(call.fk_buyer_payment_method_id);
            const callService = await Service.findByPk(call.fk_service_id);
            // helperAmount = calculateW(totalPriceCaptured);
            // helperAmount = (
            //   (totalPriceCaptured - 0.8033) /
            //   1.2667
            // ).toFixed(2); // Using help so easy formula: equation # 7: Y = W * 1.2667 + 0.8033
            const tmpHelperToReceive = ((totalSeconds / 60) * (callService.rate)).toFixed(2);
            // console.log('helper to receive', tmpHelperToReceive);
            // const removeTaxFromHelperAmount = calculateX(call.intent_helper_receive, call.rate);
            // console.log("remove tax from helper amount", removeTaxFromHelperAmount);
            // const helperAmount = (totalPriceCaptured - removeTaxFromHelperAmount).toFixed(2);
            helperAmount = tmpHelperToReceive;
            // tmpHelperToReceiveAmount = tmpHelperToReceive;
            // const amountInCents = parseInt((parseFloat(helperAmount) * 100).toFixed(0), 10);
            // console.log('helper received after tax removal in cents', amountInCents);
            // console.log("helper amount",helperAmount)
            // console.log("totalPriceCaptured",totalPriceCaptured)

            call.trans_helper_receive = helperAmount;
            call.fk_trans_helper_payment_method_id = paymentMethod.id;
            call.save();

            const transfer = await stripe.transfers.create({
              // amount: amountInCents,
              amount: helperAmount * 100,
              currency: "usd",
              destination: paymentMethod.stripe_connect_account_id,
            });
            call.trans_id = transfer.id;
            // call.trans_helper_receive = helperAmount;
            call.trans_response = JSON.stringify(transfer);
            // call.fk_trans_helper_payment_method_id = paymentMethod.id;
            call.save();
          } catch (error) {
            console.log("Unable to transfer funds to helper", error);
          }

          buyerUser = await call.getBuyer();
          helperUser = await call.getHelper();

          console.log("helper from the call", helperUser);
        }
        callData = await Call.findByPk(call.id);

        Call.update(
          {
            intent_status: paymentIntent.status,
            intent_captured: totalPriceCaptured,
            call_end: endingCallTime,
          },
          { where: { id: call.id } }
        )
          .then(async () => {
            const last20Calls = await Call.findAll({
              where: {
                fk_helper_id: call.fk_helper_id,
                fk_service_id: call.fk_service_id,
                intent_captured: {
                  [Op.not]: null,
                },
                call_start: {
                  [Op.not]: null,
                },
                call_end: {
                  [Op.not]: null,
                },
              },
              order: [["call_start", "DESC"]], // Order by start_time in descending order
              limit: 20,
            });
            // Calculate the duration of each call and store it in an array
            const callDurations = last20Calls.map((call) => {
              const startTime = new Date(call.call_start);
              const endTime = new Date(call.call_end);
              const durationInMinutes = (endTime - startTime) / (1000 * 60);
              return durationInMinutes;
            });
            // Calculate the average call duration
            const totalDurations = callDurations.reduce(
              (acc, duration) => acc + duration,
              0
            );
            const averageDuration = (totalDurations / callDurations.length).toFixed(2);
            
            if(!callIsCanceled && call.call_start) {
              await Service.update({
                latest_avg_call_length: averageDuration,
                last_call_time: endingCallTime,
                calls_count: literal('calls_count + 1')
              }, {
                where: {
                  id: call.fk_service_id
                }
              });
            }

            if (!callIsCanceled && call.call_start) {
              if(!bothUserDisconnected) {
                let mySummary = {
                  callStartingTime: startingCallTime,
                  callEndingTime: now,
                  totalPrice: totalPriceCaptured,
                  micStats: activeCall.micStats[payload.myUuid],
                  videoStats: activeCall.videoStats[payload.myUuid],
                  helperPrice: callData.intent_helper_receive,
                  tmpHelperPrice: helperAmount,
                  buyer: buyerUser,
                  helper: helperUser,
                  totalSeconds: totalCallSeconds,
                  buyerPaymentMethodLastFourDigits: buyerPaymentMethod.stripe_card_last4,
                  helperPaymentMethodLastFourDigits: helperPaymentMethod.stripe_bank_last4
                };
  
                let otherUserSummary = null;
                for (const otherUserObj of onlineUsers) {
                  if (otherUserObj.socketId === payload.otherUserSocketId) {
                    otherUserSummary = {
                      callStartingTime: startingCallTime,
                      callEndingTime: now,
                      totalPrice: totalPriceCaptured,
                      micStats: activeCall.micStats[payload.otherUserUuid],
                      videoStats: activeCall.videoStats[payload.otherUserUuid],
                      helperPrice: callData.intent_helper_receive,
                      tmpHelperPrice: helperAmount,
                      buyer: buyerUser,
                      helper: helperUser,
                      totalSeconds: totalCallSeconds,
                      buyerPaymentMethodLastFourDigits: buyerPaymentMethod.stripe_card_last4,
                      helperPaymentMethodLastFourDigits: helperPaymentMethod.stripe_bank_last4
                    };
                    io.to(payload.otherUserSocketId).emit("summary", {
                      summary: otherUserSummary,
                      otherUserSummary: mySummary,
                    });
                    break;
                  }
                }
  
                socket.emit("summary", {
                  summary: mySummary,
                  otherUserSummary,
                });
              }

              removeCallFromActiveCalls(callId);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  io.on("connection", (socket) => {
    console.log("new connection", socket.id);

    socket.on("refreshOnlineUsers", function () {
      onlineUsers.clear();
      io.emit("refreshOnlineUsers");
    });

    socket.on("getMySocketId", function () {
      socket.emit("me", socket.id);
    });

    // When user enters otp his/her data is passed......
    socket.on("new_user", function (user) {
      let existingUserWithSameUuidId = findUserByUuidId(user.id);

      if (!user.callId && existingUserWithSameUuidId) {
        return socket.emit("logout");
      }

      if (user.callId && existingUserWithSameUuidId) {
        let activeCall = activeCalls.get(user.callId);
        if (activeCall) {
          // Remove the user from the active call participants list
          activeCall.participants = activeCall.participants.filter(
            (participant) => participant !== existingUserWithSameUuidId.socketId
          );
        }
        onlineUsers.delete(existingUserWithSameUuidId);
      }

      if (user.callId) {
        reconnectUserToActiveCall(user.callId, socket);
      }

      let existingUserWithSameSocketId = findUserBySocketId(socket.id);

      if (existingUserWithSameSocketId) {
        onlineUsers.delete(existingUserWithSameSocketId);
      }

      // Show the user online if he has a receiving payment method
      User.findOne({ where: { id: user.id } }).then(online_user => {
        // if(online_user.stripe_connect_account_id) {
          const obj = {
            id: user.id,
            name: user.name,
            socketId: socket.id,
            status: user.status ? user.status : "online",
            cameraAvailable: user.cameraAvailable,
            stripe_connect_account: online_user && online_user.stripe_connect_account_id ? true : false
          };
  
          onlineUsers.add(obj);
          
          console.log("new user onlineUsers", onlineUsers);
        // }
      });
      
      io.emit("new_connect", Array.from(onlineUsers));

    });
    // Ends here......

    socket.on(
      "callUser", async ({
        userToCall,
        fromUuid,
        from,
        name,
        maxDuration,
        maxCallTime,
        callId,
        callPricePerMinute,
        service
      }) => {
        addUserToActiveCall(callId, socket, fromUuid);

        // Check if user is online or not
        let user = findUserBySocketId(userToCall);

        const helperPaymentMethod = await PaymentMethod.findOne({
          where: {
            fk_user_id: service.fk_helper_id,
            type_send_receive_nm: 'receive',
            is_default: 1
          }
        })

        if (user) {
          if (user.status === "online") {
            io.to(userToCall).emit("callUser", {
              fromUuid,
              from,
              name,
              maxDuration,
              maxCallTime,
              callId,
              callPricePerMinute,
              service,
              helperPaymentMethod
            });
          }
          // else if (user.status === "busy") {
          //   io.to(userToCall).emit("notifyReceiverAboutCall", {
          //     name,
          //   });
          // }
        } else {
          console.log("user not found 1");
        }
      }
    );

    const updateUserStats = (
      callId,
      type,
      currentMediaStatus,
      triggeredBySocketId,
      triggeredByUuid
    ) => {
      // Check if user is online or not
      let activeCall = activeCalls.get(callId);
      console.log("in updateUserStats activeCalls", activeCalls);
      console.log("in updateUserStats triggeredByUuid", callId);
      if (activeCall) {
        if (type === "both") {
          // Modify mic and video stats for the found user
          activeCall.micStats[triggeredByUuid].totalToggles[
            currentMediaStatus[0] ? "On" : "Off"
          ] += 1;
          activeCall.micStats[triggeredByUuid].toggles.push({
            title: currentMediaStatus[0] ? "On" : "Off",
            time: Date.now(),
          });
          activeCall.videoStats[triggeredByUuid].totalToggles[
            currentMediaStatus[1] ? "On" : "Off"
          ] += 1;
          activeCall.videoStats[triggeredByUuid].toggles.push({
            title: currentMediaStatus[1] ? "On" : "Off",
            time: Date.now(),
          });
          io.to(triggeredBySocketId).emit("storeMicAndVideoStats", {
            micStats: activeCall.micStats[triggeredByUuid],
            videoStats: activeCall.videoStats[triggeredByUuid],
          });
        } else if (type === "mic" || type === "video") {
          if (!activeCall[type + "Stats"][triggeredByUuid]) {
            activeCall[type + "Stats"][triggeredByUuid] = {
              toggles: [],
              totalToggles: { On: 0, Off: 0 },
            };
          }

          // Modify the specified type of stats for the found user
          activeCall[type + "Stats"][triggeredByUuid].totalToggles[
            currentMediaStatus ? "On" : "Off"
          ] += 1;
          activeCall[type + "Stats"][triggeredByUuid].toggles.push({
            title: currentMediaStatus ? "On" : "Off",
            time: Date.now(),
          });
          io.to(triggeredBySocketId).emit("storeMicAndVideoStats", {
            [type + "Stats"]: activeCall[type + "Stats"],
          });
        }
      } else {
        console.log("activeCall not found 1");
      }
    };

    socket.on("buyerConnected", async ({ callId }) => {
      console.log("buyerConnected", socket.id);
      let activeCall = activeCalls.get(callId);
      if (activeCall) {
        activeCall.buyerConnected = true;
        if (activeCall.helperConnected) {
          activeCall.participants.forEach((participant) => {
            console.log("bothUsersConnected after buyerConnected");
            io.to(participant).emit("bothUsersConnected");
          });
          let now = Date.now();
          activeCall.callStartingTime = now;
          const call = await Call.findOne({ where: { id: callId } });
          let paymentIntent = await stripe.paymentIntents.confirm(
            call.intent_id
          );
          Call.update(
            {
              call_start: now,
              intent_status: paymentIntent.status,
            },
            { where: { id: callId } }
          ).catch((err) => {
            console.log("In buyerConnected: ", err);
          });
        }
        console.log("activeCall after buyerConnected", activeCall);
      }
    });

    socket.on("helperConnected", async ({ callId }) => {
      console.log("helperConnected", socket.id);
      let activeCall = activeCalls.get(callId);
      if (activeCall) {
        activeCall.helperConnected = true;
        if (activeCall.buyerConnected) {
          activeCall.participants.forEach((participant) => {
            console.log("bothUsersConnected after helperConnected");
            io.to(participant).emit("bothUsersConnected");
          });
          let now = Date.now();
          activeCall.callStartingTime = now;
          const call = await Call.findOne({ where: { id: callId } });
          let paymentIntent = await stripe.paymentIntents.confirm(
            call.intent_id
          );
          Call.update(
            {
              call_start: now,
              intent_status: paymentIntent.status,
            },
            { where: { id: callId } }
          ).catch((err) => {
            console.log("In helperConnected: ", err);
          });
          activeCall.callStartingTime = Date.now();
        }
        console.log("activeCall after helperConnected", activeCall);
      }
    });

    socket.on(
      "updateMyMedia",
      ({
        callId,
        to,
        type,
        currentMediaStatus,
        triggeredBySocketId,
        triggeredByUuid,
      }) => {
        console.log(
          "updateMyMedia",
          to,
          type,
          currentMediaStatus,
          triggeredBySocketId
        );
        io.to(to).emit("updateUserMedia", { type, currentMediaStatus });
        updateUserStats(
          callId,
          type,
          currentMediaStatus,
          triggeredBySocketId,
          triggeredByUuid
        );
      }
    );

    socket.on("msgUser", ({ to, ...rest }) => {
      console.log("msgRcv", to, rest);
      io.to(to).emit("msgRcv", rest);
    });

    socket.on("answerCall", (data) => {
      console.log("answer call", data);

      addUserToActiveCall(data.callId, socket, data.fromUuid);

      io.to(data.to).emit("updateUserMedia", {
        type: data.type,
        currentMediaStatus: data.myMediaStatus,
      });
      io.to(data.to).emit("callAccepted", data);
      updateUserStats(
        data.callId,
        data.type,
        data.myMediaStatus,
        data.from,
        data.fromUuid
      );
    });

    socket.on("endCall", (data) => {
      try {
        console.log("end call data", data);
        io.to(data.otherUserSocketId).emit("endCall", { data });
        let activeCall = activeCalls.get(data.callId);

        if (activeCall) {
          cancelOrCapturePayment(data.callId, data.cancel, activeCall, false, socket, data);
        }
      } catch (error) {
        console.log("error in endCall: " + error);
      }
    });

    socket.on("callEvent", (data) => {
      io.to(data.to).emit("callEvent", { data });
    });

    socket.on("checkUserStatus", (data) => {
      // Check if user is online or not
      let user = findUserBySocketId(data.id);
      console.log('user found by socket id', user);
      if (user) {
        if (user.status === "online") {
          io.to(data.me).emit("userStatus", {
            status: "online",
            id: data.id,
          });
        } else {
          io.to(data.me).emit("userStatus", { status: "busy", id: data.id });
          // io.to(user.socketId).emit("notifyReceiverAboutCall", {
          //   name: data.name,
          // });
        }
      } else {
        console.log('onlineusers during call', onlineUsers);
        console.log("user not found 3");
      }
    });

    socket.on("busy", (data) => {
      // Check if user is online or not
      let user = findUserBySocketId(data.id);

      if (user) {
        user.status = "busy";
      } else {
        console.log("user not found 4");
      }
    });

    socket.on("cameraAvailable", (data) => {
      // Check if user is online or not
      let user = findUserBySocketId(socket.id);

      if (user) {
        user.cameraAvailable = data.cameraAvailable;
        io.emit("new_connect", Array.from(onlineUsers));
      } else {
        console.log("user not found 5");
      }
    });

    socket.on("online", (data) => {
      // Check if user is online or not
      let user = findUserBySocketId(data.id);

      if (user) {
        user.status = "online";
      } else {
        console.log("user not found 6");
      }
    });

    // Listen for a user disconnecting
    socket.on("disconnect", (reason) => {
      console.log("disconnecting... reason: ", reason);

      // Check if the user was in an active call
      for (const [callId, call] of activeCalls.entries()) {
        if (call.participants.includes(socket.id)) {
          socket.to(callId).emit("otherUserLostConnection");

          // Remove the user from the participants list
          call.participants = call.participants.filter(
            (participant) => participant !== socket.id
          );

          if (call.participants.length === 0) {
            console.log("disconnecting call because all users disconnected");
            cancelOrCapturePayment(callId, false, call, true);
            socket.to(callId).emit("disconnectTheCall");
          } else {
            if (call.participants.length < 2) {
              // This condition is used because sometimes client disconnection works fast than server disconnection meaning socket from client disconnects first and that same socket disconnects from server side after some time.
              call.reconnectionTimeout = setTimeout(() => {
                if (activeCalls.has(callId)) {
                  console.log("disconnecting call by timeout");
                  socket.to(callId).emit("disconnectTheCall");
                }
              }, 15000);
            }
          }

          console.log("In disconnect: updated activeCalls", activeCalls);
          break;
        }
      }

      const disconnectedUser = findUserBySocketId(socket.id);

      if (disconnectedUser) {
        onlineUsers.delete(disconnectedUser);
        io.emit("new_connect", Array.from(onlineUsers)); // Notify all clients about the disconnected user
      }

      console.log("disconnect onlineUsers", onlineUsers);
    });

    socket.on("signal", (data) => {
      io.to(data.to).emit("signal", data.signal);
    });
  });
};
