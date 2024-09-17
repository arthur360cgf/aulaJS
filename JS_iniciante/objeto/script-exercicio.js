// Crie um objeto com seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dadosPesoais = {
  cpf: "000.000.000-00",
  nome: "Arthur",
  sobrenome: "Mattei",
  idade: 25,
  cidade: "parnaiba",

// Crie u metodo no objeto anterior, que mostre o seu nome completo 
  mostrarNome() {
    return `${this.nome}  ${this.sobrenome}`;
  }
}




//modifique  o valo da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
  alterarValor(){
    return this.preco = 3000;
  }
}

// CRie um objeto de um cao que represente um labrador,
var cachorro = {
  nome: "Lola",
  idade: 10,
  cor: "preto",
  raca: "Labrador",
  foiVacinado: true,
  latir(pessoa){
    if(pessoa === 'homem'){
      return 'O cachorro está latindo';
    }
    else{
      return 'O cachorro esta de boa';
    }
  }
}
// preto com 10 anos, que late ao ver um homem