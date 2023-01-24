'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('bands', [{
      name: 'SZA',
      genre: 'R&B',
      available_start_time: '12:00:00',
      end_time: '15:00:00'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    // note that this deletes ALL data from the bands table
    await queryInterface.bulkDelete('bands', null, {})
  }
}
