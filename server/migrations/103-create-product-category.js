'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => 
     queryInterface.createTable('ProductCategories', {
      productId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      categoryId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
    queryInterface.dropTable('ProductCategories'),
};