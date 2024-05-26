"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "web_rtc_plugin",
      [
        {
          server: "express",
          is_active: 1,
          stun_url: "stun:relay2.expressturn.com:443",
          username: "efV0SPHGZEV3L34KOK",
          password: "YR4N2REgZ4ovRNtc",
          turn_url_1: "turn:relay2.expressturn.com:443",
          turn_url_2: "turn:relay3.expressturn.com:80",
          turn_url_3: "turn:relay4.expressturn.com:3478",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          server: "twilio",
          is_active: 0,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          server: "xirsys",
          is_active: 0,
          stun_url: "stun:ss-turn1.xirsys.com",
          username: "ccVNyiR_Z4p667cjf15Jr5OUYAht4c1ex9nQ_ltp5rqjSnE-AgvUJpeexKLDAUxWAAAAAGVQIOp2emhh",
          password: "3a59d22e-80f5-11ee-8223-0242ac140004",
          turn_url_1: "turn:ss-turn1.xirsys.com:80?transport=udp",
          turn_url_2: "turn:ss-turn1.xirsys.com:3478?transport=udp",
          turn_url_3: "turn:ss-turn1.xirsys.com:80?transport=tcp",
          turn_url_4: "turn:ss-turn1.xirsys.com:3478?transport=tcp",
          turn_url_5: "turns:ss-turn1.xirsys.com:443?transport=tcp",
          turn_url_6: "turns:ss-turn1.xirsys.com:5349?transport=tcp",
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("web_rtc_plugin", null, {});
  },
};
