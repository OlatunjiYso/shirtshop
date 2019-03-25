module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Shippings',
      [
        {
          id: 1,
          shippingType: 'Next Day Delivery ($20)',
          shippingCost: 20,
          shippingRegionId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          shippingType: '3-4 Days ($10)',
          shippingCost: 10,
          shippingRegionId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          shippingType: '7 Days ($5)',
          shippingCost: 5,
          shippingRegionId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          shippingType: 'By air (7 days, $25)',
          shippingCost: 25,
          shippingRegionId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          shippingType: 'By sea (28 days, $10)',
          shippingCost: 10,
          shippingRegionId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 6,
          shippingType: 'By air (10 days, $35)',
          shippingCost: 35,
          shippingRegionId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 7,
          shippingType: 'By sea (28 days, $30)',
          shippingCost: 30,
          shippingRegionId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Shippings', null, {})
};
