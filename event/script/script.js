const img  = document.querySelector('img');
function callback(){
    console.log('clickou');
}


img.addEventListener('click', callback); // Adiciona o callback à função img.addEventListener()

console.log(img);


const animaisLista = document.querySelector('.animaisLista');

function execultarCallback(event){
    const currentTarget = event.currentTarget; // this
    const target = event.target; // onde o click ocorreu
    const type = event.type; //tipo de evento
    const path = event.path; 
    console.log(currentTarget, target, type, path);
}

// animaisLista.addEventListener('click', execultarCallback); // Adiciona o callback à função animaisLista.addEventListener()

/**
 * Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado.
 */
const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event){
    event.preventDefault(); // previne o comportamento padrão do evento
    console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink); // Adiciona o callback à função linkExterno.addEventListener()


const img2 = document.querySelector('img');
function callback(event){
    console.log(this);
    console.log(this.getAttribute('src'));
}
img2.addEventListener('click', callback);

const h1=document.querySelector('h1');
function handleEvent(event){
    console.log(event.type, event);
}
h1.addEventListener('click', handleEvent);
h1.addEventListener('mouseenter', handleEvent);
h1.addEventListener('mousemove', handleEvent);

window.addEventListener('scroll', handleEvent);
window.addEventListener('resize', handleEvent);
window.addEventListener('keydown', handleEvent);

function handleKeyboard(event){
    if(event.key === 'a')
        document.body.classList.toggle('azul');
    else if(event.key === 'v')
        document.body.classList.toggle('vermelho');
}

document.addEventListener('keydown', handleKeyboard);

const imgs = document.querySelectorAll('img');

// function imgSrc(event){
//     const src = event.currentTarget.getAttribute('src');
//     console.log(src);
// }
// imgs.forEach((img) => {
//     img.addEventListener('click', imgSrc);
// });

function handleImg(event){
    console.log(event.target.getAttribute('src'));
}

imgs.forEach((img) => {
    img.addEventListener('click', handleImg);
});