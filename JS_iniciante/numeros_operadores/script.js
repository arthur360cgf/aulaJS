
var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; //20000000000

console.log(idade);
console.log(exp);

var soma = 100 + 50;
var subtracao = 100 - 50;
var multiplicacao = 1000 * 2;
var divisao = 100 / 2;
var expoente = 2 ** 4;
var modulo = 14 % 5;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(expoente);
console.log(modulo);

var soma1 = '100' + 50;
var subtracao1 = '100' - 50;
var multiplicacao1 = '100' * '2';
var divisao = 'Comprei 10' / 2; //NaN (Not a Number)

console.log(isNaN(divisao)); // True or false

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 =  10 + 10 * 2 + 20; // 40

var soma2 = (10 + 10) + 20 + 30 * 4 / (2 + 10);

//Unarios
var x = 5;
console.log(++x);
console.log(x);

var frase4 = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (Número)
-idade; // -28(Número)
console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade); //1
