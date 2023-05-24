// Crie uma função para verificar se um valor é Truthy
function verificaTru(numero){
  var numero = 54;
  if(typeof numero !== 'number'){
    console.log(typeof numero);
    return false;
  }
  else{
    console.log(typeof numero);
    return true;
    
  }

}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado){
  var lado
  var perimetro = lado * 4;
  return perimetro
}
console.log(perimetroQuadrado(4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
  return nome + sobrenome;
}
console.log(nomeCompleto("Arthur ", "Aragão"));


// Crie uma função que verifica se um número é par
function numeroPar(numero){
  var numero;
  if (numero%2 == 0){
    return "numero par";
  }
  else {
    return "numero impar";
  }
}
console.log(numeroPar(46));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado){
  var dado
  return typeof dado;
}
console.log(tipoDeDado('ola'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
  console.log(nomeCompleto("Arthur ", "Aragão"));
})

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  // var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
