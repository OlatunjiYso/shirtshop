module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Reviews',
      [
        {
          id: 500,
          customerId: 500,
          productId: 1,
          review: 'I love the product',
          rating: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Reviews', null, {})
};