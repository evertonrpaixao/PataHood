// DOM //
const formPet = document.querySelector("#form-pet")
const inputNome = document.querySelector("#pet-nome")
const inputIdade = document.querySelector("#pet-idade")
const inputEspecie = document.querySelector("#pet-especie")
const inputRaca = document.querySelector("#pet-raca")
const inputPeso = document.querySelector("#pet-peso")
const inputTelefone = document.querySelector("#pet-telefone")
const listaTarefas = document.querySelector("#tarefas")
const botaoAddTarefa = document.querySelector("#adic-tarefa-botao")

// FUNÇÕES //
function adicionarTarefa(){
    const itemTarefa = document.createElement("li")
    itemTarefa.className = "tarefas__item"

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.className = "tarefas__checkbox"
    checkbox.disabled = true

    const inputTexto = document.createElement("input")
    inputTexto.type = "text"
    inputTexto.className = "tarefas__texto"
    inputTexto.placeholder = "Descrever tarefa"

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

async function salvarPet(event){
    event.preventDefault()

    //transformando formData(formPet) num objeto tradicional para que a api possa ler
    const dadosForm = Object.fromEntries(new FormData(formPet))

    const novoPet = {
        // jogando todo o objeto dadosForm dentro de novo pet
        ...dadosForm,
        checklist: obterChecklist()
    }
    
    console.log("Pet salvo na API:", novoPet)
    //const petSalvo = await enviarDados("/pets", novoPet)
    //console.log("Pet salvo na API:", petSalvo)
}

// EVENTOS //
botaoAddTarefa.addEventListener("click", adicionarTarefa)
formPet.addEventListener("submit", salvarPet)

