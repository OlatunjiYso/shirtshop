module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'ShippingRegions',
      [
        {
          id: 1,
          shippingRegion: 'Please Select',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          shippingRegion: 'US / Canada',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          shippingRegion: 'Europe',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          shippingRegion: 'Rest of World',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('ShippingRegions', null, {})
};
