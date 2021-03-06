'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
   
      return queryInterface.createTable('destinatario', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,

        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        } ,
        rua: {
          type: Sequelize.STRING,
          allowNull: false,
        } ,
        numero: {
          type: Sequelize.INTEGER
        }, 
        estado: {
          type: Sequelize.STRING,
          allowNull: false,
        }, 
        cidade: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cep:{
          type: Sequelize.INTEGER,
          allowNull: false,
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

  down:  (queryInterface) => {
  
     queryInterface.dropTable('recipients');
    
  }
};
