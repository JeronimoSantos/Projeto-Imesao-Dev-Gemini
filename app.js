function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";

    // Itera sobre os dados da pesquisa e cria o HTML para cada resultado
    for (let dados of dadosDev) {
        // Cria uma nova div para um resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dados.titulo}</a>
                </h2>
                <p class="descricao-meta">${dados.descricao}</p>
                <a href=${dados.link} target="_blank">Mais informações</a>
            </div>
        `;
    }

    // Atualiza o conteúdo da seção com os resultados formatados
    section.innerHTML = resultados;
};
