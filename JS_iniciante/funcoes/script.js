function areaQuadrado(lado){
  return lado * lado;

}

areaQuadrado(2);

function pi(){
  return 3.14;
}
var total = 5 * pi();
console.log(total);

//peso e altura são paramentros
function imc(peso, altura){
  const imc = peso / (altura ** 2);
  return imc;
}
imc(80, 1.80); // 80 e 100 são os argumentos
imc(60, 1.70); // 60 e 1.70 são os argumentos
console.log(imc(80, 1.70));

function corFavorita(cor){
  if(cor === 'azul'){
    return 'Eu gosto do céu';
  } else if(cor === 'verde'){
    return 'Eu gosto de mato';
  } else{
    return 'Eu não gosto de cores';
  }
}
addEventListener('click', function(){
  console.log('Clicou');
});
//função possui dois argumentos
//primerio é a String 'click'
//segundo é uma função anônima

function terceiraIdade(idade){
  if(typeof idade !== 'number'){
    return 'Informe a sua idade!';
  } else if(idade >= 60){
    console.log("Idoso");
    return true;
  }else {
    return false;
  }
  // console.log(idade);
}
terceiraIdade(60);

var totalPaises = 193;
function faltaVisitar(paisesVisitados){

  return 'Falta visitar ${totalPaises - paisesVisitados} países';
}
console.log(totalPaises);

var profisssao = 'Desinger';

function dados(){
  var nome = 'André';
  // var idade = 28; não está sendo utiilizada
  function outrosDados(){
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());

function imc2(peso, altura){
  const imc = peso / (altura **2);
  console.log(imc);
}
imc2(80, 120);
console.log(imc2(80, 120));

//undefined pois não existe um return na função

