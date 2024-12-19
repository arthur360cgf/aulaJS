const imgs = document.querySelectorAll('img');

let i = 0;

/**imgs.forEach(function(item, index, array){
    console.log(item, index, array);
})*/

/**
 * forEach é um metodo de Array, alguns objetos array-like possuem este metodo. Caso não possua, o ideial é transformá-los em uma array
 */

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray = forEach(function(item){
    console.log(item);
});

/**
 * Arrow function
 * Sintaxe curta em relação a FUNCTION EXPRESSION. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.
 */

const imgs2 = document.querySelectorAll('img');

//argumento unico não precisa de parenteses
imgs2.forEach(item => console.log(item));

//multiplos argumentos precisam de parenteses 
imgs2.forEach((item, index) => {
    console.log(item, index)
});

//sem argumentos precisa dos parenteses, mesmo vazio
let j = 0;
imgs2.forEach(()=>{
    console.log(i++);
});