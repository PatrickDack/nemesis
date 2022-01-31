'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('services',
    {
      serviceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'service_id',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(6, 2),
        allowNull:false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.dropTable('services');
  }
};
