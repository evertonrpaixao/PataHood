const API_URL = "https://psel-api.vercel.app/api/devserbalao"

async function buscarDados(endpoint){
    const response = await fetch(`${API_URL}${endpoint}`)

    if(!response.ok) {
        throw new Error(`Erro HTTP ${response.status} ao buscar em ${endpoint}`)
    }

    return await response.json()
}

async function enviarDados(endpoint, dados){
    const response = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })

    if(!response.ok) {
        throw new Error(`Erro HTTP ${response.status} ao enviar para ${endpoint}`)
    }

    return await response.json()
}

async function atualizarDados(endpoint, dados) {
    const resposta = await fetch(`${API_URL}${endpoint}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })

    if (!resposta.ok) {
        throw new Error(`Erro ao atualizar dados: ${resposta.status}`)
    }

    return await resposta.json()
}