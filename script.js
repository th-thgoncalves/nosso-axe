function entrar() {

    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });

}

const dataNamoro =
    new Date("2023-06-30");

function atualizarContador() {

    const hoje = new Date();

    const diferenca =
        hoje - dataNamoro;

    const dias =
        Math.floor(
            diferenca /
            (1000 * 60 * 60 * 24)
        );

    document
        .getElementById("contador")
        .innerHTML =
        dias + " dias ❤️";

}

atualizarContador();

const mensagens = [

"Obrigado por ter dado match naquele dia ❤️",

"Você transformou uma conversa em uma história.",

"Meu lugar favorito continua sendo ao seu lado.",

"Capão foi incrível, mas você tornou a viagem inesquecível.",

"Você é minha melhor escolha.",

"Cada dia ao seu lado vale a pena.",

"Eu te escolheria novamente, todos os dias.",

"Nosso casamento ainda nem chegou e já sou grato pela família que estamos construindo.",

"Seu sorriso continua sendo uma das minhas vistas favoritas.",

"Que nunca nos falte amor, parceria e axé."

];

function mostrarMensagem() {

    const sorteio =
        Math.floor(
            Math.random() *
            mensagens.length
        );

    document
        .getElementById("mensagem")
        .innerHTML =
        mensagens[sorteio];

}

function criarCoracao() {

    const coracao =
        document.createElement("div");

    coracao.className =
        "coracao";

    coracao.innerHTML = "❤️";

    coracao.style.left =
        Math.random() * 100 + "vw";

    document.body.appendChild(coracao);

    setTimeout(() => {

        coracao.remove();

    }, 8000);

}

setInterval(criarCoracao, 1000);

const slides =
    document.querySelectorAll(".slide");

let slideAtual = 0;

function trocarSlide() {

    slides[slideAtual]
        .classList.remove("active");

    slideAtual++;

    if (slideAtual >= slides.length) {

        slideAtual = 0;

    }

    slides[slideAtual]
        .classList.add("active");

}

setInterval(trocarSlide, 4000);