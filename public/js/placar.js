$('#botao-placar').click(mostraPlacar);


function inserePlacar() {
    let corpoTabela = $('.placar').find('tbody');
    let usuario = 'Perseu';
    let numPalavras = $('#contador-palavras').text();

    let linha = novaLinha(usuario, numPalavras);
    linha.find('.botao-remover').click(removeLinha);

    corpoTabela.append(linha);

    $('.placar').slideDown(500);
    scrollPlacar();
}

function scrollPlacar() {
    let posicaoPlacar = $('.placar').offset().top;

    console.log(posicaoPlacar);

    $('html', 'body').animate({
        scrollTop: posicaoPlacar
    }, 500);
}

function removeLinha(event) {
    event.preventDefault();
    let linha = $(this).parent().parent();

    linha.fadeOut(500);
    setTimeout(() => {
        linha.remove();
    }, 500);
}

function novaLinha(usuario, numPalavras) {

    let linha = $('<tr>');
    let colunaUsuario = $('<td>').text(usuario);
    let colunaPalavras = $('<td>').text(numPalavras);
    let colunaRemover = $('<td>');
    let link = $('<a>').addClass('botao-remover').attr('href', '#');
    let icone = $('<i>').addClass('small').addClass('material-icons').text('delete');

    colunaRemover.append(link.append(icone));
    return linha.append(colunaUsuario).append(colunaPalavras).append(colunaRemover);
}

function mostraPlacar() {
    $('.placar').stop().slideToggle(500);
}
