const cron = require("node-cron");
require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const { saveTwilioServer } = require("./controllers/admin");

// 10 hours: "0 */10 * * *"
// 10 seconds: "*/10 * * * * *"

// Schedule a cron job to run every 10 seconds
cron.schedule("0 */10 * * *", async () => {
  const token = await client.tokens.create();
  const iceServers = token.iceServers;
  const stunUrl = iceServers[0].url;
  const username = iceServers[1].username;
  const password = iceServers[1].credential;
  const turnUrl1 = iceServers[1].url;
  const turnUrl2 = iceServers[2].url;
  const turnUrl3 = iceServers[3].url;
  await saveTwilioServer(
    stunUrl,
    username,
    password,
    turnUrl1,
    turnUrl2,
    turnUrl3
  );
});
