// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; // 35
console.log(total);
// Crie duas expressões que retornem NaN
var numero2 = 2;
var nan1 = 'isso é um numero 5' - numero2;
var nan2 = '50kg' - 2;
console.log(nan1);
console.log(nan2);

// Somar a string '200' com número 50 e retornar 250
var numero = 50;
var somatorio = '200';
console.log(+somatorio + numero);

// Incremente o número 5 e retorne o seu valor incrementado
var x = 5;
x++;
console.log(x);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN
console.log(+numero /2 + unidade);