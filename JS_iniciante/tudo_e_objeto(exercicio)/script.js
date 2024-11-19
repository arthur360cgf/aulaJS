//nomeie 3 propriedades ou métodos de stings 
var nome = 'André';
nome.charAt(1),
nome.length;
nome.toLowerCase;

//nomeie 5 propriedades ou metodos do DOM 
var btn = document.querySelector('.btn');
btn.addEventListener;
btn.appendChild;
btn.id;
btn.innerHTML;
console.log(btn)

//busque na web um objeto (método) capaz de interagir com o clipboard
//clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

function myFunction(){
  var copyText = document.getElementById("myImput");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  alert("Texto copiado: " + copyText.value);
}
