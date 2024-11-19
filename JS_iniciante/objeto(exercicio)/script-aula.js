var pessoa = {
  nome: "André",
  idade: 28,
  profissao: "Desnger",
  possuiFaculdade: true,
}

pessoa.nome;//André
pessoa.possuiFaculdade;// true
console.log(pessoa);

var quadrado = {
  lados: 4,
  area: function(lado){
    return lado * lado;
  },
  perimetro: function(lado){
    return this.lados * lado;
  },

}

quadrado.lados; // 4
console.log(quadrado.area(5)); //25
quadrado.perimetro(5); //20

Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14 console é um objeto e log é um metodo


var menu = {
  with: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeigth(){
    return this.height / 2;
  }
}

menu.backgroundColor  = '#000'
menu.color = 'blue';

menu.esconder = function(){
  console.log('Escondi')
}
var bg = menu.backgroundColor;