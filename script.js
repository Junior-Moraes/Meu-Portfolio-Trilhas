const botoesNavegacao = document.querySelectorAll("[data-tela]");
const telas = document.querySelectorAll(".tela");

function mostrarTela(nomeTela) {
    // Verifica se a seção solicitada existe
    const telaSelecionada = document.getElementById(nomeTela);

    if (!telaSelecionada || !telaSelecionada.classList.contains("tela")) {
        console.error("A seção não foi encontrada:", nomeTela);
        return;
    }

    // Mostra a seção escolhida e esconde as outras
    telas.forEach(function (tela) {
        const deveMostrar = tela.id === nomeTela;

        tela.hidden = !deveMostrar;
        tela.style.display = deveMostrar ? "block" : "none";
    });

    // Atualiza o destaque dos botões
    botoesNavegacao.forEach(function (botao) {
        const estaAtivo = botao.dataset.tela === nomeTela;

        botao.classList.toggle("ativo", estaAtivo);
        botao.setAttribute("aria-pressed", String(estaAtivo));
    });

    // Volta ao topo da página
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    console.log("Seção aberta:", nomeTela);
}

// Adiciona o clique aos botões de navegação
botoesNavegacao.forEach(function (botao) {
    botao.addEventListener("click", function () {
        mostrarTela(botao.dataset.tela);
    });
});

// Cria o botão "Voltar ao início"
let botaoInicio = document.getElementById("voltar-inicio");

if (!botaoInicio) {
    botaoInicio = document.createElement("button");
    botaoInicio.textContent = "↑ Voltar ao início";
    botaoInicio.id = "voltar-inicio";
    botaoInicio.type = "button";
    document.body.appendChild(botaoInicio);
}

botaoInicio.addEventListener("click", function () {
    mostrarTela("tela-inicio");
});

// Inicia o portfólio na tela de boas-vindas
mostrarTela("tela-inicio");
