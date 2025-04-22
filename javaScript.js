// Array com as perguntas, imagens e respostas
const perguntas = [
    {
        pergunta: "Qual lenda amazônica fala de um protetor das florestas com pés voltados para trás??",
        imagem: "ChatGPT Image 14 de abr. de 2025, 15_28_03.png",
        alternativas: ["Curupira", "Boitatá", "Boto cor-de-rosa"],
        respostaCerta: 0
    },
    {
        pergunta: "Qual é a lenda de um menino travesso que usa um gorro vermelho e causa confusões??",
        imagem: "ChatGPT Image 14 de abr. de 2025, 15_41_20.png",
        alternativas: ["Curupira", "Mapinguar", "Saci-Pererê"],
        respostaCerta: 2
    },
    {
        pergunta: "Como acabar com a maldição da mula-sem-cabeça??",
        imagem: "mula.jpg",
        alternativas: ["Dar comida para a mula", "Acender uma fogueira", "Confessar os pecados"],
        respostaCerta: 2
    },
    {
        pergunta: "No folclore brasileiro, qual é a maneira mais comum de capturar o Saci-Pererê??",
        imagem: "saci.jpg",
        alternativas: ["Colocar uma armadilha de folhas secas", "Roubar seu gorro mágico", "Jogar um punhado de arroz no chão"],
        respostaCerta: 1
    },
    {
        pergunta: "No folclore brasileiro, por que o Boto usa um chapéu??",
        imagem: "lenda-do-boto-cor-de-rosa-a-historia-do-bicho-que-vira-homem-2.jpg",
        alternativas: ["Para esconder o buraco em sua cabeça, onde ele respira como um boto", "Para esconder suas nadadeiras e parecer mais humano", "Porque ele adora se disfarçar de pescador"],
        respostaCerta: 0
    },
    {
        pergunta: "No folclore brasileiro, como o Curupira impede que caçadores ou pessoas mal-intencionadas entrem na floresta?",
        imagem: "cupi.jpg",
        alternativas: ["Transforma-os em animais", "Faz com que se percam com seus pés virados", "Cria um labirinto de cipós"],
        respostaCerta: 1
    },
    {
        pergunta: "O que a Cobra Grande faz no folclore brasileiro?",
        imagem: "cobra.jpg",
        alternativas: ["Cria tempestades e enchentes", "Defende a floresta contra invasores", "Protege os rios e as águas"],
        respostaCerta: 0
    },
    {
        pergunta: "O que faz a Matinta Pereira no folclore brasileiro?",
        imagem: "mati.jpg",
        alternativas: ["Aparece como uma velha bruxa para enfeitiçar as pessoas", "Protege as florestas contra caçadores", "Assusta viajantes durante a noite com seu canto"],
        respostaCerta: 2
    },
    {
        pergunta: "O que a Iara faz com os moços no folclore brasileiro??",
        imagem: "iara-tri-curioso-1.jpg",
        alternativas: ["Encanta-os com seu canto e os leva para o fundo do rio", "Ensina-lhes segredos sobre as águas e a natureza", "Encanta-os com seu canto e os leva para o fundo do rio"],
        respostaCerta: 0
    },
    {
        pergunta: "No folclore brasileiro, qual é o objetivo do Mapinguari ao atacar as pessoas na floresta??",
        imagem: "mapa.jpg",
        alternativas: [" Guardar uma planta que dá imortalidade", "Assustar intrusos para manter a floresta intacta", "Vingar-se de antigos caçadores que o feriram"],
        respostaCerta: 0
    },
    // Adicione mais perguntas aqui
];

let pontuacao = 0;
let perguntaAtual = 0;

function iniciarJogo() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("jogo").style.display = "flex";
    mostrarPergunta();
}

function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    document.getElementById("pergunta").innerText = pergunta.pergunta;
    document.getElementById("imagem").src = pergunta.imagem;

    const botoes = document.querySelectorAll(".alternativas button");
    botoes.forEach((botao, index) => {
        botao.innerText = pergunta.alternativas[index];
    });

    document.getElementById("mensagem").innerText = '';
}

function responder(respostaEscolhida) {
    const pergunta = perguntas[perguntaAtual];
    if (respostaEscolhida === pergunta.respostaCerta) {
        document.getElementById("mensagem").innerText = "Resposta correta!";
        document.getElementById("mensagem").style.color = "green";
        pontuacao += 10;
    } else {
        document.getElementById("mensagem").innerText = "Resposta incorreta!";
        document.getElementById("mensagem").style.color = "red";
    }

    document.getElementById("pontuacao").innerText = pontuacao;

    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        setTimeout(mostrarPergunta, 1000);
    } else {
        finalizarJogo();
    }
}

function finalizarJogo() {
    document.getElementById("jogo").style.display = "none";
    document.getElementById("resultado").style.display = "flex";

    const mensagem = pontuacao >= 60 ? "Você conseguiu!" : "Tente novamente!";
    document.getElementById("resultadoMensagem").innerText = `Pontuação Final: ${pontuacao}. ${mensagem}`;
}

function reiniciarJogo() {
    pontuacao = 0;
    perguntaAtual = 0;
    document.getElementById("resultado").style.display = "none";
    document.getElementById("inicio").style.display = "flex";
}
