const section = document.querySelector('.animais');
/***section.clientHeight;
section.offsetHeight;
section.scrollHeight;*/


const height = listaAnimais.scrollHeight;

const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const raposah2 = document.querySelector('h2'); 

const h2left = raposah2.offsetLeft;

const h2rect = raposah2.getBoundingClientRect();

console.log(rect.top);


console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerWidth,
    window.outerHeight,
    pageXOffset,
);

const small = window.matchMedia('max-width: 600px');

if(small){
    console.log('tela pequena');
} else{
    console.log('tela grande');
}

/** 
if (h2rect.top < 0 ){
    console.log('passou do elemento')
}

let lastScrollTop = 0;
let isScrollingDown = false;

window.addEventListener('scroll', function(e) {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }

  lastScrollTop = scrollTop;

  if (isScrollingDown) {
    section.classList.add('is-scrolling-down');
  } else {
    section.classList.remove('is-scrolling-down');
  }
});
*/
