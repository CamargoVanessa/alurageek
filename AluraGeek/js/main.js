let produtos = [
    {
        id: 0,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_975969-MLA46467090682_062021-O.webp",
        produto: "Darth Vader",
        valor: 50,
    },
    {
        id: 1,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_643523-MLA49180554005_022022-O.webp",
        produto: "Flash",
        valor: 25,
    },
    {
        id: 2,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_640262-MCO47330060660_092021-O.webp",
        produto: "Batman",
        valor: 35,
    },
    {
        id: 3,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_975969-MLA46467090682_062021-O.webp",
        produto: "Darth Vader",
        valor: 50,
    },
    {
        id: 4,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_643523-MLA49180554005_022022-O.webp",
        produto: "Flash",
        valor: 25,
    },
    {
        id: 5,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_640262-MCO47330060660_092021-O.webp",
        produto: "Batman",
        valor: 35,
    },
    {
        id: 3,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_975969-MLA46467090682_062021-O.webp",
        produto: "Darth Vader",
        valor: 50,
    },
    {
        id: 4,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_643523-MLA49180554005_022022-O.webp",
        produto: "Flash",
        valor: 25,
    },
    {
        id: 5,
        imagem: "https://a-static.mlcdn.com.br/800x560/boneco-neymar-jr-jogador-futebol-brasil-copa-do-mundo-fifa-bloco-de-montar-kopf/toyplacecolecionaveis/16021008259/04dd16004e1efa4e631a75ff3dc4e736.jpeg",
        produto: "Boneco do Neymar",
        valor: 35,
    }
    ];

function lerProdutos() {
    const cards = document.getElementById("cards");
    cards.innerHTML = "";
    produtos.forEach((produto) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${produto.imagem}" alt="Imagen do produto">
            <div class="card-container--info">
                <p>${produto.produto}</p>
                <div class="card-container--value">
                    <p>R$ ${produto.valor.toFixed(2)}</p>
                    <img class="lixo" src="assets/excluir.png" alt="Ícone do Lixo" onclick="deleteProduto(${produto.id})">
                </div>
            </div>
        `;
        cards.appendChild(card);
    });
}

// Função para criar um novo produto
function createProduto() {
    const form = document.getElementById("form-produto");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nome = document.getElementById("nome").value;
        const valor = parseFloat(document.getElementById("valor").value);
        const imagem = document.getElementById("imagem").value;
        if (nome && valor && imagem) {
            const novoProduto = {
                id: produtos.length,
                imagem,
                produto: nome,
                valor,
            };
            produtos.push(novoProduto);
            lerProdutos();
            form.reset();
        } else {
            alert("Preencha todos os campos!");
        }
    });
}

// Função para deletar um produto
function deleteProduto(id) {
    if (confirm("Tem certeza que deseja excluir o produto?")) {
        produtos = produtos.filter((produto) => produto.id !== id);
        lerProdutos();
        if (produtos.length === 0) {
            alert("Nenhum produto encontrado!");
        }
    }
}

// Função para atualizar um produto
function updateProduto(id) {
    const produto = produtos.find((produto) => produto.id === id);
    if (produto) {
        const nome = prompt("Novo nome do produto:");
        const valor = parseFloat(prompt("Novo valor do produto:"));
        const imagem = prompt("Nova imagem do produto:");
        if (nome && valor && imagem) {
            produto.produto = nome;
            produto.valor = valor;
            produto.imagem = imagem;
            lerProdutos();
            alert("Produto atualizado com sucesso!");
        } else {
            alert("Produto não encontrado!");
        }
    }
}

// Inicializar a leitura dos produtos
lerProdutos();

// Inicializar a criação de produtos
createProduto();