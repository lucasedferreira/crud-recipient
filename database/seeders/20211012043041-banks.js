'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Banks', [
      {
        code: '001',
        name: 'Banco do Brasil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: '756',
        name: 'Sicoob',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: '033',
        name: 'Santander',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: '237',
        name: 'Bradesco',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: '748',
        name: 'Sicredi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: '184',
        name: 'Itaú',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Banks', null, {});
  }
};
