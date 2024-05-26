"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "settings",
      [
        {
          key: "1_1_customer_content",
          value: "Help So Easy is the ultimate platform for getting help with anything you need. Whether you need advice, guidance, or support, you can find a Helper who can assist you with just a few clicks. You can make a video call in the Help So Easy platform and enjoy a friendly and professional conversation with the Helper. You can end the call whenever you want and pay with your credit card.It’s so easy, you’ll love it!",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          key: "1_1_helper_content",
          value: "Are you looking for a way to turn your knowledge into income? Do you want toshare your skills and expertise with people who need them? If yes, then you should join the Help So Easy platform as a Helper and offer your services! Once you have created a profile and one or more services, you can start earning money. You have the freedom to set your own rate and you will get paid in your bank account for every second of conversation. You don’t have to be an expert or a specialist to be a Helper. Everyone has knowledge that someone wants to buy!",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          key: "7_43_content",
          value: "A check mark next to each item means you want to disclose this info to the public, Some check marks are grayed out and cannot be changed.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          key: "7_55_content",
          value: "You are encourage to answer but it is not required and will not be disclosed to the public.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          key: "11_61_title",
          value: "Currency in the transaction is set to USD at the moment.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          key: "11_61_content",
          value: "If your payment account is in another currency, don’t worry,  the amount in your transaction will be automatically converted to USD.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          key: "12_62_content",
          value: "To protect from unexpected high spending, each call can last up to xxxx minutes (will increase as you gain experience).",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          key: "24_111_title_1",
          value: "1. Minimum charge is 1 second totaling around USD $xxxxxx including tax and fees.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          key: "24_111_title_2",
          value: "2. You can terminate the call at any time and will be charged only by the length of the call.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          key: "24_111_title_3",
          value: "3. To protect you from unexpected high spending, with full authorization the call can last up to xxxx minutes (will increase as you gain experience) totaling around USD $xxxxxx including tax and fees. Simply call the helper again if you want to extend the conversation.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          key: "24_111_title_4",
          value: "4. The amount shown during the call is only an estimation.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          key: "24_111_title_5",
          value: "5. Some settings in user's device, institution, country, etc. mayaffect the connection.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          key: "24_111_title_6",
          value: "6. Help So Easy does not monitor or record the conversations.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          key: "24_111_title_7",
          value: "7. Payment will be made automatically after the call. You willreceive a sales record through email.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          key: "24_111_title_8",
          value: "8. Payments are final and not refundable.",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("settings", null, {});
  },
};
