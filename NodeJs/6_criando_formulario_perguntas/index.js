const express = require('express')
const app = express()
const PORT = 8080
const bodyParser = require('body-parser')
const connection = require('./database/database')
const Pergunta = require('./database/pergunta')
const Resposta = require('./database/resposta')
// Database
connection
    .authenticate()
    .then(() => {
        console.log(`Conexão feita com o banco`)
    })
    .catch((msgErro) => {
        console.log(msgErro)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))

/**O body parser é responsável por traduzir os dados enviados pelo formulário
 * em uma estrutura Javascript que a gente consiga utilizar no backend
 */
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Rotas
app.get('/', (req, res) => {
    /**Dentro desta minha rota, eu estou pesquisando pelas perguntas, 
     * quando a pesquisa é feita, a lista de perguntas é mandada para essa variável(perguntas)
     * eae eu pego essa variável e jogo ela pro meu frontend utilizando o método res.render
     */
    Pergunta.findAll({raw: true, order:[
        ['id', 'DESC'] // ASC = Crescente, DESC = Decrescente
    ]}).then(perguntas => {
        res.render('index', {
            perguntas: perguntas
        })
    })
    
})

app.get('/perguntar', (req, res) => {
    res.render('perguntar')
})

app.post('/salvarpergunta', (req, res) => {
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/') // Após criar, somos redirecionados para a página principal
    })
})

// Se encontrar a pergunta, redirecionar para a página dela(pergunta), caso não achar,
// Enviar para a página principal
app.get('/pergunta/:id', (req, res) => {
    var id = req.params.id
    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta != undefined){ // Pergunta encontrada
            Resposta.findAll({
                where: {perguntaId: pergunta.id},
                order: [ ['id', 'DESC'] ]
            }).then(respostas => {
                res.render('pergunta', {
                    pergunta: pergunta,
                    respostas: respostas
                })
            })
        }else{
            res.redirect('/')
        }
    })
})

app.post('/responder', (req, res) => {
    var corpo = req.body.corpo
    var perguntaId = req.body.pergunta
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect("/pergunta/" + perguntaId)
    })
})

app.listen(PORT, function(){
    console.log(`App rodando`)
})