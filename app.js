function pesquisar() {
    const resultadosPesquisa = document.getElementById('resultados-pesquisa');
    
    // Obtém o valor do campo de pesquisa e remove espaços em branco
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();

    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
        resultadosPesquisa.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um Pokémon.</p>";
        return;
    }

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    
    // Depuração: Verifica o valor da pesquisa
    console.log("Campo de pesquisa:", campoPesquisa);

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        // Converte as propriedades dos dados para minúsculas
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags.toLowerCase();

        // Depuração: Verifica o conteúdo de cada dado
        console.log("Título:", titulo, "Descrição:", descricao, "Tags:", tags);

        // Verifica se o campo de pesquisa está incluído no título, descrição ou tags
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Adiciona o resultado encontrado à string de resultados
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    // Se nenhum resultado for encontrado
    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>";
    }

    // Atribui os resultados gerados à seção HTML
    resultadosPesquisa.innerHTML = resultados;
}
