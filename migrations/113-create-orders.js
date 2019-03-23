module.exports = {
  up: (queryInterface, Sequelize) => 
     queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Customers',
          key: 'id'
        }
      },
      shippingId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Shippings',
          key: 'id'
        }
      },
      taxId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Taxes',
          key: 'id'
        }
      },
      totalAmount: {
        type: Sequelize.DECIMAL,
        defaultValue: 0.00,
        allowNull: false,
      },
      shippedOn:{
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      comments: {
        type: Sequelize.STRING,
      },
      authCode: {
        type: Sequelize.STRING,
      },
      reference: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: (queryInterface, Sequelize) => 
   queryInterface.dropTable('Orders'),
  
};