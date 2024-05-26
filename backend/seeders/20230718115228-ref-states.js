'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const usaStates = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
    const canadaStates = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Northwest Territories', 'Nunavut', 'Yukon']
    const { RefCountry } = require('../models');
    const countries = await RefCountry.findAll();
    const statesData = [];

    for (const country of countries) {
      if (country.name === 'USA') {
        // Add states for USA 
        usaStates.forEach((usaState) => {
          statesData.push({
            fk_country_id: country.id, 
            name: usaState,
            created_at: new Date(),
            updated_at: new Date(),
          })
        })
      }
      else if(country.name === 'Canada'){
        canadaStates.forEach((canadaState) => {
          statesData.push({
            fk_country_id: country.id, 
            name: canadaState,
            created_at: new Date(),
            updated_at: new Date(),
          })
        })
      
      }
       else {
        // For other countries, add 'N/A' state
        statesData.push({
          fk_country_id: country.id,
          name: 'N/A',
          created_at: new Date(),
          updated_at: new Date()
        });
      }
    }
    

    await queryInterface.bulkInsert('ref_states', statesData);
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ref_states', null, {})
  }
};
