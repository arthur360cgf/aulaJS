/**console.log(window);
//window é um objeto global do browser
//possui diferentes metodos e propriedades

window.innerHeight; //retorna a altura do browser
*/
console.group(URL);

if(URL === 'http://127.0.0.1:5500/JS_iniciante/DOM/'){
  console.log('É igual');
}else{
  console.log('diferente')
}

const h1selecionado = document.querySelector('h1');
const h1Classes = h1selecionado.classList;

h1selecionado.addEventListener('click', function(){
  console.log('Clicou em ', h1selecionado.innerText);
})

function callbackh1(){
  console.log('Clicou em', h1selecionado.innerText);
}

/**
 const titulo = document.querySelector('h1')
 titulo.innerText; retorna o texto
 titulo.classList; retorna a classe
 titulo.id; retorna o id
 titulo.offsetHeight; retorna a altura do elemento
 titulo.addEventListener('click', callback); ativa a funcao ao click no titulo
 *
 */
