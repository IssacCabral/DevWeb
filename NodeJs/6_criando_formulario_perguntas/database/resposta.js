const Sequelize = require('sequelize')
const connection = require("./database")

const Resposta = connection.define('respostas', {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Resposta.sync({force: false}) // Para não recriar a tabela caso ela já exista
module.exports = Resposta