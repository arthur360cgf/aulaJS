/**var food = 10;
var peaple = 5;
var foodCheck;
foodCheck = (food/peaple >= 1) ? 'we have enough food' : 'we dont have enough food';
console.log(foodCheck);

var plants = 0;
for(plants; plants <= 100;  plants=+peaple){
  console.log(plants)
  while(plants < 100){
    console.log('we need more food');
  }
}
*/
/**
 * Crie uma array com os anos que o brasil ganhou a copa 
 * 1959, 1962, 1970, 1994, 2002
 /* 
  * Interaja com o array utilizando um loop, para mostrar no console a seguinte mensagem
  * 'O brasil ganhou a copa de ${ano}'
 * */
var vitoriaBrasil = [1959, 1962, 1970, 1994, 2002];
for(numero = 0; numero < vitoriaBrasil.length; numero++){
  console.log("o Brasil ganhou a copa de "+ vitoriaBrasil[numero]);
}
 /* 
 * Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
 */
var frutas = ['Banana', 'Uva', 'Kiwi', 'Pera', 'Melancia']
for(numero = 0; numero < frutas.length; numero++){
  console.log(frutas[numero]);
  if(frutas[numero] === 'Pera'){
    break;
  }
}
//coloque a ultima fruta do array acima em uma variavel, sem a remover do array
/**var ultimaFruta = frutas.pop();
console.log(ultimaFruta);
frutas.push(ultimaFruta);
console.log(frutas);
*/
var ultimaFruta = frutas[frutas.length -1];
console.log(ultimaFruta)