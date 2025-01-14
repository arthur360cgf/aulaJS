// verifique a distancia da primeira imagem em relação ao topo da pagina

const img = document.querySelector('img');
const imgTop = img.offesetTop;
console.log(imgTop);

//Retorne a soma da largura de todas as imagens
function somaImagns(){
    /**const imagens = document.getElementsByTagName('img');
    let soma = 0;
    for(let i = 0; i < imagens.length; i++){
        soma += imagens[i].offsetWidth;
    }
    return soma;*/
    const imagens = document.querySelectorAll('img');
    let soma = 0;
    imagens.forEach((imagem) => {
        soma = soma + imagem.offsetHeight;
        console.log(imagem.offsetWidth);
    });
    console.log(soma);
}

window.onload = function(){
    somaImagns();
}

// Verifique se os links da pagina possuem o minimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link) => { 
    const linkwidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if(linkwidth >= 48 && linkHeight >= 48){
        console.log(link,'possui boa acessibilidade');
    }else{
        console.log(link,'não possui boa acessibilidade');
    }
})


//se o browser for menor que 720px, adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('max-width:720px').matches;

if(browserSmall){
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}
