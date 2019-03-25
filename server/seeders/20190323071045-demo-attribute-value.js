module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'AttributeValues',
      [
        {
          id: 1,
          attributeId: 1,
          value: 'S',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          attributeId: 1,
          value: 'M',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          attributeId: 1,
          value: 'L',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          attributeId: 1,
          value: 'XL',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          attributeId: 1,
          value: 'XXL',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 6,
          attributeId: 2,
          value: 'White',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 7,
          attributeId: 2,
          value: 'Black',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 8,
          attributeId: 2,
          value: 'Red',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 9,
          attributeId: 2,
          value: 'Orange',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 10,
          attributeId: 2,
          value: 'Yellow',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 11,
          attributeId: 2,
          value: 'Green',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 12,
          attributeId: 2,
          value: 'Blue',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 13,
          attributeId: 2,
          value: 'Indigo',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 14,
          attributeId: 2,
          value: 'Purple',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('AttributeValues', null, {})
};
