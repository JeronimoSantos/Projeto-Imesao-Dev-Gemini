function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisar").value;

    if (!campoPesquisa) {
        section.innerHTML = `<p class="cabecalho-paragrafo">Desculpa, Tecnologia não encontrada. Você escreveu nada :(<p>`
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre os dados da pesquisa e cria o HTML para cada resultado
    for (let dados of dadosDev) {
        titulo = dados.titulo.toLowerCase()
        descricao = dados.descricao.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {

        // Cria um novo elemento
        resultados += `
        <section class="item-resultado">
            <section class="item-alinhado">
            <img src="${dados.img}">
            <h2>
                <a href="#" target="_blank">${dados.titulo}</a>
            </h2>
            </section>
            <p class="descricao-meta">${dados.descricao}</p>
            <a href=${dados.link} target="_blank">Documentação para saber mais</a>
        </section>`
        } else if (!resultados) {
            resultados = `<p class="cabecalho-paragrafo">Desculpa, Tecnologia não encontrada :(<p>`
        }
    };

    // Atualiza o conteúdo da seção com os resultados formatados
    section.innerHTML = resultados;
};
