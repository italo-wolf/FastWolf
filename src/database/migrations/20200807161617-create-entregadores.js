'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
   
   return queryInterface.createTable('entregadores', { 
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
    password_hash: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    avatar_id:{
      type: Sequelize.INTEGER,
      references:{model: 'files', key: 'id'},
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    }


    });
     
  },

  down: (queryInterface) => {
   
    return queryInterface.dropTable('entregadores');
    
  }
};

