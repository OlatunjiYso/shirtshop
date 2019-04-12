module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Orders',
      [
        {
          id: 500,
          customerId: 500,
          shippingId: 1,
          taxId: 1,
          totalAmount: 60.0,
          shippedOn: new Date(),
          status: 0,
          comments: ' This is a comment',
          authcode: 'q1w2e3',
          reference: 'This is a reference',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Orders', null, {})
};
