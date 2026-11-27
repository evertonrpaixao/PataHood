// DOM //
const botaoMenu = document.querySelector("#botao-menu")
const headerNav = document.querySelector("#header-nav")
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
        <img class="card-pet__foto" src="./assets/pet-padrao.png" alt="Foto de ${pet.nome || "pet"}">
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
        <img class="card-cuidador__foto" src="./assets/cuidador-padrao.png" alt="Foto de ${cuidador.nome || "cuidador"}">
        <h2 class="card-cuidador__nome">${cuidador.nome || "Cuidador"}</h2>
        <p class="card-cuidador__cidade">${cuidador.cidade || "Cidade não informada"}
        <p class="card-cuidador__descricao">${cuidador.descricao || "Cuidados gerais"}</p>
        <p class="card-cuidador__nota"> ★ ${cuidador.nota || "0.0"}</p>
        <span class="card-cuidador__preco">R$ ${cuidador.preco || "0,00"}</span>
    `
    return card
}

async function exibirLista({ endpoint, criarCard, valorBusca = "", cardExtra = null, mensagemVazio = "Nenhum resultado encontrado." }) {
    listaElementos.innerHTML = "<p>Carregando...</p>"

    try{
        let dados = await buscarDados(endpoint)
        dados = dados || []

        // colocando valores de .cidade em minúsculo para comparar com o valor digitado pelo usuário independente de como ele digite
        const valor = valorBusca.trim().toLowerCase()
        if(valor){
            dados = dados.filter((item) => {
                const cidade = (item.cidade || "").toLowerCase()
                return cidade.startsWith(valor)
            })

            console.log(`Lista de cuidadores em: ${valorBusca}`, dados)
        } else{
            console.log(`Lista de pets cadastrados:`, dados)
        }

        listaElementos.innerHTML = ""

        if(dados.length === 0 && !cardExtra){
            listaElementos.appendChild(criarCardMensagem(mensagemVazio, "aviso"))
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

function criarCardMensagem(texto, tipo = "aviso"){
    const card = document.createElement("div")
    card.className = `mensagem-lista mensagem-lista--${tipo}`
    card.setAttribute("role", "alert")

    const paragrafo = document.createElement("p")
    paragrafo.className = "mensagem-lista__texto"
    paragrafo.textContent = texto

    card.appendChild(paragrafo)
    return card
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
    const valorBusca = inputBusca.value.trim()

    if(!valorBusca){
        listaElementos.innerHTML = ""
        listaElementos.appendChild(
            criarCardMensagem("Digite o nome de uma cidade para buscar cuidadores próximos.", "aviso"))
        inputBusca.focus()
        return
    }

    if(valorBusca.length < 3){
        listaElementos.innerHTML = ""
        listaElementos.appendChild(
            criarCardMensagem("Digite pelo menos 3 letras para buscar a cidade.", "aviso")
        )
        inputBusca.focus()
        return
    }

    exibirLista({
        endpoint: "/cuidadores",
        criarCard: criarCardCuidador,
        valorBusca,
        mensagemVazio: `Não existem cuidadores cadastrados em "${valorBusca}".`
    })
})

if (botaoMenu && headerNav){
    botaoMenu.addEventListener("click", () => {
        const estaAberto = headerNav.classList.toggle("header__nav--aberto")
        botaoMenu.setAttribute("aria-expanded", estaAberto)
        botaoMenu.textContent = estaAberto ? "✕" : "☰"
    })
}