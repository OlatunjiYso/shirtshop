module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Audits',
      [
        {
          id: 500,
          orderId: 500,
          message: 'About this order',
          code: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Audits', null, {})
};
