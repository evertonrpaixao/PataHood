// DOM //
const formPet = document.querySelector("#form-pet")
const petFoto = document.querySelector("#pet-foto")
const inputNome = document.querySelector("#pet-nome")
const inputIdade = document.querySelector("#pet-idade")
const inputEspecie = document.querySelector("#pet-especie")
const inputRaca = document.querySelector("#pet-raca")
const inputPeso = document.querySelector("#pet-peso")
const inputTelefone = document.querySelector("#pet-telefone")
const listaTarefas = document.querySelector("#tarefas")
const botaoAddTarefa = document.querySelector("#adic-tarefa-botao")

// pegando id do pet pela url da página
const params = new URLSearchParams(window.location.search)
const petId = params.get("id")

// FUNÇÕES //
function adicionarTarefa(texto = "", concluida = false){
    const itemTarefa = document.createElement("li")
    itemTarefa.className = "tarefas__item"

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.className = "tarefas__checkbox"
    checkbox.checked = concluida
    checkbox.disabled = true

    const inputTexto = document.createElement("input")
    inputTexto.type = "text"
    inputTexto.className = "tarefas__texto"
    inputTexto.placeholder = "Descrever tarefa"
    inputTexto.value = texto

    itemTarefa.append(checkbox, inputTexto)
    listaTarefas.appendChild(itemTarefa)

    inputTexto.focus()

    inputTexto.addEventListener("keydown", (event) => {
        if(event.key === "Enter") event.preventDefault()
    })
}

function obterChecklist(){
    // transformar nodelist em array por meio do operador spread
    const itens = [...listaTarefas.querySelectorAll(".tarefas__item")]

    return itens.map((item) => {
        const texto = item.querySelector(".tarefas__texto").value.trim()
        const concluida = item.querySelector(".tarefas__checkbox").checked

        // as chaves do objeto terão nome igual a texto e concluida, já que não as defini explicitamente.
        return { texto, concluida }
    }).filter((tarefa) => tarefa.texto !== "")
}

function preencherFormularioPet(pet){
    petFoto.src = "../../assets/pet-padrao.png"
    inputNome.value = pet.nome || ""
    inputIdade.value = pet.idade || ""
    inputEspecie.value = pet.especie || ""
    inputRaca.value = pet.raca || ""
    inputPeso.value = pet.peso || ""
    inputTelefone.value = pet.telefone || ""

    listaTarefas.innerHTML = ""
    ;(pet.checklist || []).forEach((tarefa) => {
        adicionarTarefa(tarefa.texto, tarefa.concluida)
    })
}

async function inicializarPagina(){
    if(!petId) return

    //buscando pet já cadastrado pelo id
    try{
        const pet = await buscarDados(`/pets/${petId}`)
        preencherFormularioPet(pet)
    }catch (erro){
        console.error(erro)
        alert("Pet não encontrado. Redirecionando para novo cadastro.")
        window.location.search = ""
    }
}

async function salvarPet(event){
    event.preventDefault()

    //transformando formData(formPet) num objeto tradicional para que a api possa ler
    const dadosForm = Object.fromEntries(new FormData(formPet))

    const dadosPet = {
        // jogando todo o objeto dadosForm dentro de novo pet
        ...dadosForm,
        checklist: obterChecklist(),
    }
    
    try{
        // se existir um id na página, atualiza um cadastro existente ao invés de criar um novo
        if(petId){
            const petSalvo = await atualizarDados(`/pets/${petId}`, dadosPet)
            alert("Informações do pet atualizadas com sucesso!")

            console.log("Pet atualizado na API:", petSalvo)
            window.location.reload()
            return
        }

        // cria novo pet
        const novoPet = {
            ...dadosPet,
            cuidadorId: null
        }

        const petSalvo = await enviarDados("/pets", novoPet)
        const novoId = petSalvo.id
        alert("Informações do pet salvas com sucesso!")

        if(novoId){
            window.location.search = `?id=${novoId}`
        }
        console.log("Pet salvo na API:", petSalvo)
    }catch (erro){
        console.error(erro)
        alert("Não foi possível salvar os dados. Verifique a conexão com a API.")
    }   
}

// EVENTOS //
botaoAddTarefa.addEventListener("click", () => {
    adicionarTarefa()
})

formPet.addEventListener("submit", salvarPet)

inicializarPagina()