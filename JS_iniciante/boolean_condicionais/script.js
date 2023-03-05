var possuiGraduacao = true;
var possuiDoutorado = true;
var x;

if(possuiGraduacao) {
  console.log('É verdadeiro');
  var x = 10;
} else if(possuiDoutorado){
  console.log('Possui doutorado');
}
else{
  console.log("nao possui nada");
}
console.log(x);

var nome = "Andre";
if (nome){
  console.log(nome);
}
else{
  console.log('nome não existe');
}
var x = 'Gato';
console.log(x !== 'Gato');


// Truthy
// if(!true);//false
// if(!1);//false
// if(!'');//true
// if(!undefined);//true
// if(!!' ');//true
// if(!!'');//false

// OPERADORES LOGICOS && E
// true && true; //true
// true && false; //false
// false && true; // false
// 'GATO' && 'CÃO'; // 'CÃO'
// (5 - 5) && (5+5); // 0 
// 'Gato' && false; // false
// (5 >= 5) && (3 < 6); // true

var condicional = (5-10) && (5+5);

if(10){
  console.log('Verdadeiro', condicional);
}else{
  console.log('Falso');
}

// OPERADORES LOGICOS || OU
true || true;// true
true || false;// true
false || true;// true
'Gato' || 'Cão';// 'Gato'
(5 - 5) || (5 + 5);// 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); //true

var condicional2 = (5-  5) || (5 + 5) || (10 - 2);
console.log(condicional2);



//SWITCH
var corFavorita = 'azul';
switch(corFavorita){
  case 'Azul':
    console.log("Olhe para o céu");
    break;
  case 'Amarelo':
    console.log("Olhe para o sol");
    break;
  case 'Verde':
    console.log('Olhe para a floresta');
    break;
  default:
    console.log('Feche os olhos');
}