$('#botao-frase').click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria() {
    $('#spinner').toggle();
    $.get('http://localhost:3000/frases', (retorno) => {

        console.log(retorno);

        const numeroAleatorio = Math.floor(Math.random() * retorno.length);
        $('.frase').text(retorno[numeroAleatorio].texto);

        atualizaTamanhoFrase();
        atualizaTempoInicial(retorno[numeroAleatorio].tempo);
    })
        .fail(() => {
            $('#erro').toggle();
            setTimeout(() => {
                $('#erro').toggle();
            }, 1500);
        })
        .always(() => {
            $('#spinner').toggle();
        });
}

function buscaFrase() {
    $('#spinner').toggle();

    let fraseId = $('#frase-id').val();
    let dados = {id: fraseId}; //criacao do objeto JS que guarda a id

    //passando objeto como segundo parâmetro
    $.get("http://localhost:3000/frases", dados, trocaFrase)
        .fail(() => {
            $('#erro').toggle();
            setTimeout(() => {
                $('#erro').toggle();
            }, 1500);
        }).always(() => {
        $('#spinner').toggle();
    });
}

function trocaFrase(retorno) {

    $('.frase').text(retorno.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(retorno.tempo);
}
