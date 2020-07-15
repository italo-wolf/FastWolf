'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
   
   return queryInterface.createTable('admin-user', { 
     id: Sequelize.INTEGER ,
     name: Sequelize.STRING,
    email: Sequelize.STRING,
    password_hash: Sequelize.STRING,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,


    });
     
  },

  down: (queryInterface) => {
   
    return queryInterface.dropTable('users');
    
  }
};
