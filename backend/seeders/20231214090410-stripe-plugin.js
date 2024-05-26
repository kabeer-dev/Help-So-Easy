"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "stripe_plugin",
      [
        {
          active_keys: "test",
          test_public_key:
            "pk_test_51LcWfiKnNQVw1LEcrDZ3E5aHlheXvEJDdLIpFv1Hh1VbxtlFFBR1GHXn15V91qvqmHxrOCsSyEebphUUw1Bk43Z000uOJmwM1S",
          test_secret_key:
            "sk_test_51LcWfiKnNQVw1LEcOSm5rSmZZ8JusWhxdgmJRIuEwvvr8AYyfAT8BZKDlchMBXvUJ0fzGwEQOuYKHgmuw700mDmT00VgVavDl3",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("stripe_plugin", null, {});
  },
};
