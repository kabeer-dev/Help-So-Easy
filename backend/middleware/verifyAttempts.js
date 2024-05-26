const { handleError } = require('../utils/responses.js');
const { User } = require('../models');

exports.verifyAttempts = (req, res, next) => {
    
    const sixty_miutes = 60 * 60 * 1000;
    User.findOne({
        where: {email: req.body.email}
    }).then((user) => {
        if(user){
            if(user.block_time && user.block_time >= new Date()){
                return handleError(res, "User is Blocked", 401);
            }
            if(user.total_attempts >= 4){
                console.log(new Date())
                const currentTime = new Date();
                const with_sixty_minuts = currentTime.setMinutes(currentTime.getMinutes() + 60)
                user.update({
                    block_time: with_sixty_minuts,
                    total_attempts: 0
                })
                return handleError(res, "User is Blocked", 401);
            }else{
                next();
            }
        }else{
            return handleError(res, "User is not Found", 400);
        }
    })
    
}