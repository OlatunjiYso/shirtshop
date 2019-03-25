module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('Taxes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      taxType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      taxPercentage: {
        type: Sequelize.DECIMAL,
        allowNull: false
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
    queryInterface.dropTable('Taxes'),
};