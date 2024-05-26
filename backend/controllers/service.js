const { handleResponse, handleError } = require("../utils/responses.js");
const { Op } = require("sequelize");
const sendMail = require("../mail/sendMail");
const {
  RefInterest,
  RefVideoPreference,
  Service,
  ServiceImage,
  ServiceRate,
  User,
  RefCountry,
  RefState,
  RefTimeZone,
  EmailContent,
  RefSpokenLanguage,
  UsersSpokenLanguages,
  AuthenticationLog,
  Call,
  ServiceReview
} = require("../models");

exports.getInterests = async (req, res) => {
  try {
    const ref_interests = await RefInterest.findAll();
    handleResponse(res, { ref_interests });
  } catch (error) {
    handleError(res, { error }, 501);
  }
};

exports.getRefVideoPreferences = async (req, res) => {
  try {
    const ref_video_preferences = await RefVideoPreference.findAll();
    handleResponse(res, { ref_video_preferences });
  } catch (err) {
    handleError(res, { err }, 501);
  }
};

exports.announceService = async (req, res) => {
  const body = req.body;
  const user = req.user;
  console.log(body);
  const imagePaths = body.updatedImagePaths;

  // if (imagePaths.length === 0) {
  //   return handleError(res, "Atleat 1 Image is required", 401);
  // }
  if (body.service_id) {
    ServiceImage.destroy({
      where: { fk_service_id: body.service_id },
    });
    try {
      const createdService = await Service.update(
        {
          fk_helper_id: user.id,
          title: body.title,
          url_title: body.url_title,
          fk_interest_id: body.fk_interest_id,
          description: body.description,
          rate: body.rate,
          fk_video_preference_id: body.fk_video_preference_id,
          status_nm: "Active",
          calls_count: 0,
          // overall_avg_rating: 0,
        },
        { where: { id: body.service_id } }
      );

      const serviceId = createdService.id;

      const imageCreationPromises = imagePaths.map(async (imagePath) => {
        try {
          await ServiceImage.create({
            fk_service_id: body.service_id,
            image: imagePath,
          });
        } catch (error) {
          console.error("Error creating image:", error);
          // Handle image creation errors if needed
          // You might want to decide whether to continue or stop on error
        }
      });

      await Promise.all(imageCreationPromises);

      EmailContent.findOne({
        where: {slug: '18_90_add_change_service'}
      }).then((email_content) => {
        const mainContent = email_content.content_longtext;
        const subject = email_content.subject;
        const content = mainContent.replace('["username"]', req.user.first_name ? req.user.first_name : 'User' )
        const bcc = email_content.bcc;
        sendMail(req.user.email, subject, content, bcc);
      })

      return handleResponse(res, { message: "Success" });
    } catch (error) {
      handleError(res, { error }, 501);
    }
  } else {
    try {
      let rankingPoints = 0;
      if (user.avatar) {
        rankingPoints += 2;
      }
      if (user.first_name_privacy) {
        rankingPoints += 5;
      }
      if (user.last_name_privacy) {
        rankingPoints += 5;
      }
      if (user.country_privacy) {
        rankingPoints += 5;
      }
      if (user.description) {
        rankingPoints += 5;
      }

      const createdService = await Service.create({
        fk_helper_id: user.id,
        ranking_points: rankingPoints,
        title: body.title,
        url_title: body.url_title,
        fk_interest_id: body.fk_interest_id,
        description: body.description,
        rate: body.rate,
        fk_video_preference_id: body.fk_video_preference_id,
        status_nm: "Active",
        calls_count: 0,
        // overall_avg_rating: 0,
      });

      const serviceId = createdService.id;

      const imageCreationPromises = imagePaths.map(async (imagePath) => {
        try {
          await ServiceImage.create({
            fk_service_id: serviceId,
            image: imagePath,
          });
        } catch (error) {
          console.error("Error creating image:", error);
          // Handle image creation errors if needed
          // You might want to decide whether to continue or stop on error
        }
      });

      await Promise.all(imageCreationPromises);

      EmailContent.findOne({
        where: {slug: '18_90_add_change_service'}
      }).then((email_content) => {
        const mainContent = email_content.content_longtext;
        const subject = email_content.subject;
        const content = mainContent.replace('["username"]', req.user.first_name ? req.user.first_name : 'User' )
        const bcc = email_content.bcc;
        sendMail(req.user.email, subject, content, bcc);
      })

      return handleResponse(res, { message: "Success" });
    } catch (error) {
      console.log("ranking errors:", error);
      handleError(res, { error }, 501);
    }
  }
};

