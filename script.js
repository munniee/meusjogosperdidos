console.log("Arquivo JS funcionando!");

// Lista simples de jogos (só uma base)
const jogos = [
    { nome: "Super Mario World", categoria: "classico" },
    { nome: "GTA San Andreas", categoria: "acao" },
    { nome: "Sonic 2", categoria: "classico" },
    { nome: "The Legend of Zelda", categoria: "aventura" },
    { nome: "Tetris", categoria: "puzzle" }
];

// Onde os jogos vão aparecer
const lista = document.getElementById("lista-jogos");

// Função para mostrar jogos
function mostrarJogos(filtro = "all") {
    lista.innerHTML = "";

    jogos.forEach(jogo => {
        if (filtro === "all" || jogo.categoria === filtro) {

            const div = document.createElement("div");
            div.className = "jogo-card";
            div.textContent = jogo.nome;

            lista.appendChild(div);
        }
    });
}

// Inicia mostrando tudo
mostrarJogos();


// --- FILTRO DO MENU ---
const botoes = document.querySelectorAll("[data-filter]");

botoes.forEach(botao => {
    botao.addEventListener("click", (e) => {
        e.preventDefault();
        const categoria = botao.dataset.filter;
        mostrarJogos(categoria);
    });
});


// --- BARRA DE PESQUISA ---
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
    const texto = searchInput.value.toLowerCase();
    lista.innerHTML = "";

    jogos.forEach(jogo => {
        if (jogo.nome.toLowerCase().includes(texto)) {

            const div = document.createElement("div");
            div.className = "jogo-card";
            div.textContent = jogo.nome;

            lista.appendChild(div);
        }
    });
});
