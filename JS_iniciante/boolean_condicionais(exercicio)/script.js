// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idade = 23;
var idadeParente = 33;
var verificar = (23 >= 33);
if(verificar = false){
  console.log('Seu parente é mais velho');
}else if (idade === idadeParente){
  console.log('Idade igual');
}else{
  console.log('Você é mais velho');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
//Retorna FALSE

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';//truthy
var idade = 28;//truthy
var possuiDoutorado = false;// falsy
var empregoFuturo;//falsy
var dinheiroNaConta = 0;//falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207e3;
var china = 1340e3;
if(brasil>china){
  console.log('Brasil tem mais habitantes');
}
else{
  console.log('China tem mais habitantes');
}
// OU
// var verificacao = brasil > china;
// console.log(verificacao);
// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
//FALSO

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
//Cão