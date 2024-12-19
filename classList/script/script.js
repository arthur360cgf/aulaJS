/**
 * classList
 * Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contem.
 */
const menu = document.querySelector('.menu');

menu.className;// string
menu.classList;// lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile');// duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo');// adiciona/remove uma classe
menu.classList.contains('ativo');// true ou false
menu.classList.replace('ativo', 'inativo');