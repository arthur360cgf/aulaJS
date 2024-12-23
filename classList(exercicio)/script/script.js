//adicone a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu a');

menu.forEach(item => {
    item.classList.add('ativo');
});
// remova a classe ativo de todos os itens do menu e mantenhas apenas no primeiro
menu.forEach(item => {
  item.classList.remove('ativo');
});
itensmMenu[0].classList.add('ativo');
// verifique se as imagens possuem o atributo alt 
const imgs = document.querySelectorAll('.img');
imgs.forEach(img => {
  const possuiAtributo = img.hasAttribute('alt');
  console.log(img, possuiAtributo);
});
// modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com/');

console.log(link);