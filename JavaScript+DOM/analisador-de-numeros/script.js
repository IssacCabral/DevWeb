var num = document.querySelector('input#fnum');
var lista = document.getElementById('flista');
var result = document.getElementById('resultado');
var values = [];

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    }else{
        return false;
    }
}

function inList(number, list){
    if(list.indexOf(Number(number)) != -1){
        return true;
    }else{
        return false;
    }
}

function adicionar(){
   if(isNumber(num.value) && !inList(num.value, values)){
       values.push(Number(num.value));
       var item = document.createElement('option');
       item.text = `Valor ${num.value} adicionado`;
       lista.appendChild(item);
       result.innerHTML = '';
   }else{
       window.alert('Valor inválido ou já encontrado na lista');
   }
   num.value = ''; // Esvazia a caixinha do número
   num.focus(); // Como se eu clicasse com o mouse na caixinha denovo
}

function finalizar(){
    if(values.length == 0){
        window.alert(`ALGO ESTÁ ERRADO!`);
    }else{
        var maiorNumero = values[0];
        var menorNumero = values[0];
        var media = 0;
        result.innerHTML = '';
        for(var i = 0; i < values.length; i++){
            if(values[i] > maiorNumero){ 
                maiorNumero = values[i];
            }
            if(values[i] < menorNumero){
                menorNumero = values[i];
            }
            media += values[i];
        }
        result.innerHTML += ` Ao todo temos ${values.length} números cadastrados. <br><br>`
        result.innerHTML += ` O maior número é ${maiorNumero}. <br><br>`;
        result.innerHTML += ` O menor número é ${menorNumero}. <br><br>`;
        result.innerHTML += ` A media deles é ${media/values.length}. <br><br>`;
    }
    
}