let numerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

let btnReiniciar = document.getElementById('reiniciar');

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {
        rate: 1.2
    });
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 a 10');
}

exibirMensagemInicial();

function limparCampo(){
    document.querySelector('.container__input').value = '';
}

function verificarChute(){
    let chute = document.querySelector('.container__input').value;
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        btnReiniciar.removeAttribute('disabled');
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor que o chute');
        } else{
            exibirTextoNaTela('p', 'O número secreto é maior que o chute');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido =  parseInt(Math.random() * numeroMaximo + 1);
    let elListaNumeroSorteados = numerosSorteados.length;

    if(elListaNumeroSorteados == numeroMaximo){
        numerosSorteados = [];
    }


    if(numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function reiniciarJogo(){
    tentativas = 1;
    limparCampo();
    gerarNumeroAleatorio();
    exibirMensagemInicial();
    btnReiniciar.setAttribute('disabled', true);
}

// Para adicionar um elemento ao final da array, você pode usar o método push.

// Para remover o último elemento, você pode usar o método pop.