const Sequelize = require('sequelize')
const config = require('../config/database')

const Cadastro = require('../models/Cadastro')

const connection = new Sequelize(config)

module.exports = connection;