const { handleResponse, handleError } = require("../utils/responses.js");
const {
  RefCountry,
  RefState,
  RefTimeZone,
  RefInterest,
  UsersInterests,
} = require("../models");
const { handlePoints } = require("../controllers/rank.js");

exports.updateProfileStep1 = async (req, res) => {
  const user = req.user;
  const body= req.body;
  const first_name_privacy = req.user.first_name_privacy;
  const last_name_privacy = req.user.last_name_privacy;

  try{
    user.update({
      first_name: body.first_name,
      first_name_privacy: body.first_name_privacy,
      last_name: body.last_name,
      last_name_privacy: body.last_name_privacy,
      birth_year: body.birth_year,
      birth_year_privacy: body.birth_year_privacy,
      gender: body.gender,
      gender_privacy: body.gender_privacy,
      country_code: body.country_code,
      phone: body.phone,
      phone_privacy: body.phone_privacy
    }).then((user) => {
      if(first_name_privacy != user.first_name_privacy) {
        handlePoints(user.id, user.first_name_privacy ? 'add' : 'remove', 0.5);
      }
      if(last_name_privacy != user.last_name_privacy) {
        handlePoints(user.id, user.last_name_privacy ? 'add' : 'remove', 0.5);
      }
      return handleResponse(res, {user: user,  message: "User Data Add Successfully" })
    })
  }catch(err){
    return handleError(res, "Server Error", 500);
  }
  
};

exports.updateProfileStep2 = async (req, res) => {
  const user = req.user;
  const body= req.body;
  const countryPrivacy = req.user.country_privacy;

  try{
    user.update({
      fk_country_id: body.country_id,
      country_privacy: body.country_privacy,
      fk_state_id: body.state_id,
      state_privacy: body.state_privacy,
      address: body.address,
      address_privacy: body.address_privacy,
      postal_code: body.postal_code,
      postal_code_privacy: body.postal_code_privacy,
      fk_time_zone_id: body.time_zone_id,
      time_zone_privacy: body.time_zone_privacy,
    }).then((user) => {
      if(countryPrivacy != user.country_privacy) {
        handlePoints(user.id, user.country_privacy ? 'add' : 'remove', 0.5);
      }
      return handleResponse(res, {user: user,  message: "User Data Add Successfully" })
    })
  }catch(err){
    return handleError(res, "Server Error", 500);
  }
  
};

exports.updateProfileStep3 = async (req, res) => {
  const user = req.user;
  const body= req.body;
  console.log(body)
  const userInterests = await UsersInterests.destroy({
    where: {
      fk_user_id: req.user.id,
    },
  });
  try{
    body.user_interets.map((interest) => {
        UsersInterests.create({
          fk_user_id: req.user.id,
          fk_interest_id: interest,
        });
    })
    return handleResponse(res, {user: user,  message: "User Data Add Successfully" })

  }catch(err){
    return handleError(res, "Server Error", 500);
  }
  
};

exports.updateProfileStep4 = async (req, res) => {
  const user = req.user;
  const body= req.body;
  const description = req.user.description;
  try{
    user.update({
      description: body.description,
      description_privacy: body.description_privacy
    }).then((user) => {
      if(description != user.description) {
        if(description === null && user.description != null) {
          handlePoints(user.id, 'add', 1);
        }
        else if(description != null && user.description === null) {
          handlePoints(user.id, 'remove', 1);
        }
      }
      return handleResponse(res, {user: user,  message: "Description Add Successfully" })
    })
  }catch(err){
    return handleError(res, "Server Error", 500);
  }
  
  
};

exports.updateProfileStep5 = async (req, res) => {
  const user = req.user;
  const body= req.body;
  const avatar = req.user.avatar;
  console.log("clkdjkdc", body)
  try{
    user.update({
      avatar: body.avatar
    }).then((user) => {
      if(!avatar) {
        handlePoints(user.id, 'add', 2);
      }
      return handleResponse(res, {user: user,  message: "Image Add Successfully" })
    })
  }catch(err){
    return handleError(res, "Server Error", 500);
  }
  
  
};

// Countries
exports.getCountries = async (req, res) => {
  try {
    const countries = await RefCountry.findAll();

    // Respond with the created instance
    res.status(201).send(countries);
  } catch (error) {
    res.status(500).send("Internal Server Error: " + error);
  }
};

// States
exports.getStates = async (req, res) => {
  try {
    const states = await RefState.findAll();

    // Respond with the created instance
    res.status(201).send(states);
  } catch (error) {
    res.status(500).send("Internal Server Error: " + error);
  }
};

// Time Zones
exports.getTimeZones = async (req, res) => {
  try {
    const timeZones = await RefTimeZone.findAll();

    // Respond with the created instance
    res.status(201).send(timeZones);
  } catch (error) {
    res.status(500).send("Internal Server Error: " + error);
  }
};

// Interests
exports.getInterests = async (req, res) => {
  try {
    const interests = await RefInterest.findAll();
    const userInterests = await UsersInterests.findAll({
      where: {
        fk_user_id: req.user.id,
      },
    });
    // Respond with the created instance
    res
      .status(201)
      .send({ interests: interests, userInterests: userInterests });
  } catch (error) {
    res.status(500).send("Internal Server Error: " + error);
  }
};

// Update Availability
exports.updateAvailability = async (req, res) => {
  const user = req.user;
  const body= req.body;
  try{
    user.update({
      fk_helper_availability_id: body.status
    }).then((user) => {
      return handleResponse(res, {user: user,  message: "Availability updated successfully" })
    })
  }catch(err){
    return handleError(res, "Server Error", 500);
  }
};

exports.deleteProfileImage = async (req, res) => {
  const user = req.user;
  try{
    user.update({
      avatar: null
    }).then((user) => {
      return handleResponse(res, {message: "  Profile Image Deleted successfully" })
    })
  }catch(err){
    return handleError(res, "Server Error", 500);
  }
}






// exports.updateProfile = async (req, res) => {
//   try {
//     // Get the incoming user
//     const user = await User.findByPk(req.user.id);

//     const {
//       step,
//       firstName,
//       lastName,
//       birthYear,
//       phone,
//       countryId,
//       stateId,
//       address,
//       postalCode,
//       timeZoneId,
//       interests,
//       description,
//       avatar
//     } = req.body;

//     if (user) {
//       var fieldsToUpdate = "";
//       if (step == 1) {
//         fieldsToUpdate = {
//           first_name: firstName,
//           last_name: lastName,
//           birth_year: birthYear,
//           phone: phone,
//         };
//       } else if (step == 2) {
//         fieldsToUpdate = {
//           fk_country_id: countryId,
//           fk_state_id: stateId,
//           address: address,
//           postal_code: postalCode,
//           fk_time_zone_id: timeZoneId,
//         };
//       } else if (step == 3) {
//         // Delete previous interests
//         const userInterests = await UsersInterests.destroy({
//           where: {
//             fk_user_id: req.user.id,
//           },
//         });

//         // Save incoming interests
//         interests.map((interest) => {
//           UsersInterests.create({
//             fk_user_id: req.user.id,
//             fk_interest_id: interest,
//           });
//         });
//       } else if (step == 4) {
//         fieldsToUpdate = {
//           description: description,
//         };
//       } else if (step == 5) {
//         fieldsToUpdate = {
//           avatar: avatar,
//         };
//       }
//       // Update user
//       await user.update(fieldsToUpdate);
//     }

//     // Respond with the created instance
//     res.status(200).send("User's Profile has been updated successfully.");
//   } catch (error) {
//     res.status(500).send("Internal Server Error: " + error);
//   }
// };
