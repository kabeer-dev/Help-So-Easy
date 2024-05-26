'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const totalInvitations = 5000;
    const invitations = [];
  
    invitations.push({
      invitation_code: 'K8F3J7',
      status: 0,
      created_at: new Date(),
      updated_at: new Date(),
    }); 
    
    for (let i = 0; i < totalInvitations; i++) {
      invitations.push({
        invitation_code: generateInvitationCode(6), // Use UUID or your custom logic to generate unique codes
        status: 0,
        created_at: new Date(),
        updated_at: new Date(),
      });
    }


    await queryInterface.bulkInsert('invitation_codes', invitations);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('invitation_codes', null, {});
  }
};



function generateInvitationCode(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';

  while (code.length < length) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }

  return code;
}
