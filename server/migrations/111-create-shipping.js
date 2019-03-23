module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Shippings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shippingRegionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'ShippingRegions',
          key: 'id'
        }
      },
      shippingType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shippingCost: {
        type: Sequelize.DECIMAL,
        allowNull: false,
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
    queryInterface.dropTable('Shippings'),
};