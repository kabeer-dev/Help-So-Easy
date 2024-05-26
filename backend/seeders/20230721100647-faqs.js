'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('faqs', [
      {
        fk_faq_category_id: 1,
        question: 'How to I register to HSE?',
        answer: 'Registration to HSE is limited at this point and on invitation only.    To be added to the waiting list add your coordinates here',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_faq_category_id: 1,
        question: 'Is there any age restriction to use HSE?',
        answer: 'Users need to be 18 years old to buy service on HSE.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_faq_category_id: 1,
        question: 'What are the future developments planned for HSE?',
        answer: 'We have many improvements planned to make HSE even better including many features, country and languages.  If you have ideas, please share them with us using the contact form',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_faq_category_id: 1,
        question: 'What are terms and conditions?',
        answer: 'The terms & conditions are available here',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_faq_category_id: 1,
        question: 'Can I communicate through Text chat with a user?',
        answer: 'HSE consist of audio and video calls. Text Chat is only available during the paid video/audio conversation.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_faq_category_id: 1,
        question: 'Is there a recuring fee to use HSE?',
        answer: 'No',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_faq_category_id: 1,
        question: 'What if I have a problem',
        answer: 'If you face any issues, you can contact us using the contact form.  We will make your best to get back to you within 48 hours.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_faq_category_id: 1,
        question: 'How long is a talking session?',
        answer: 'There is no minimum duration to a call.   The maximum length depends on the experience level of the buyer.  New buyers have a shorter time allowed (max 5 minutes).',
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        fk_faq_category_id: 2,
        question: 'Do I have to pay more that the advertised fee in a service offer?',
        answer: 'The prices you see in the service offers are all inclusive.  They include all fees (eg: taxes, platform fees, credit card fees, etc.)',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_faq_category_id: 2,
        question: 'Can I talk to the buyer to confirm he knows what I am looking for?',
        answer: 'You will be billed for every second of conversation with a Helper.   To avoid any surprises. we recommend that you look carefully at the profile of the helper you intend to contact.  Once you talk to a Helper you should ask very clearly in the first few seconds what you are looking for and get him/her to confirm they have the level of expertise you are looking for.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_faq_category_id: 2,
        question: 'How to choose helper?',
        answer: "Each Helper has a profile, a service description and a review score.  The price they will charge you is indicated and includes everything (eg: Paiement/Platform fees, taxes, etc.).  You can also see the helper's statistics (e.g. average call length, time since last call). You can use them to select who you will call.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_faq_category_id: 2,
        question: 'How will I pay?',
        answer: 'You will be billed on the credit/debit card you have added to your profile.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_faq_category_id: 2,
        question: 'Can I get a refund if I am not happy with the answers from the Helper I called?',
        answer: 'You will be billed for every second of conversation with a Helper, even if you are not happy with the answers.   To avoid any suprises. we recommend that you look carefully at the profile of the helper you intend to contact.  Once you talk to a Helper you should ask very clearly in the first few seconds what you are looing for and get him/her to confirm they have the level of expertise you are looking for.  You can also use the review system to help future users identify the level of expertise of that Helper',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_faq_category_id: 2,
        question: 'What if the helper is offline or is not answering?',
        answer: 'You can call again when the Helper is on-line and/or available. ',
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        fk_faq_category_id: 3,
        question: 'What can I sell?   Is there any topic/subject that are not authorized on HSE?',
        answer: 'Only ethical topic/subjects are allowed on HSE.   For example, illegal activities and sexual related content are not allowed ',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_faq_category_id: 3,
        question: 'How to announce a service?',
        answer: "Helper can create multiple services.   Don't hesitate!  Everyone has knowledge about multiple things.   We highly recommand that you are very transparent about the level of expertise you have.  This will ensure good reviews! ",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_faq_category_id: 3,
        question: 'How will I get paid',
        answer: 'You will receive your payments in the bank account you have identified in your profile.   Payments depend on bank transaction time, but are generally completed within 3 days',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_faq_category_id: 3,
        question: 'How are the rates set?',
        answer: 'You are 100% autonomous to set the rates you want.  Like any services, we invite you to look at the other rates to ensure competitiveness',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_faq_category_id: 3,
        question: 'What if I get a low rate/review?',
        answer: 'We highly recommend that you are very transparent about the level of expertise you have.  This will ensure good reviews!   HSE show the review score based on the most recent calls, so if you keep getting good reviews in the future, you score will rapidly increase.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_faq_category_id: 3,
        question: 'How to receive a call?',
        answer: 'Buyers will call you directly in HSE, so ensure you are logged in when you can take call.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_faq_category_id: 3,
        question: 'What if I am not available to receive call',
        answer: "There are availability status in HSE.  If you don't want to receive calls, simply adjust your status! ",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_faq_category_id: 3,
        question: 'How is HSE making money with my calls?',
        answer: 'HSP charges operational fees.  These are very transparent when you set up you own rate.   Buyers will see the total charges including your rate and the HSE fees. ',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('faqs', null, {})
  }
};
