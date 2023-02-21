'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      "Items",
      [
        {
          name: "new website qmun dari rumah",
          TodoId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "React Native deep dive",
          TodoId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );

  },

  async down(queryInterface, Sequelize) { }
};
