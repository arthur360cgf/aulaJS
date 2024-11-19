var nome = 'André';
nome.length; // 5
nome.charAt(1); // 'n'
nome.replace('ré', 'rei'); // 'Andrei'
nome; // 'André'

var nomeMinsculo = nome.toLowerCase;
var numeroDeLetras = nome.length;
var altura = 1.8;
altura.toString();
altura.toFixed();

function areaQuadrado(lado){
  return lado * lado;
}

var numero = 11.8;
numero.toFixed;// '12'

areaQuadrado.toString();
//function areQuadrado(lado){
//  return lado * lado; 
//}

areaQuadrado.length; // 1

//elementos do DOM


var btn = document.querySelector('.btn');

btn.classList.add('azul');
btn.innerText;
btn.addEventListener('click', function(){
  console.log('clicou')
})

var campoNumero = document.createTextNode('.campoNumero')

campoNumero.classList.add('numero');
campoNumero.insertData;
campoNumero.addEventListener('text', function(){
  areaQuadrado(campoNumero)
})

var resultado = document.querySelector('.resultado');
resultado.classList.add('resultado');
resultado.innerText;
resultado.addEventListener('click', function(){
  console.log('A area é = ' + areaQuadrado(2))
})

var menu 