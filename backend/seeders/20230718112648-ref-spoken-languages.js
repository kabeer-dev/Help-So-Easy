'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('ref_spoken_languages', [
    {
      name: 'English',
      is_default: 1,
      sort: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Spanish',
      is_default: 0,
      sort: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'French',

      is_default: 0,
      sort: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'German',

      is_default: 0,
      sort: 4,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Russian',

      is_default: 0,
      sort: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Hindi',
  
      is_default: 0,
      sort: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Bengali',

      is_default: 0,
      sort: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Portuguese',

      is_default: 0,
      sort: 8,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Italian',

      is_default: 0,
      sort: 9,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Mandarin Chinese',

      is_default: 0,
      sort: 10,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Cantonese',

      is_default: 0,
      sort: 11,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Tibetan',

      is_default: 0,
      sort: 12,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Burmese',

      is_default: 0,
      sort: 13,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Arabic',

      is_default: 0,
      sort: 14,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Hebrew',
      is_default: 0,
      sort: 15,
      created_at: new Date(),
      updated_at: new Date()
    },
    // {
    //   name: ' Somali',

    //   is_default: 0,
    //   sort: 16,
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    {
      name: 'Swahili',

      is_default: 0,
      sort: 17,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Yoruba',

      is_default: 0,
      sort: 18,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Igbo',

      is_default: 0,
      sort: 19,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Zulu',

      is_default: 0,
      sort: 20,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Indonesian',

      is_default: 0,
      sort: 21,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Hawaiian',
  
      is_default: 0,
      sort: 22,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Malagasy',
      
      is_default: 0,
      sort: 23,
      created_at: new Date(),
      updated_at: new Date()
    },
    
    {
      name: 'Tamil',
      
      is_default: 0,
      sort: 24,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Telugu',
      
      is_default: 0,
      sort: 25,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Kannada',
      
      is_default: 0,
      sort: 26,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Turkish',
      
      is_default: 0,
      sort: 27,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Mongolian',
      
      is_default: 0,
      sort: 28,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Finnish',
      
      is_default: 0,
      sort: 29,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Hungarian',
      
      is_default: 0,
      sort: 30,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Estonian',
      
      is_default: 0,
      sort: 31,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Japanese',
      
      is_default: 0,
      sort: 32,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Ryukyuan languages',
      
      is_default: 0,
      sort: 33,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Korean',
      
      is_default: 0,
      sort: 34,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Thai',
      
      is_default: 0,
      sort: 35,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Lao',
      
      is_default: 0,
      sort: 36,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Kanuri',
      
      is_default: 0,
      sort: 37,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Songhai',
      
      is_default: 0,
      sort: 38,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Nuer',
      
      is_default: 0,
      sort: 39,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Warlpiri',
      
      is_default: 0,
      sort: 40,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Arrernte',
      
      is_default: 0,
      sort: 41,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Pitjantjatjara',
      
      is_default: 0,
      sort: 42,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Hiri Motu',
      
      is_default: 0,
      sort: 43,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Tok Pisin',
      
      is_default: 0,
      sort: 44,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Punjabi',
      
      is_default: 0,
      sort: 45,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Javanese',
      
      is_default: 0,
      sort: 46,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Marathi',
      
      is_default: 0,
      sort: 47,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Urdu',
      
      is_default: 0,
      sort: 48,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Vietnamese',
      
      is_default: 0,
      sort: 49,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Gujarati',
      
      is_default: 0,
      sort: 50,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Polish',
      
      is_default: 0,
      sort: 51,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Ukrainian',
      
      is_default: 0,
      sort: 51,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Dutch',
      
      is_default: 0,
      sort: 52,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Filipino ',
      
      is_default: 0,
      sort: 53,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Pashto ',
      
      is_default: 0,
      sort: 54,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Malayalam',
      
      is_default: 0,
      sort: 55,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Sundanese',
      
      is_default: 0,
      sort: 56,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Hausa',
      
      is_default: 0,
      sort: 57,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Serbo-Croatian',
      
      is_default: 0,
      sort: 58,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Kurdish',
      
      is_default: 0,
      sort: 59,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Amharic',
      
      is_default: 0,
      sort: 60,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Farsi (Persian)',
      
      is_default: 0,
      sort: 61,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Sindhi',
      
      is_default: 0,
      sort: 62,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Oromo',
      
      is_default: 0,
      sort: 63,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Azerbaijani',
      
      is_default: 0,
      sort: 64,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Awadhi',
      
      is_default: 0,
      sort: 65,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Gan Chinese',
      
      is_default: 0,
      sort: 66,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Cebuano',
      
      is_default: 0,
      sort: 67,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Magahi',
      
      is_default: 0,
      sort: 68,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Haryanvi',
      
      is_default: 0,
      sort: 69,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Chhattisgarhi',
      
      is_default: 0,
      sort: 70,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Greek',
      
      is_default: 0,
      sort: 71,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Chewa',
      
      is_default: 0,
      sort: 72,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Deccan',
      
      is_default: 0,
      sort: 73,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Marwari',
      
      is_default: 0,
      sort: 74,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Kazakh',
      
      is_default: 0,
      sort: 75,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Northern Min',
      
      is_default: 0,
      sort: 76,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Sylheti',
      
      is_default: 0,
      sort: 77,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Czech',
      
      is_default: 0,
      sort: 78,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Kinyarwanda',
      
      is_default: 0,
      sort: 79,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Dhundhari',
      
      is_default: 0,
      sort: 79,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Haitian Creole',
      
      is_default: 0,
      sort: 80,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Eastern Min',
      
      is_default: 0,
      sort: 81,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Ilocano',
      
      is_default: 0,
      sort: 82,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Quechua',
      
      is_default: 0,
      sort: 83,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Kirundi',
      
      is_default: 0,
      sort: 84,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Swedish',
      
      is_default: 0,
      sort: 85,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Hmong',
      
      is_default: 0,
      sort: 86,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Shona',
      
      is_default: 0,
      sort: 87,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Uyghur',
      
      is_default: 0,
      sort: 88,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Hiligaynon/Ilonggo',
      
      is_default: 0,
      sort: 89,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Mossi',
      
      is_default: 0,
      sort: 90,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Xhosa',
      
      is_default: 0,
      sort: 91,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Belarusian',
      
      is_default: 0,
      sort: 92,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Balochi',
      
      is_default: 0,
      sort: 93,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Shanghainese',
      
      is_default: 0,
      sort: 94,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Tigrinya',
      
      is_default: 0,
      sort: 95,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Ganda',
      
      is_default: 0,
      sort: 96,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Czech',
      
      is_default: 0,
      sort: 97,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Jula/Dyula',
      
      is_default: 0,
      sort: 98,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Kikuyu',
      
      is_default: 0,
      sort: 99,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Danish',
      
      is_default: 0,
      sort: 100,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Slovak',
      
      is_default: 0,
      sort: 101,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Norwegian',
      
      is_default: 0,
      sort: 102,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Georgian',
      
      is_default: 0,
      sort: 103,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Catalan',
      
      is_default: 0,
      sort: 104,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Armenian',
      
      is_default: 0,
      sort: 105,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Albanian',
      
      is_default: 0,
      sort: 106,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Lithuanian',
      
      is_default: 0,
      sort: 107,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Macedonian',
      
      is_default: 0,
      sort: 108,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Slovenian',
      
      is_default: 0,
      sort: 109,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Latvian',
      
      is_default: 0,
      sort: 110,
      created_at: new Date(),
      updated_at: new Date()
    },

   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('ref_spoken_languages', null, {})
  }
};
