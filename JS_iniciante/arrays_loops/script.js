var videoGames = ['Switch', 'PS4', 'XBOX'];
//metodos 
videoGames.pop(); // remove o ultimo item e retorna ele
videoGames.push('3DS'); // Adiciona ao final do array
videoGames.length; // 3

//o for loop possui 3 partes INICIO, CONDICAO E INCREMENTO
for (var numero = 0; numero < 10; numero++){
  console.log(numero);
}
// retorna de 0 a 9 no console

var i = 0;
while (i < 10){
  console.log(i);
  i++;
}
for(var item = 0; item < videoGames.length; item++){
  console.log(videoGames[item]);
  if(videoGames[i] === 'PS4'){
    break;
  }
}
videoGames.forEach(function(item){
  console.log(item);
});

var frutas = ['Banana', 'Pera', 'Uva', 'Abacaxi', 'Kiwi'];
frutas.forEach(function(fruta, index, array){
  console.log(fruta, index, array)
});

var numero = 0;
var maximo = 50;
for(;numero< maximo;){
  console.log(numero)
  numero++
}
/**
 * comentario 
 * de 
 * varias 
 * linhas
 */

