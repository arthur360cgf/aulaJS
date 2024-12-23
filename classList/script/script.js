/**
 * classList
 * Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contem.
 */
const menu = document.querySelector('.menu');

console.log('menu.classList');
menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');

if(menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}
//concatenar string
menu.className = menu.className + ' vermelho';
menu.className += 'azul';
/** 
 menu.className;// string
 menu.classList;// lista de classes
 menu.classList.add('ativo');
 
 if(menu.classList.contains('azul')){
     menu.classList.add('possui-azul');
 }else{
     menu.classList.add('nao-possui-azul');
 }
menu.classList.add('ativo', 'mobile');// duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo');// adiciona/remove uma classe
menu.classList.contains('ativo');// true ou false
menu.classList.replace('ativo', 'inativo');
*/
/**
 * retorna um array-like com os atributos do elemento 
 */
const animais = document.querySelector('.animais');
console.log(animais.attributes);
console.log(animais.attributes[0]);
console.log(animais.attributes['data-texto']);

const img=document.querySelector('.img');

console.log(img.getAttribute('src'));
console.log(img.getAttribute('alt'));

const srcImg = img.getAttribute('alt');

img.setAttribute('alt', 'É uma raposa');
const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);

console.log(srcImg);

const carro = {
    portas: 4,
    andar : function(km){
        console.log(`O carro andou ${km} km.`);
    }
}