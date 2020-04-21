
let frase = $('.frase').text();
let numPalavras = frase.split(' ').length;
let tamanhoFrase = $('#tamanho-frase');

tamanhoFrase.text(numPalavras)
