'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
   
   return queryInterface.createTable('admin-user', { 
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,

    }, 
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password_hash: Sequelize.STRING,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,


    });
     
  },

  down: (queryInterface) => {
   
    return queryInterface.dropTable('users');
    
  }
};
