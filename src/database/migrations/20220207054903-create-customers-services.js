module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customerServices', {
      customerId: {
        allowNull: false,
        field: 'customer_id',
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'customers',
          key: 'customer_id',
        }
      },
      serviceId: {
        allowNull: false,
        field: 'service_id',
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'services',
          key: 'service_id',
        }
      },
      progress: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    },
    );
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.dropTable('customerServices');
  }
};
