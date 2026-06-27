function entrar() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    if (nome === "" || idade === "") {
        alert("Preencha todos os campos!");
        return;
    }

    alert(`Bem-vindo, ${nome}! Você tem ${idade} anos.`);
}
const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function () {

        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});







