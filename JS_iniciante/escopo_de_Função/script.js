
//use strict
function mostrarCarro(){
  var carro = 'Fusca';
  console.log(carro);
}
mostrarCarro();
console.log(carro);// Erro, carro is not defined(objetos criados dentro da funcao nao sao passadas pa)
//Escopo de Bloco
/**
 * variaveis criadas com var, vazam o bloco. Por isso com a introducao do ES6 a melhor forma de declararmos uma variável é utilizando CONST e LET, pois estas respeitam o escopo de bloco
 */
if(true){
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); //Carro

/**
 * for loop 
 * ao utilizar VAR dentro de um FOR loop. que é um bloco, o valor da variavel utilizada irá VAZAR e existir fora do loop.
 */
var i = 50;
for(let i = 0; i < 10; i++){
  console.log(`Numero ${i}`);
}
console.log(i * 50);//10

// mantem o escopo no bloco, impede a redeclaracao e impede a modificacao do valor da variavel, evitando bugs no codigo
const mes = 'Dezembro';
mes = 'Janeiro'; //erro, tentou modificar o valor 
//const semana; // erro, declarou sem valor 
const semana = 'Sexta';
const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2024,
}
data.dia = 29;//Funciona
data = 'Janeiro';//ERRO
/**
 * LET
 * mantem o escopo no bloco, impede a redeclaracao, mas permite a modificacao do valor da variavel.
 */
let ano;
ano = 2018;
ano++;
console.log(ano);// 2019

//let ano = 2020; //erro, redeclarou a variavel