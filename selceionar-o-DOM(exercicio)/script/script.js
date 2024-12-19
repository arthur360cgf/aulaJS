//Retorne no console todas as imagens do site
const imagensAnimal = document.getElementsByTagName('img');
console.log(imagensAnimal);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const fotosAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(fotosAnimais);
// Selecione todos os links internos(onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]');
console.log(links);
// Selecione o primeiro h2 dentro de animais-descrição 
const primeiroH2 = document.querySelector('.animais_descricao');
const h2animais = primeiroH2.querySelector('h2');
console.log(primeiroH2);
console.log(h2animais);
// Selecione o último p do site
const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[ultimoP.length-1]);