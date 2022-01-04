const Sequelize = require('sequelize')
const user = 'postgres'
const password = 'postgres'

const connection = new Sequelize('plataforma_de_perguntas', user, password, {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = connection