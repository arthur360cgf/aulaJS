//getElementById seleciona e retorna elementos do DOM
//Seleciona pelo ID
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

//Retorna null caso não exista 
const naoExiste = document.getElementById('teste');
/**
 * getElementByClassName e getElementByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo. Significa que se elementos forem adicionados, ela será automaticamente atualizada.
 * 
 * Seleciona pela classe, retonar uma HTMLCollection
 */
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contatos');

//Seleciona todos os UL's, retorna uma HTMLColection
const ul =document.getElementsByTagName('ul');

//retorna o primeiro elemento
console.log(gridSection[0]);

//querySelector retorna o primeiro elemento que combinar com o seu seletor CSS
const animais = document.querySelector('.animais');
const contat0 = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last');
const linkCSS = document.querySelector('[href = "https://"]');
const primeiroU1 = document.querySelector('ul');

//Buscar dentro UL apenas
const navItem = primeiroU1.querySelector('li')
console.log(primeiroU1);

const linkInterno = document.querySelector('[href^= "#"]');

//querySelectorAll retorna todos os elementos copativeis com o seletor CSS em uma NodeList
const gridSection1 = document.querySelectorAll('grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista imagem');

// Retorna o segundo elemento 
console.log(gridSection1[1]);

/**
 * HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.
 */
const gridSection2 = document.querySelectorAll('.grid-section');

gridSection2.forEach(function(gridItem, index, array){
  gridItem.classList.add('azul');
  console.log(index); // index do item na array
  console.log(array); // a array completa
  //é possivel transformar um array-like em um array normal utilizando o metodo Array.from(gridSection2)
});