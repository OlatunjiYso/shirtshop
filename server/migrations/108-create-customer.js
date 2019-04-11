module.exports = {
  up: (queryInterface, Sequelize) => 
     queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shippingRegionId: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      creditCard: {
        type: Sequelize.TEXT
      },
      address1: {
        type: Sequelize.TEXT
      },
      address2: {
        type: Sequelize.TEXT
      },
      city: {
        type: Sequelize.STRING
      },
      religion: {
        type: Sequelize.STRING
      },
      postalCode: {
        type: Sequelize.STRING
      },
      dayPhone: {
        type: Sequelize.STRING,
      },
      evePhone: {
        type: Sequelize.STRING,
      },
      mobPhone: {
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
     queryInterface.dropTable('Customers'),
};