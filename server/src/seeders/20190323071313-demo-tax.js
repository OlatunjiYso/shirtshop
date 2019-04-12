module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Taxes',
      [
        {
          id: 1,
          taxType: 'Sales Tax at 8.5%',
          taxPercentage: 8.5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          taxType: 'No Tax',
          taxPercentage: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Taxes', null, {})
};
