module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Customers',
      [
        {
          id: 500,
          shippingRegionId: 1,
          name: 'John Doe',
          email: 'mail~@email.com',
          password: 'password',
          creditCard: 'Q12W3ER4RT56Y7UI8IOUY65TR43',
          address1: ' address 1',
          address2: 'address 2',
          city: 'your city',
          religion: 'customer religion',
          postalCode: '690008',
          dayPhone: '09-987-875',
          evePhone: '2323-2-4546-5757',
          mobPhone: '089-6464-4566',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Customers', null, {})
};
