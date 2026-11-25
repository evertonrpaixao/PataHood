// DOM //
const perfilFoto = document.querySelector("#perfil-foto")
const perfilNome = document.querySelector("#perfil-nome")
const perfilCertificacoes = document.querySelector("#perfil-certificacoes")
const perfilPreco = document.querySelector("#perfil-preco")
const perfilDescricao = document.querySelector("#perfil-descricao")
const perfilIdade = document.querySelector("#perfil-idade")
const perfilEspecies = document.querySelector("#perfil-especies")
const perfilDias = document.querySelector("#perfil-dias")
const perfilHorarios = document.querySelector("#perfil-horarios")
const perfilNota = document.querySelector("#perfil-nota")
const perfilExperiencia = document.querySelector("#perfil-experiencia")
const listaAvaliacoes = document.querySelector("#avaliacoes-lista")

// elementos da solicitação
const formSolicitacao = document.querySelector("#form-solicitacao")
const botaoContratar = document.querySelector("#botao-contratar")
const botaoFecharJanela = document.querySelector("#botao-fechar-janela")
const listaPetsSolicitacao = document.querySelector("#lista-pets-solicitacao")

// pegando id do cuidador pela url da página
const params = new URLSearchParams(window.location.search)
const cuidadorId = params.get("id")

// FUNÇÕES //
function renderizarCertificacoes(certificacoes = []){
    perfilCertificacoes.innerHTML = ""

    if(certificacoes.length === 0){
        const itemVazio = document.createElement("li")
        itemVazio.className = "perfil__certificacao-item"
        itemVazio.textContent = "Sem certificações informadas"
        perfilCertificacoes.appendChild(itemVazio)
        return
    }

    certificacoes.forEach((certificacao) => {
        const item = document.createElement("li")
        item.className = "perfil__certificacao-item"
        item.textContent = certificacao
        perfilCertificacoes.appendChild(item)
    })
}

function renderizarAvaliacoes(avaliacoes = []){
    listaAvaliacoes.innerHTML = ""

    if(avaliacoes.length === 0){
        const itemVazio = document.createElement("li")
        itemVazio.className = "avaliacoes__item"
        itemVazio.textContent = "Este cuidador ainda não possui avaliações."
        listaAvaliacoes.appendChild(itemVazio)
        return
    }

    avaliacoes.forEach((avaliacao) => {
        const item = document.createElement("li")
        item.className = "avaliacoes__item"

        item.innerHTML = `
            <div class="avaliacoes__cabecalho">
                <strong class="avaliacoes__autor">${avaliacao.autor || "Tutor"}</strong>
                <span class="avaliacoes__nota">★ ${avaliacao.nota || "5.0"}</span>
            </div>
            <p class="avaliacoes__comentario">${avaliacao.comentario || ""}</p>
        `
        listaAvaliacoes.appendChild(item)
    })
}

function preencherPerfilCuidador(cuidador){
    perfilFoto.src = cuidador.foto || "assets/cuidador-padrao.png"
    perfilFoto.alt = `Foto de ${cuidador.nome || "cuidador"}`

    perfilNome.textContent = cuidador.nome || "Cuidador sem nome"
    perfilPreco.textContent = `R$ ${cuidador.preco || "--,--"}/h`
    perfilDescricao.textContent = cuidador.descricao || "Nenhuma descrição informada."
    perfilIdade.textContent = cuidador.idade ? `${cuidador.idade} anos` : "Idade não informada"
    
    perfilEspecies.textContent = (cuidador.especies || []).join(", ") || "Espécies não informadas"

    perfilDias.textContent = (cuidador.dias || []).join(", ") || "Dias não informados"

    perfilHorarios.textContent = cuidador.horarios || "Horários não informados"
    perfilNota.textContent = cuidador.nota || "Novo"
    perfilExperiencia.textContent = cuidador.experiencia ? `${cuidador.experiencia} anos` : "Iniciante"

    renderizarCertificacoes(cuidador.certificacoes)
    renderizarAvaliacoes(cuidador.avaliacoes)
}

async function carregarPetsParaSolicitacao(){
    try{
        const pets = await buscarDados("/pets")
        listaPetsSolicitacao.innerHTML = ""

        if(!pets || pets.length === 0){
            listaPetsSolicitacao.innerHTML = "<li>Nenhum pet cadastrado.</li>"
            return
        }

        pets.forEach((pet) => {
            const id = pet.id
            const item = document.createElement("li")
            item.className = "lista-pets__item"

            item.innerHTML = `
                <label>
                    <input type="checkbox" name="petsSelecionados" value="${id}">
                    ${pet.nome || "Pet sem nome"}
                </label>
            `
            listaPetsSolicitacao.appendChild(item)
        })
    } catch (erro){
        console.error("Erro ao carregar pets para solicitação:", erro)
        listaPetsSolicitacao.innerHTML = "<li>Erro ao carregar seus pets.</li>"
    }
}

async function inicializarPagina(){
    if(!cuidadorId){
        alert("Cuidador não especificado. Voltando para a página inicial.")
        window.location.href = "../../index.html"
        return
    }

    try{
        const cuidador = await buscarDados(`/cuidadores/${cuidadorId}`)
        preencherPerfilCuidador(cuidador)
        await carregarPetsParaSolicitacao()
    } catch (erro){
        console.error(erro)
        alert("Cuidador não encontrado. Voltando para a página inicial.")
        window.location.href = "index.html"
    }
}

// EVENTOS //
botaoContratar.addEventListener("click", () => {
    formSolicitacao.classList.remove("escondida")
})

botaoFecharJanela.addEventListener("click", () => {
    formSolicitacao.classList.add("escondida")
})

inicializarPagina()