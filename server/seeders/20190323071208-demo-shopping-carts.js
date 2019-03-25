module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'ShoppingCarts',
      [
        {
          id: 500,
          productId: 1,
          customerId: 500,
          attributes: 'These are the attributes',
          quantity: 5,
          buyNow: true,
          createdAt: new Date(),
          updatedAt: new Date()

        }
      ],
      {}),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('ShoppingCarts', null, {})
};
