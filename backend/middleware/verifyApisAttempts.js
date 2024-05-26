const { handleError } = require('../utils/responses.js');
const { User, FirewallIps } = require('../models');

exports.verifyApisAttempts = (req, res, next) => {
    
    FirewallIps.findOne({
        where: {ip: req.ip}
    }).then((firewallIp) => {
        if(firewallIp){
            if(firewallIp.block_time && firewallIp.block_time >= new Date()){
                const currentTime = new Date();
                const differenceInMilliseconds = firewallIp.block_time - currentTime;
                const differenceInMinutes = Math.floor(differenceInMilliseconds / (1000 * 60));
                console.log(differenceInMinutes)
                return handleError(res, `Your login attempt has failed for too many times. You can try again in ${differenceInMinutes} minutes.`, 401);
            }
            if(firewallIp.total_attempts >= 2){
               
                const currentTime = new Date();
                const with_ten_minuts = currentTime.setMinutes(currentTime.getMinutes() + 5)
                console.log(with_ten_minuts)
                firewallIp.update({
                    block_time: with_ten_minuts,
                    total_attempts: 0
                })
                return handleError(res, "User is Blocked", 401);
            }else{
                next();
            }
        }else{
            next();
        }
    })
    
}