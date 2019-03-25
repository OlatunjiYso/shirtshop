module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Attributes',
      [
        {
          id: 1,
          name: 'Size',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 2,
          name: 'Color',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Attributes', null, {})
};
