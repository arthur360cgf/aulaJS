/**propriedades que retornam uma string contendo o html ou texto.
 * É possivel atribuir um novo valor para as mesmas
 * element.innerText = "Novo texto"
 */

const h1 = document.querySelector('h1');

h1.innerText; // retorna o texto do h1
console.log(h1.innerText);

const animaisLista = document.querySelector('.animais-lista');

animaisLista.innerHTML; //retorna todo o html da lista
console.log(animaisLista.innerHTML);

const menu = document.querySelector('.menu');
menu.outerHTML; //todo o html do elemento 
menu.innerHTML; //html interno
menu.innerText; //texto, sem tags

menu.innerText = '<p>Texto</p>'; //a tag vai como texto
menu.innerHTML = '<p>Texto</p>'; //a tag é renderizada

/***
 * Transversing
 * Como navegar pelo DOM, utilizando suas propriedades e métodos
 * 
 */
const lista = document.querySelector('.animais-lista');
lista.parentElement; //pai
lista.parentElement.parentElement; //pai do pai
lista.previousElementSibling; //elemento acima
lista.nextElementSibling; //elemento abaixo

lista.children; //HTMLCollection com os filhos
lista.children[0]; //primeiro filho
lista.children[--lista.children.length]; //ultimo filho

lista.querySelectorAll('li'); //todos os LI's
lista.querySelector('li:last-child'); //ultimo filho

lista.previousElementSibling; //elemento acima
lista.previousSibling; //node acima

lista.firstChild; //primeiro node child
lista.childNodes; //todos os node child

/**É possivel mover elementos no dom com metodos de Node */

const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(lista); //move lista para o final de contato
contato.insertBefore(lista, titulo); //insere a lista antes de titulo
contato.removeChild(titulo); //remove titulo de contato
contato.replaceChild(lista, titulo); //substitui titulo por lista

/**Novos elementos
 * Podemos criar novos elementos com o método createElement()
 */
const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo titulo';
novoH1.classList.add('titulo');

animaisLista.appendChild(novoH1);

/**Clonar elementos
 * todo elemento selecionado é unico. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()
 */

const titulo1 = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo1;
//titulo1, titulo2 e novoTitulo são iguais

const cloneTilulo = titulo1.cloneNode(true); //true para copiar os filhos
const contato1 = document.querySelector('.contato');
contato.appendChild(cloneTitulo);