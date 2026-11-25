// DOM //
const inputBusca = document.querySelector("#busca-input")
const botaoCuidadores = document.querySelector("#botao-cuidadores")
const botaoPets = document.querySelector("#botao-pets")
const listaElementos = document.querySelector("#lista-cards")

// FUNÇÕES //
function criarCardPet(pet){
    const id = pet.id

    const card = document.createElement("a")
    card.className = "card-pet"
    card.href = `./src/pages/perfil-pet.html?id=${id}`

    card.innerHTML = `
        <img class="card-pet__foto" src="" alt="Foto de ${pet.nome || "pet"}">
        <h2 class="card-pet__nome">${pet.nome || "Pet sem nome"}</h2>
        <p class="card-pet__raca">${pet.raca || "SRD"}</p>
    `
    return card
}

function criarCardNovoPet(){
    const cardNovo = document.createElement("a")
    cardNovo.className = "card-pet card-pet--novo"
    cardNovo.href = "./src/pages/perfil-pet.html"

    cardNovo.innerHTML = `
        <span class="card-pet__icone">+</span>
        <h2 class="card-pet__nome">Cadastrar novo pet</h2>
        <p class="card-pet__raca">Adicione um novo perfil</p>
    `
    return cardNovo
}

function criarCardCuidador(cuidador){
    const id = cuidador.id

    const card = document.createElement("a")
    card.className = "card-cuidador"
    card.href = `./src/pages/perfil-profissional.html?id=${id}`

    card.innerHTML = `
        <img class="card-cuidador__foto" src="" alt="Foto de ${cuidador.nome || "cuidador"}">
        <h2 class="card-cuidador__nome">${cuidador.nome || "Cuidador"}</h2>
        <p class="card-cuidador__descricao">${cuidador.descricao || "Cuidados gerais"}</p>
        <span class="card-cuidador__preco">R$ ${cuidador.preco || "0,00"}</span>
    `
    return card
}

async function exibirLista({ endpoint, criarCard, termoBusca = "", cardExtra = null }) {
    listaElementos.innerHTML = "<p>Carregando...</p>"

    try{
        let dados = await buscarDados(endpoint)
        dados = dados || []

        const termo = termoBusca.trim().toLowerCase()
        if (termo) {
            dados = dados.filter((item) => {
                const textoBuscavel = `${item.nome || ""} ${item.raca || ""} ${item.descricao || ""}`.toLowerCase()
                return textoBuscavel.includes(termo)
            })
        }

        listaElementos.innerHTML = ""

        if(dados.length === 0 && !cardExtra){
            listaElementos.innerHTML = "<p>Nenhum resultado encontrado.</p>"
            return
        }

        dados.forEach((item) => {
            listaElementos.appendChild(criarCard(item))
        })

        if(cardExtra){
            listaElementos.appendChild(cardExtra())
        }
    } catch (erro){
        console.error(`Erro ao carregar ${endpoint}:`, erro)
        listaElementos.innerHTML = "<p>Não foi possível carregar os dados no momento.</p>"
        if(cardExtra){
            listaElementos.appendChild(cardExtra())
        }
    }
}

// EVENTOS //
botaoPets.addEventListener("click", () => {
    exibirLista({
        endpoint: "/pets",
        criarCard: criarCardPet,
        cardExtra: criarCardNovoPet
    })
})

botaoCuidadores.addEventListener("click", () => {
    exibirLista({
        endpoint: "/cuidadores",
        criarCard: criarCardCuidador
    })
})