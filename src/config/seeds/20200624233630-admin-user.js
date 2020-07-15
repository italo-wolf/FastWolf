'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('admin-user', [{
        name: "Distribuidora FastFeet",
        email: "admin@fastfeet.com",
        password_hash: bcrypt.hashSync("123456", 8),
        created_at: new Date(),
        updated_at: new Date()
      }
    ], 
      {}
      );
    
  },

  down: async (queryInterface) => {
   
      await queryInterface.bulkDelete('admin-user', null, {});
     
  }
};
