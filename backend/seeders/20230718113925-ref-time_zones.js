'use strict';
const moment = require('moment-timezone');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // const time_zones = [];
    // const allTimezones = moment.tz.names();

    // allTimezones.forEach(timezone => {
    //   const zone = moment.tz.zone(timezone);
    //   const offset = zone.utcOffset(new Date());
    //   const offsetString = formatOffset(offset);
    
    //   time_zones.push({
    //     name: timezone,
    //     offset: offsetString,
    //     description: timezone.abbr || 'N/A',
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   })
    // });

    // function formatOffset(offset) {
    //   const hours = Math.floor(offset / 60);
    //   const minutes = Math.abs(offset % 60);
    //   const sign = offset >= 0 ? '+' : '-';
      
    //   return `${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    // }


   await queryInterface.bulkInsert('ref_time_zones', [

      {
        name: 'Christmas Island/Kiribati',
        offset: 'UTC +14:00',
        description: 'LINT',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Chatham Islands/New Zealand',
        offset: 'UTC +13:45',
        description: 'CHADT',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'New Zealand with exceptions and 5 more',
        offset: 'UTC +13:00',
        description: 'NZDT',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Fiji, small region of Russia and 7 more',
        offset: 'UTC +12:00',
        description: 'ANAT',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'much of Australia and 6 more',
        offset: 'UTC +11:00',
        description: 'AEDT',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'small region of Australia',
        offset: 'UTC +10:30',
        description: 'ACDT',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Queensland/Australia and 6 more',
        offset: 'UTC +10:00',
        description: 'AEST',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Northern Territory/Australia',
        offset: 'UTC +9:30',
        description: 'ACST',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Japan, South Korea and 5 more',
        offset: 'UTC +9:00',
        description: 'JST',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Western Australia/Australia',
        offset: 'UTC +8:45',
        description: 'ACWST',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'China, Philippines and 11 more',
        offset: 'UTC +8:00',
        description: 'CST',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'much of Indonesia, Thailand and 7 more',
        offset: 'UTC +7:00',
        description: 'WIB',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Myanmar and Cocos Islands',
        offset: 'UTC +6:30',
        description: 'MMT',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Bangladesh and 6 more',
        offset: 'UTC +6:00',
        description: 'BST',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Nepal',
        offset: 'UTC +5:45',
        description: 'NPT',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'India and Sri Lanka',
        offset: 'UTC +5:30',
        description: 'IST',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Pakistan and 9 more',
        offset: 'UTC +5:00',
        description: 'UZT',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Afghanistan',
        offset: 'UTC +4:30',
        description: 'AFT',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Azerbaijan and 8 more',
        offset: 'UTC +4:00',
        description: 'GST',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Iran',
        offset: 'UTC +3:30',
        description: 'IRST',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Moscow/Russia and 23 more',
        offset: 'UTC +3:00',
        description: 'MSK',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Greece and 30 more',
        offset: 'UTC +2:00',
        description: 'EET',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Germany and 45 more',
        offset: 'UTC +1:00',
        description: 'CET',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'United Kingdom and 24 more',
        offset: 'UTC +0:00',
        description: 'GMT',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Cabo Verde and 2 more',
        offset: 'UTC -1:00',
        description: 'CVT',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'most of Greenland and 2 more',
        offset: 'UTC -2:00',
        description: 'CGT',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'most of Brazil, Argentina and 8 more',
        offset: 'UTC -3:00',
        description: 'ART',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Newfoundland and Labrador/Canada',
        offset: 'UTC -3:30',
        description: 'NST',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'some regions of Canada and 29 more',
        offset: 'UTC -4:00',
        description: 'VET',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'regions of USA and 14 more',
        offset: 'UTC -5:00',
        description: 'EST',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'regions of USA and 9 more',
        offset: 'UTC -6:00',
        description: 'CST',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'some regions of USA and 2 more',
        offset: 'UTC -7:00',
        description: 'MST',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'regions of USA and 4 more',
        offset: 'UTC -8:00',
        description: 'PST',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Alaska/USA and regions of French Polynesia',
        offset: 'UTC -9:00',
        description: 'AKST',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Marquesas Islands/French Polynesia',
        offset: 'UTC -9:30',
        description: 'MART',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'small region of USA and 2 more',
        offset: 'UTC -10:00',
        description: 'HST',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'American Samoa and 2 more',
        offset: 'UTC -11:00',
        description: 'NUT',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'much of US Minor Outlying Islands',
        offset: 'UTC -12:00',
        description: 'AoE',
        is_default: 0,
        created_at: new Date(),
        updated_at: new Date()
      }
    
     
   ])
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ref_time_zones', null, {})
  }
};
