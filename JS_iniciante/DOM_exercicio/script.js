/**
 * Retorne o url da pagina atual utilizando o objeto window
 * Seleciona o primeriro elemento da pagina que possua a classe ativa 
 * Retorne a linguagem do navergador
 * Retorne a largura da janela
 */
console.log(window.location.href);

const elementoAtivo = document.querySelector('.ativo');

const linguagemNavegador = window.navigator.language;

const larguraJanela = window.innerWidth;