exports.myServices = (req, res) => {
  const user = req.user;
  try {
    Service.findAll({
      where: { fk_helper_id: user.id },
      include: [
        {
          model: ServiceImage,
        },
        {
          model: RefInterest,
          attributes: ["name"],
        },
      ],
    }).then((user_services) => {
      handleResponse(res, { user_services });
    });
  } catch (err) {
    handleError(res, { err }, 501);
  }
};

exports.deleteService = (req, res) => {
  const body = req.body;
  Service.destroy({
    where: { id: body.service_id },
  }).then(() => {
    EmailContent.findOne({
      where: {slug: '16_81_delete_service'}
    }).then((email_content) => {
      const mainContent = email_content.content_longtext;
      const subject = email_content.subject;
      const content = mainContent.replace('["username"]', req.user.first_name ? req.user.first_name : 'User')
      const bcc = email_content.bcc;
      sendMail(req.user.email, subject, content, bcc);
    })

    handleResponse(res, { message: "Service Deleted Successfully" });
  });
};

exports.allServices = (req, res) => {
  Service.findAll({
    where: {
      status_nm: "Active",
    },
    include: [
      {
        model: ServiceReview
      },
      {
        model: ServiceImage,
      },
      {
        model: RefInterest,
        attributes: ["name", "description"],
      },
      {
        model: User,
        include: [
          {
            model: RefCountry,
            attributes: ["name"],
          },
          {
            model: RefState,
            attributes: ["name"],
          },
          {
            model: RefTimeZone,
            attributes: ["name", "offset"],
          },
          {
            model: RefSpokenLanguage,
            attributes: ["name"],
          },
        ],
      },
    ],
    // order: [
    //   ["ranking_points", "DESC"], // Order by ranking_points in descending order
    // ],
  }).then(async (all_services) => {
    
    // if(req.user) {
      for (const service of all_services) {

        let rankingPoints = 0;

        // helper and buyer having same languages
        var sameLanguage = false;
        if(req.user) {
          sameLanguage = await hasSameSpokenLanguage(service.fk_helper_id, req.user.id);
        }
        else {
          sameLanguage = true;
        }

        if(sameLanguage) {

          // currently online
    
          // same country
          if(req.user && service.User.fk_country_id === req.user.fk_country_id) {
            rankingPoints += 10;
          }
    
          // service average rating of last 20 calls
    
          // service number of calls in the last 90 days in the same Country as buyer
          if(req.user) {
            const lastNinetyCalls = await lastNinetyCallsInSameCountry(service.id, req.user.fk_country_id);
            if(lastNinetyCalls >= 1 && lastNinetyCalls <=2) {
              rankingPoints += 1
            }
            else if(lastNinetyCalls >= 3 && lastNinetyCalls <= 10) {
              rankingPoints += 2
            }
            else if(lastNinetyCalls >= 11) {
              rankingPoints += 3;
            }
          }
    
          // helper average rating of last 20 calls
    
          // helper time since last call
          const hoursPassed = await hoursSinceLastCall(service.fk_helper_id);
          if(hoursPassed) {
            if(hoursPassed <= 24) {
              rankingPoints += 1;
            }
          }
          else {
            rankingPoints += 0.5;
          }
    
          // service at least has 1 image
          if(service.ServiceImages) {
            rankingPoints += 2;
          }
    
          // service prefer show face
          if(service.fk_video_preference_id === 1) {
            rankingPoints += 2;
          }

        }
  
        // helper receiving payment method
        // if (service.User.stripe_connect_account_id) {
        //   rankingPoints += 2;
        // }
  
        // average length of last 20 calls
        // const avgLastTwentyCalls = await averageLengthOfLastTwentyCalls(
        //   service.fk_helper_id
        // );
        // if (avgLastTwentyCalls > 4 && avgLastTwentyCalls <= 5) {
        //   rankingPoints += 25;
        // } else if (avgLastTwentyCalls >= 2 && avgLastTwentyCalls < 4) {
        //   rankingPoints += 15;
        // } else if (avgLastTwentyCalls > 5 && avgLastTwentyCalls <= 7) {
        //   rankingPoints += 10;
        // }
  
        // total calls answered
        // const callsAnsweredPercentage = await totalCallsAnsweredPercentage(service.fk_helper_id);
        // if(callsAnsweredPercentage >= 90) {
        //   rankingPoints += 25;
        // }
        // else if(callsAnsweredPercentage >= 80 && callsAnsweredPercentage <= 89) {
        //   rankingPoints += 18;
        // }
        // else if(callsAnsweredPercentage >= 70 && callsAnsweredPercentage <= 79) {
        //   rankingPoints += 10;
        // }
        // else if(callsAnsweredPercentage >= 60 && callsAnsweredPercentage <= 69) {
        //   rankingPoints += 5;
        // }
  
        // helper and buyer having same time zones
        // if(req.user.fk_time_zone_id != null && req.user.fk_time_zone_id === service.User.fk_time_zone_id) {
        //   rankingPoints += 15;
        // }
  
        // new helper in last 30 days
        // if(service.User.verified_at) {
        //   const daysPassed = ((new Date() - new Date(service.User.verified_at)) / (1000 * 60 * 60 * 24)).toFixed();
        //   if(daysPassed <= 30) {
        //     rankingPoints += 15;
        //   }
        // }
  
        service.ranking_points += rankingPoints;
      };
    // }

    handleResponse(res, { all_services: all_services });
  });
};

