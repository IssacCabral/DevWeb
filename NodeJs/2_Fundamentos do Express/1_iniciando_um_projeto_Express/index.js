const express = require("express") // importando o express
const app = express() // Iniciando o Express

/**Tem várias formas de criar rotas
 * usaremos 'get' por ser a mais simples
 * aprenderei mais no assunto de API's
 * 
 * Quando estamos criando uma rota, preciso dizer
 * para qual URL essa rota aponta, e o que essa rota faz
 * a URL "/" significa a página inicial do meu aplicativo
 */
app.get("/", function(req, res){
    res.send("Seja Bem vindo ao meu servidor!")
})

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog")
})

app.get("/canal/youtube", function(req, res){
    res.send("Bem vindo ao meu canal")
})


// Abrir o servidor é sempre a última coisa que a gente faz
app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro")
    }else{
        console.log("Servidor Iniciado com sucesso")
    }
})