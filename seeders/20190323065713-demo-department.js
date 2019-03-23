module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Departments',
      [
        {
          id: 1,
          name: 'Regional',
          description: 'Proud of your country? Wear a T-shirt with a national symbol stamp!',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Nature',
          description: 'Find beautiful T-shirts with animals and flowers in our Nature department!',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: 'Seasonal',
          description: 'Each time of the year has a special flavor. Our seasonal T-shirts express traditional symbols using unique postal stamp pictures.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Departments', null, {})
};