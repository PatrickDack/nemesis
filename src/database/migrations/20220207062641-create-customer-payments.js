module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customerPayments',
      {
        customerId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          field: 'customer_id',
          primaryKey: true,
          references: {
            model: 'customers',
            key: 'customer_id',
          },
        },
        paymentId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          field: 'payment_id',
          primaryKey: true,
          references: {
            model: 'payments',
            key: 'payment_id',
          },
        },
        total: {
          allowNull: false,
          type: Sequelize.DECIMAL(9, 2),
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }
    );
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.dropTable('customerPayments');
  }
};
