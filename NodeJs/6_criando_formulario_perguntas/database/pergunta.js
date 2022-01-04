const Sequelize = require('sequelize')
const connection = require("./database")

const Pergunta = connection.define('pergunta', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false // Impede que esse campo 'type' receba valores nulos
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Pergunta.sync({force: false}).then(() => {})

module.exports = Pergunta