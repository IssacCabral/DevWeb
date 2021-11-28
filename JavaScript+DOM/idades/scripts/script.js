function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var anoFormulario = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if(anoFormulario.value.length == 0 || Number(anoFormulario.value) > ano){
        window.alert(`Erro! Verifique os dados e tente novamente`);
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(anoFormulario.value);
        var genero = '';
        
        //Cria uma imagem e seta o id //
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        //////////////////////////////

        if(fsex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'images/crianca-menino.png');
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'images/jovem-homem.png');
            }else if(idade < 50){
                // Adulto
                img.setAttribute('src', 'images/homem-adulto.png');
            }else{
                // Idoso
                img.setAttribute('src', 'images/velho-homem.png');
            }
        }else if(fsex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'images/crianca-menina.png');
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'images/jovem-mulher.png');
            }else if(idade < 50){
                // Adulto
                img.setAttribute('src', 'images/mulher-adulta.png');
            }else{
                // Idoso
                img.setAttribute('src', 'images/velha-mulher.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos <br>`;
        res.appendChild(img); // adciona a foto

    }
}