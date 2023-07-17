let imagem = document.querySelector(".nikeair");
let circulo = document.querySelector(".circulo");


function trocaImagem(endereco){
    imagem.src = endereco
}

function trocaCor(cor){
    circulo.style.background = cor
}

function trocaImagemPLayer(){
    let imagemPlayer = document.getElementById("trocaPlayer");
    if(imagemPlayer.style.opacity == 0) {
        imagemPlayer.style.opacity = 1
    }else{
        imagemPlayer.style.opacity = 0
    }
}

setInterval (function(){
    trocaImagemPLayer()
}, 4000);