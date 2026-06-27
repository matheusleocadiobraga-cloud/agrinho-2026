function entrar() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    if (nome === "" || idade === "") {
        alert("Preencha todos os campos!");
        return;
    }

    alert(`Bem-vindo, ${nome}! Você tem ${idade} anos.`);
}