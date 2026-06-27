function entrar() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    if (nome === "" || idade === "") {
        alert("Preencha todos os campos!");
        return;
    }

    alert(`Bem-vindo, ${nome}! Você tem ${idade} anos.`);
}
const botoesProximo = document.querySelectorAll(".btn-proximo");

botoesProximo.forEach(botao => {
    botao.addEventListener("click", () => {
        const atual = document.querySelector(".passo.ativo");
        atual.classList.remove("ativo");

        const proximo = document.querySelector("#passo" + botao.dataset.proximo);
        proximo.classList.add("ativo");
    });
});

const botoesVoltar = document.querySelectorAll(".btn-voltar");

botoesVoltar.forEach(botao => {
    botao.addEventListener("click", () => {
        const atual = document.querySelector(".passo.ativo");
        atual.classList.remove("ativo");

        const voltar = document.querySelector("#passo" + botao.dataset.voltar);
        voltar.classList.add("ativo");
    });
});






