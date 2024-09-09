const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Cadastro = sequelize.define('Cadastro',
        {
          cpf: {type: DataTypes.STRING, primaryKey: true},
          pessoa: DataTypes.STRING,
          nome: DataTypes.STRING,
          telefone: DataTypes.STRING
        },
        { tableName: 'cadastros'}
        
    )
    return Cadastro
}
