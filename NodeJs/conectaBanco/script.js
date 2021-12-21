const priquito = require('pg');

const cliente = new priquito.Client({
    host: "localhost",
    database: "Funcionarios",
    user: "postgres",
    password: "postgres",
    port: 5432
}); 

cliente.connect().then((connection) => {
    console.log('Conectado')
    var aux = "INSERT INTO funcionario (cpf, matricula, nome, email, telefone) VALUES('666', 666, 'Henricker Pau de aço', 'email1', 'telefone1')"
    cliente.query(aux).then(() => {
        console.log('Dados inseridos!')
    })
})
console.log("Passei por aqui")

