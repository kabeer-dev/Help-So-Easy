const { handleError } = require('../utils/responses.js');
const { User } = require('../models');

exports.verifyBlock = (req, res, next) => {
    console.log('middleware');
    User.findOne({
        where: {email: req.body.email}
    }).then((user) => {
        if(user){
            if(user.block_time && user.block_time >= new Date()){
                return handleError(res, "User is Blocked", 401);
            }else{
                next()
            }
        }else{
            return handleError(res, "User is not Found", 400);
        }
    })
    
}