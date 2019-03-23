module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'OrderDetails',
      [
        {
          id: 500,
          orderId : 500,
          productId: 1,
          attribute: 'product attribute',
          productName: 'name of product',
          unitCost: 20.0,
          quantity: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('OrderDetails', null, {})
};
