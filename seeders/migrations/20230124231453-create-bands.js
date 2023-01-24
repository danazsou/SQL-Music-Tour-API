'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bands', [{
      name: 'SZA',
      genre: 'R&B',
      available_start_time: '12:00:00',
      end_time: '15:00:00'
    }])
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('bands', null, {})
  }
}