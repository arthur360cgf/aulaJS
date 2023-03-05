var idade = 28;
var time = null;
var simbolo = Symbol();
console.log(typeof simbolo);

var nome = "Andre";
var sobrenome= 'Rafael';
var nomeCompleto = nome +' '+sobrenome;

console.log(nomeCompleto);


var ano = 2008;
var mes = 8;
console.log(ano+mes);

var frase1 = "Esse é o \"melhor\" jogo";
console.log(frase1);

//template String

var gols = 1000;
var frase = 'Romario fez ' +gols+ 'gols';
console.log(frase);

var gols2 = 1000;
var frase2 = `Romário fez ${gols * 2} gols`;
console.log(frase2);
