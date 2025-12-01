document.addEventListener('DOMContentLoaded', function () {

    function aplicarCoresClientes() {
        const tabela = document.querySelector('table[data-groupid="6484"]');
        if (!tabela) return;

        const linhas = tabela.querySelectorAll('tbody tr:not(.header)');

        linhas.forEach(tr => {
            const campo = tr.querySelector('input[name="inp28249"]');
            if (!campo) return;

            const valor = campo.value.trim();

            // Limpa estilo antes
            tr.style.backgroundColor = "";

            if (valor === "Não") {
                tr.style.backgroundColor = "#ffe5e5"; // vermelho suave
            } 
            else if (valor === "Sim") {
                tr.style.backgroundColor = "#e6ffe6"; // verde suave
            }
        });
    }

    // Aplica ao carregar
    aplicarCoresClientes();

    // Se o usuário mudar o campo no select (caso existam selects) — opcional
    document.addEventListener("change", function (e) {
        if (e.target && e.target.name === "inp28249") {
            aplicarCoresClientes();
        }
    });

});



