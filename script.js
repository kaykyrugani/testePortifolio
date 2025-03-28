// script.js - Arquivo de script para o aplicativo de relógio


// Lista de fusos horários e suas bandeiras com suas respectivas bandeiras

const timezones = [
    { flag: "🇧🇷", zone: "America/Sao_Paulo" }, // Fuso horário do Brasil

    { flag: "🇺🇸", zone: "America/New_York" }, // Fuso horário dos EUA

    { flag: "🇬🇧", zone: "Europe/London" }, // Fuso horário do Reino Unido

    { flag: "🇯🇵", zone: "Asia/Tokyo" }, // Fuso horário do Japão

    { flag: "🇦🇺", zone: "Australia/Sydney" }, // Fuso horário da Austrália

    { flag: "🇦🇪", zone: "Asia/Dubai" }, // Fuso horário dos Emirados Árabes Unidos

    { flag: "🇷🇺", zone: "Europe/Moscow" } // Fuso horário da Rússia

];

let currentIndex = 0; // Começa com o fuso horário de São Paulo 🇧🇷


// Função para atualizar o relógio com a hora atual

function updateClock() {
    const now = new Date();
    const { flag, zone } = timezones[currentIndex];
    document.getElementById("bandeiras").textContent = flag; // Atualiza a bandeira exibida


    const options = {
        timeZone: zone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    const timeString = new Intl.DateTimeFormat('pt-BR', options).format(now);

    // Atualiza o horário exibido e a bandeira correspondente

    document.getElementById("clock").textContent = timeString;
}

// Alternar fuso horário ao clicar no relógio para o próximo na lista

document.getElementById("clock").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % timezones.length; // Avança para o próximo fuso horário e reinicia no fim da lista

    updateClock();
});

// Inicia o relógio e atualiza a hora exibida a cada segundo

window.onload = function () {
    updateClock(); // Chama a função para iniciar o relógio imediatamente

    setInterval(updateClock, 1000); // Define um intervalo para atualizar o relógio a cada segundo
};

// Garante que o corpo da página esteja visível
document.body.style.opacity = 1;

let animationTriggered = false; // Flag para rastrear se a animação foi acionada

// Seleciona o elemento com a classe "container-text3"
const containerText3 = document.querySelector('.container-text3');

// Verifica se a animação ainda não foi acionada
if (!animationTriggered) {
    containerText3.classList.add('animate'); // Adiciona a classe de animação
    animationTriggered = true; // Atualiza a flag para garantir que a animação não seja acionada novamente

    containerText3.addEventListener('animationend', () => {
        // Opcional: Se você quiser que a animação não possa ser repetida, pode evitar remover a classe
        console.log("Animação concluída!"); 
    }, { once: true }); // O parâmetro { once: true } garante que o evento será disparado apenas uma vez
}


document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".texto2"); // Seleciona todos os elementos com a classe ".texto2"


    function verificarVisibilidade() { // Função para verificar a visibilidade dos elementos

        elementos.forEach((elemento) => {
            const rect = elemento.getBoundingClientRect();
            const alturaTela = window.innerHeight; // Obtém a altura da janela de visualização


            if (rect.top < alturaTela * 0.85) {
                elemento.classList.add("show"); // Adiciona a classe "show" para tornar o elemento visível

            }
        });
    }

    window.addEventListener("scroll", verificarVisibilidade); // Adiciona um evento de rolagem para verificar a visibilidade

    verificarVisibilidade(); // Verifica a visibilidade dos elementos ao carregar a página

});

document.addEventListener("DOMContentLoaded", function () {
    let luz = document.getElementById("imagemLuz");

    // Espera o tempo da animação inicial (8.5s) + duração da animação (0.5s)
    setTimeout(() => {
        luz.classList.add("acender"); // Mantém acesa após a animação
    }, 9000);

    // Adiciona evento de clique para alternar a luz
    luz.addEventListener("click", function () {
        if (this.classList.contains("acender")) {
            this.classList.remove("acender");
            this.classList.add("apagar"); // Apaga a luz
        } else {
            this.classList.remove("apagar");
            this.classList.add("acender"); // Acende a luz
        }
    });
});