const averageLengthOfLastTwentyCalls = async (helperId) => {
  const last20Calls = await Call.findAll({
    where: {
      fk_helper_id: helperId,
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
  const averageDuration = totalDurations / callDurations.length;
  return averageDuration;
};

const hasSameSpokenLanguage = async (helperId, buyerId) => {
  const buyerLanguages = await UsersSpokenLanguages.findAll({
    where: {
      fk_user_id: buyerId,
    },
  });

  let hasSameLanguage = false;

  for (const buyerLanguage of buyerLanguages) {
    const sameHelperLanguage = await UsersSpokenLanguages.findOne({
      where: {
        fk_user_id: helperId,
        fk_language_id: buyerLanguage.fk_language_id,
      },
    });

    if (sameHelperLanguage) {
      hasSameLanguage = true;
      break; // exit the loop if buyer and helper have the same language
    }
  }

  return hasSameLanguage;
};

const lastNinetyCallsInSameCountry = async (serviceId, buyerCountryId) => {
  // Calculate the date 90 days ago
  const ninetyDaysAgo = new Date();
  ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);

  const lastNinetyCalls =  await Call.count({
    where: {
      fk_service_id: serviceId,
      createdAt: {
        [Op.gte]: ninetyDaysAgo,
      },
    },
    include: [
      {
        model: User,
        as: 'buyer',
        where: {
          fk_country_id: buyerCountryId,
        },
      },
    ],
  });

  return lastNinetyCalls;
}

const totalCallsAnsweredPercentage = async (helperId) => {
  const totalCallsReceived = await Call.count({
    where: {
      fk_helper_id: helperId
    }
  });
  const totalCallsAnswered = await Call.count({
    where: {
      fk_helper_id: helperId,
      intent_status: 'succeeded'
    }
  });

  const callsAnsweredInPercentage = (totalCallsAnswered/totalCallsReceived) * 100;

  return callsAnsweredInPercentage;

}

const hoursSinceLastCall = async (helperId) => {
  const lastHelperCall = await Call.findOne({
    where: {
      fk_helper_id: helperId,
      call_end: {
        [Op.not]: null,
      },
    },
    order: [['createdAt', 'DESC']], // Order by createdAt column in descending order
  });

  if(lastHelperCall) {
    const hoursPassed = ((new Date() -new Date(lastHelperCall.call_end))  / (1000 * 60 * 60)).toFixed(2);
    return hoursPassed;
  }
  return false;
}

const fuzzyMatch = (keyword, stringToMatch) => {
  // Convert strings to sets of characters
  const set1 = new Set(keyword);
  const set2 = new Set(stringToMatch);

  // Intersection of sets
  const intersection = new Set([...set1].filter(char => set2.has(char)));

  // Union of sets
  const union = new Set([...set1, ...set2]);

  // Jaccard similarity coefficient
  const similarity = intersection.size / union.size;

  // Convert to percentage
  const similarityPercentage = similarity * 100;

  return similarityPercentage.toFixed();
}

exports.getService = (req, res) => {
  const body = req.body;
  try {
    Service.findOne({
      where: { id: body.service_id },
      include: [
        {
          model: User,
          attributes: ['id', 'user_id', 'first_name', 'last_name', 'first_name_privacy', 'last_name_privacy', 'gender', 'gender_privacy', 'avatar', 'country_privacy', 'state_privacy', 'postal_code_privacy', 'address_privacy', 'address', 'postal_code'],
          include: [
            {
              model: RefCountry,
              attributes: ["name"],
            },
            {
              model: RefState,
              attributes: ["name"],
            },
            {
              model: RefTimeZone,
              attributes: ["name", "offset"],
            }
          ]
        },
        {
          model: ServiceImage,
        },
        {
          model: RefInterest,
          attributes: ["name"],
        }
      ],
    }).then((edit_Service) => {
      handleResponse(res, { edit_Service: edit_Service });
    });
  } catch (err) {
    handleError(res, { err }, 501);
  }
};

exports.allServiceWithTitle = async (req, res) => {
  const ServiceUser = await User.findOne({
    where: {
      user_id: req.body.user_id 
    }
  });
  Service.findOne({
    where: {
      url_title: req.body.service_title,
      fk_helper_id: ServiceUser.id,
      status_nm: 'Active'
    },
    include: [
      {
        model: ServiceImage,
      },
      {
        model: ServiceReview,
        include: [
          {
            model: User,
            attributes: ['id', 'user_id', 'first_name', 'first_name_privacy', 'last_name', 'last_name_privacy', 'avatar']
          },
        ]
      },
      {
        model: Call,
        attributes: ['id', 'intent_status'],
        where: {
          intent_status: 'succeeded',
        },
        required: false
      },
      {
        model: RefInterest,
        attributes: ["name", "description"],
      },
      {
        model: User,
        include: [
          {
            model: RefCountry,
            attributes: ["name"],
          },
          {
            model: RefState,
            attributes: ["name"],
          },
          {
            model: RefTimeZone,
            attributes: ["name", "description", "offset"],
          },
          {
            model: RefSpokenLanguage,
            // through: UsersSpokenLanguages,
            attributes: ["name"],
          },
        ],
      },
    ],
  }).then((get_service) => {
    handleResponse(res, {get_service: get_service});
  })
};


exports.advancedSearchGet = (req, res) => {
  RefInterest.findAll().then( (ref_interests) => {
    RefCountry.findAll().then( (ref_countries) => {
      RefState.findAll().then( (ref_states) => {
        RefSpokenLanguage.findAll().then( (ref_spoken_languages) => {
          handleResponse(res, {ref_interests, ref_countries, ref_states, ref_spoken_languages})
        })
      })
    })
  })
}

exports.advancedSearchPost = async (req, res) => {
  const { online_helpers, showing_face, category_name, min_usd, max_usd, first_name, last_name, user_id, age_count,  country_id, state_name, address, language, avg_20_rating, avg_length_20_call, min_calls, } = req.body;
  console.log(avg_length_20_call)
  const whereClause = {};

  // if(online_helpers === true){
  //   whereClause['$User.AuthenticationLogs.fk_user_id$'] = { [Op.not]: null };
  // }
  whereClause['$Service.status_nm$'] = { [Op.eq]: 'Active' };
  if(showing_face === true){
    whereClause['$RefVideoPreference.id$'] = { [Op.eq]: 1 };
  }
  // if(online_helpers === false){
  //   whereClause['$User.AuthenticationLogs.fk_user_id$'] = { [Op.eq]: null };
  // }
  // if(showing_face === false){
  //   whereClause['$RefVideoPreference.id$'] = { [Op.eq]: 2 };
  // }
  if (category_name) {
    // Use Op.like for partial string matching
    whereClause['$RefInterest.name$'] = { [Op.like]: `%${category_name}%` };
  }
  if(min_usd){
    whereClause['$Service.rate$'] = { [Op.gte]: min_usd };
  }
  if(max_usd){
    whereClause['$Service.rate$'] = { [Op.lte]: max_usd };
  }
  if (first_name) {
    // Use Op.like for partial string matching
    whereClause['$User.first_name$'] = { [Op.like]: `%${first_name}%` };
  }
  if (last_name) {
    // Use Op.like for partial string matching
    whereClause['$User.last_name$'] = { [Op.like]: `%${last_name}%` };
  }
  // if (nick_name) {
  //   // Use Op.like for partial string matching
  //   whereClause['$User.nick_name$'] = { [Op.like]: `%${nick_name}%` };
  // }
  if (user_id) {
    // Use Op.like for partial string matching
    whereClause['$User.user_id$'] = { [Op.like]: `%${user_id}%` };
  }
  if(age_count){
    current_yaer = new Date().getFullYear();
    if(age_count == 1){ // 18 and under
      under_18 = current_yaer - 18;
      whereClause['$User.birth_year$'] = { [Op.between]: [under_18, current_yaer] };
    }else if(age_count == 2){ // 19 to 25
      age_25 = current_yaer - 25;
      age_19 = current_yaer - 19;
      whereClause['$User.birth_year$'] = { [Op.between]: [age_25, age_19] };
    }else if(age_count ==  3){ // 26 to 35
      age_35 = current_yaer - 35;
      age_26 = current_yaer - 26;
      whereClause['$User.birth_year$'] = { [Op.between]: [age_35, age_26] };
    }else if(age_count == 4){// 36 to 50
      age_50 = current_yaer - 50;
      age_26 = current_yaer - 36;
      whereClause['$User.birth_year$'] = { [Op.between]: [age_50, age_26] };
    }else{ // 51 and above
      whereClause['$User.birth_year$'] = { [Op.lt]: 1972 };
    }
  }
  if (country_id) {
    // Use Op.like for partial string matching
    whereClause['$User.fk_country_id$'] = { [Op.eq]: country_id};
  }
  if (state_name) {
    // Use Op.like for partial string matching
    whereClause['$User.RefState.name$'] = { [Op.like]: `%${state_name}%` };
  }
  if(address){
    whereClause['$User.address$'] = { [Op.like]: `%${address}%`}
    // whereClause['$User.address$'] = { [Op.eq]: address}
  }
  if(language && language.length > 0){
    whereClause['$User.RefSpokenLanguages.name$']= { [Op.in]: language}
  }

  if(avg_20_rating){
    if(avg_20_rating === 1){
      whereClause['$Service.overall_avg_rating$'] = { [Op.gte]: 2}
    }
    if(avg_20_rating === 2){
      whereClause['$Service.overall_avg_rating$'] = { [Op.gte]: 3}
    }
    if(avg_20_rating === 3){
      whereClause['$Service.overall_avg_rating$'] = { [Op.gte]: 4}
    }
    if(avg_20_rating === 4){
      whereClause['$Service.overall_avg_rating$'] = { [Op.eq]: 5}
    }
  }

  if(avg_length_20_call){
    if(avg_length_20_call === 1){
      whereClause['$Service.overall_avg_rating$'] = { [Op.lte]: 1}
    }
    if(avg_length_20_call === 2){
      whereClause['$Service.overall_avg_rating$'] = { [Op.lte]: 2}
    }
    if(avg_length_20_call === 3){
      whereClause['$Service.overall_avg_rating$'] = { [Op.lte]: 5}
    }
    if(avg_length_20_call === 4){
      whereClause['$Service.overall_avg_rating$'] = { [Op.lte]: 8}
    }
    if(avg_length_20_call === 5){
      whereClause['$Service.overall_avg_rating$'] = { [Op.lte]: 10}
    }
  }
 
  if(min_calls){
    if(min_calls === 1){
      whereClause['$Service.calls_count$'] = { [Op.gte]: 0}
    }
    else if(min_calls === 10){
      whereClause['$Service.calls_count$'] = { [Op.gte]: 10}
    }
    else if(min_calls === 100){
      whereClause['$Service.calls_count$'] = { [Op.gte]: 1000}
    }
    else if(min_calls === 1000){
      whereClause['$Service.calls_count$'] = { [Op.gte]: 1000}
    }

  // if(max_calls){
  //   if(max_calls == 0){
  //     whereClause['$User.calls_received_count$'] = { [Op.eq]: null}
  //   }
  //   else if(max_calls == 1){
  //     whereClause['$User.calls_received_count$'] = { [Op.lte]: 1}
  //   }
  //   else if(max_calls == 10){
  //     whereClause['$User.calls_received_count$'] = { [Op.lte]: 10}
  //   }
  //   else if(max_calls == 100){
  //     whereClause['$User.calls_received_count$'] = { [Op.lte]: 100}
  //   }
  // }

  }

  try {
    Service.findAll({
      where: whereClause,
      include: [
        {
          model: ServiceImage,
        },{
          model: RefInterest,
          attributes:['name', 'description']
        },
        {
          model: ServiceRate,
          attributes: []
        },
        {
          model: RefInterest,
          attributes: []
        },
        {
          model: RefVideoPreference,
          attributes: []
        },
        
        {
          model: User,

          include: [
            {
              model: AuthenticationLog,
              attributes: []
           
            },
            {
              model: RefCountry,
              attributes: []
            },
            {
              model: RefState,
              attributes: []
            },
            {
              model: RefSpokenLanguage,
              attributes: []
            }
          ]
        },
       
      ],
    }).then( (services) => {
      if(services != ''){
      
        handleResponse(res, {services}, 200, "Searched Services")
      }else{
        handleResponse(res, {message: 'No Results'})
      }
      
    })
  } catch (error) {
    handleError(res, 500, { error: 'An error occurred while processing the request.' });
  } 
}


exports.allServicesWithSearchKeyword = async (req, res) => {
  Service.findAll({
    where: {
      status_nm: "Active",
    },
    include: [
      {
        model: ServiceImage,
      },
      {
        model: RefInterest,
        attributes: ["name", "description"],
      },
      {
        model: User,
        include: [
          {
            model: RefCountry,
            attributes: ["name"],
          },
          {
            model: RefState,
            attributes: ["name"],
          },
          {
            model: RefTimeZone,
            attributes: ["name"],
          },
          {
            model: RefSpokenLanguage,
            // through: UsersSpokenLanguages,
            attributes: ["name"],
          },
        ],
      },
    ],

  }).then(async (all_services) => {
    for (const service of all_services) {

      let rankingPoints = 0;

      searchedKeyword = req.body.search
      const helperName = `${service.User.first_name} ${service.User.last_name}`;
      const helperUserId = service.User.user_id;
      const helperDescription =  service.User.description;
      const serviceTitle = service.title;
      const serviceDescription = service.description;
      // const matchName = fuzzyMatch(searchedKeyword, helperName);
      // const matchuserId = fuzzyMatch(searchedKeyword, helperUserId);
      // const matchDescription = fuzzyMatch(searchedKeyword, helperDescription);
      const matchTitle = fuzzyMatch(searchedKeyword, serviceTitle);
      // const matchServiceDescription = fuzzyMatch(searchedKeyword, serviceDescription);
      // helper and buyer having same languages
      var sameLanguage = false;
      if(req.user) {
        sameLanguage = await hasSameSpokenLanguage(service.fk_helper_id, req.user.id);
      }
      else {
        sameLanguage = true;
      }

      // if((matchName >= 75 || matchuserId >= 75 || matchDescription >= 75 || matchTitle >= 75 || matchServiceDescription >= 75)  && sameLanguage) {
        if(matchTitle >= 75) {
        service.ratings_count = 1;
        // currently online
  
        // same country
        if(req.user && service.User.fk_country_id === req.user.fk_country_id) {
          rankingPoints += 10;
        }
  
        // service average rating of last 20 calls
  
        // service number of calls in the last 90 days in the same Country as buyer
        if(req.user) {
          const lastNinetyCalls = await lastNinetyCallsInSameCountry(service.id, req.user.fk_country_id);
          if(lastNinetyCalls >= 1 && lastNinetyCalls <=2) {
            rankingPoints += 1
          }
          else if(lastNinetyCalls >= 3 && lastNinetyCalls <= 10) {
            rankingPoints += 2
          }
          else if(lastNinetyCalls >= 11) {
            rankingPoints += 3;
          }
        }
  
        // helper average rating of last 20 calls
  
        // helper time since last call
        const hoursPassed = await hoursSinceLastCall(service.fk_helper_id);
        if(hoursPassed) {
          if(hoursPassed <= 24) {
            rankingPoints += 1;
          }
        }
        else {
          rankingPoints += 0.5;
        }
  
        // service at least has 1 image
        if(service.ServiceImages) {
          rankingPoints += 2;
        }
  
        // service prefer show face
        if(service.fk_video_preference_id === 1) {
          rankingPoints += 2;
        }

      }

      service.ranking_points += rankingPoints;
    };
    handleResponse(res, { all_services: all_services });
  });
}

// Save service review
exports.saveReview = async (req, res) => {
  try {
    const { comment, rating, serviceId, buyerId, helperId } = req.body;

    await ServiceReview.create({
      fk_service_id: serviceId,
      fk_buyer_id: buyerId,
      fk_helper_id: helperId,
      rating,
      comment,
    });

    const sumOfRatings = await ServiceReview.sum("rating", {
      where: { fk_service_id: serviceId },
    });
    const reviewCount = await ServiceReview.count("rating", {
      where: { fk_service_id: serviceId },
    });

    const overall_avg_rating = sumOfRatings / reviewCount;

    await Service.update(
      {
        overall_avg_rating: overall_avg_rating,
      },
      {
        where: {
          id: serviceId,
        },
      }
    );

    // Respond with the created instance
    res.status(201).send("Service review saved successfully");
  } catch (error) {
    res.status(500).send("Internal Server Error: " + error);
  }
};


exports.clickShareService = async (req, res) => {
  try{
    EmailContent.findOne({
      where: {slug: '0_1_share_service'}
    }).then((email_content) => {
      const mainContent = email_content.content_longtext;
      const subject = email_content.subject;
      const content = mainContent.replace('["username"]', req.user.first_name ? req.user.first_name : 'User' )
      const bcc = email_content.bcc;
      sendMail(req.user.email, subject, content, bcc);
    })

    return handleResponse(res, { message: "Success" });
 
  }
  catch (error) {
    handleError(res, { error }, 501);
  }
}