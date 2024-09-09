'use strict';

module.exports = {
 up: async(queryInterface, Sequelize) => {
   await queryInterface.createTable('cadastros', {
    cpf: {
      type: Sequelize.STRING,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    pessoa: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
   })
  },

down: async  (queryInterface, Sequelize) => {
   await queryInterface.dropTable('cadastros');
  }
};
