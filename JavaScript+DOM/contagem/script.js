function contar(){
    var inicio = document.getElementById('txti');
    var fim = document.getElementById('txtf');
    var passo = document.getElementById('txtp');

    var result = document.getElementById('resultado');

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || passo.value <= 0){
        //window.alert('ERRO! Falta algum parâmetro');
        result.innerHTML = 'impossivel contar';
    }else{
        result.innerHTML = 'Contando: <br>';

        var i = Number(inicio.value); //converte pra inteiro
        var f = Number(fim.value);
        var p = Number(passo.value);

        if(i < f){
            for(var c = i; c <= f; c += p){
                result.innerHTML += `${c} \u{1F480} `;
            }
        }else{
            for(var c = i; c >= f; c -= p){
                result.innerHTML += `${c} \u{1F480} `;
            }
        }
        
        result.innerHTML += `\u{1F3C1}`
    }

}

/*function verifica(var x, var y, var z){
    if(x.value.length == 0 || y.value.length == 0 || z.value.length == 0){
        window.alert('Erro! Faltou alguma coisa!');
    }
}*/