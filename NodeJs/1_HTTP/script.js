/**
 *      Digamos que o Jonas, certo dia, resolve acessar o google para pesquisas de sua faculdade.
 * No momento que Jonas acessa o Google, ele pede para o servidor do Google mandar arquivos pra ele:
 * Arquivos HTML, CSS, imagens, etc...
 * Ou seja, arquivos para compor a visualização que Jonas ver na tela quando acessa um site
 * 
 *      E essa comunicação feita entre o cliente(Jonas) e o servidor(Google),
 * é realizada através de um protocolo chamado HTTP. É através do protocolo HTTP
 * que você consegue se comunicar com servidores de site por exemplo.
 * Você consegue pedir dados, enviar dados, receber dados através do protocolo HTTP
 * 
 */


// Como esse módulo faz parte do núcleo do node, não precisamos digitar diretório
// só precisamos digitar o nome do módulo 
// Não vai ser essa biblioteca que utilizaremos pois ela é muito simples


const http = require("http") // carregando o módulo http do node nesta variável
// A função listen serve para informar qual porta de rede desejo abrir meu server
http.createServer(function(req, res){
    res.end("Ola")
}).listen(8081)

console.log('Servidor Rodando')