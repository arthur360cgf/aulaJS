/**Quando o usuario clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. 
 * Previna o comportamento padrao desses links 
*/
const links12 = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
    event.preventDefault(); // previne o comportamento padrao do link
    links12.forEach(function(link) {
        link.classList.remove('ativo'); // remove a classe ativo dos outros links
    })
    event.currentTarget.classList.add('ativo'); //0
    console.log(event);

}

links12.forEach(link => {
    link.addEventListener('click', handleLink);
});




/**
 * Selecione todos os elementos do site começando a partir do body,
 * ao clique mostre exatamente quais elementos estão sendo clicados
 */

const todosElementos = document.querySelectorAll('body *');

function handleElemento(event) {
    console.log(event.currentTarget);
}

todosElementos.forEach(elemento => {
    elemento.addEventListener('click', handleElemento)
});


/**
 * Utilizando o código anterior, ao invés de mostrar no console,
 * remova o elemento que está sendo clicado, o metodo remove() remove um elemento
 */
function handleElemento(event) {
    event.currentTarget.remove();
}

todosElementos.forEach(elemento => {
    elemento.addEventListener('click', handleElemento)
});


// se o usuario clicar na tecla (t), aumente todo o texto do site

function handleClickT(event){
    if(event.key === 't'){
        console.log('Clicou T');
        document.documentElement.classList.toggle('textomaior');

    }
    window.addEventListener('keydown', handleClickT);
}