let tempoInicial = $('#tempo-digitacao').text();
let campo = $('.campo-digitacao');

$(() => {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $('#botao-reiniciar').click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {
    campo.on('input', function () {
        var conteudo = campo.val();

        var qtdPalavras = conteudo.split(" ").length;
        $("#contador-palavras").text(qtdPalavras);

        var qtdCaracteres = conteudo.length;
        $("#contador-char").text(qtdCaracteres);
    });
}

function inicializaCronometro() {
    let tempoRestante = $('#tempo-digitacao').text();
    campo.one('focus', () => {
        $('#botao-reiniciar').attr('disabled', true);
        let id = setInterval(() => {
            tempoRestante--;
            $('#tempo-digitacao').text(tempoRestante);

            if (tempoRestante < 1) {
                campo.attr('disabled', true);
                clearInterval(id)
                $('#botao-reiniciar').attr('disabled', false);
                campo.addClass('campo-desativado');
            }
        }, 1000);
    });
}

function reiniciaJogo() {
    campo.attr("disabled", false);
    campo.val('');
    $("#contador-palavras").text('0');
    $("#contador-caracteres").text('0');
    $('#tempo-digitacao').text(tempoInicial);
    inicializaCronometro()
    campo.removeClass('campo-desativado');
    campo.removeClass('borda-vermelha');
    campo.removeClass('borda-verde');
}

function inicializaMarcadores() {
    let frase = $('.frase').text();
    campo.on('input', () => {
        let digitado = campo.val();
        let ehCorreto = frase.startsWith(digitado);

        campo.toggleClass('borda-verde', ehCorreto);
        campo.toggleClass('borda-vermelha', !ehCorreto);
    });
}
