const cuidadoresIniciais = [
    {
        nome: "Marina Costa",
        foto: "",
        preco: "45,00",
        descricao: "Cuidadora com foco em rotina tranquila, passeios seguros e administração de medicações simples.",
        idade: 26,
        cidade: "Recife",
        especies: ["Cão", "Gato"],
        dias: ["Seg", "Qua", "Sex"],
        horarios: "08h às 18h",
        nota: "4.9",
        experiencia: 3,
        certificacoes: ["Primeiros Socorros Pet", "Comportamento Canino"],
        avaliacoes: [
            {
                autor: "Lucas Almeida",
                nota: "5.0",
                comentario: "Muito atenciosa com meu cachorro idoso, mandou fotos em todos os passeios."
            },

            {
                autor: "Thiago Nascimento",
                nota: "4.7",
                comentario: "Ótima comunicação e cuidado com os horários da medicação do meu cão idoso."
            }
        ]
    },
    
    {
        nome: "Rafael Menezes",
        foto: "",
        preco: "50,00",
        descricao: "Apaixonado por cães de médio e grande porte, especialista em caminhadas energéticas e recreação.",
        idade: 31,
        cidade: "Olinda",
        especies: ["Cão"],
        dias: ["Ter", "Qui", "Sáb", "Dom"],
        horarios: "07h às 17h",
        nota: "4.8",
        experiencia: 5,
        certificacoes: ["Adestramento Básico", "Primeiros Socorros Pet"],
        avaliacoes: [
            {
                autor: "Camila Rocha",
                nota: "4.8",
                comentario: "Pontual e super paciente com cães mais ansiosos."
            }
        ]
    },

    {
        nome: "Beatriz Nogueira",
        foto: "",
        preco: "40,00",
        descricao: "Experiência com gatos tímidos ou que precisam de cuidados mais reservados dentro de casa.",
        idade: 24,
        cidade: "Recife",
        especies: ["Gato"],
        dias: ["Seg", "Ter", "Qua", "Qui", "Sex"],
        horarios: "13h às 21h",
        nota: "5.0",
        experiencia: 2,
        certificacoes: ["Bem-estar Felino"],
        avaliacoes: []
    },

    {
        nome: "Thiago Cavalcanti",
        foto: "",
        preco: "55,00",
        descricao: "Acompanhamento diário para pets em recuperação pós-cirúrgica ou com necessidade de atenção contínua.",
        idade: 34,
        cidade: "Camaragibe",
        especies: ["Cão", "Gato", "Coelho"],
        dias: ["Seg", "Qua", "Sex", "Sáb"],
        horarios: "08h às 19h",
        nota: "4.9",
        experiencia: 6,
        certificacoes: ["Cuidados Pós-Operatórios", "Primeiros Socorros Pet"],
        avaliacoes: [
            {
                autor: "Fernanda Lima",
                nota: "5.0",
                comentario: "Seguiu todos os horários de remédio à risca e manteve o ambiente super calmo."
            },

            {
                autor: "Beatriz Lima",
                nota: "5.0",
                comentario: "Mandou atualizações ao longo do dia e cumpriu todas as tarefas combinadas sem falhas."
            },

            {
                autor: "Rodrigo Farias",
                nota: "4.8",
                comentario: "Passeios sempre no horário certo e voltou super calmo. Com certeza contratarei novamente."
            }
        ]
    },

    {
        nome: "Larissa Vasconcelos",
        foto: "",
        preco: "38,00",
        descricao: "Disponível para visitas rápidas, troca de água/ração, limpeza de caixa de areia e brincadeiras.",
        idade: 22,
        cidade: "Jaboatão dos Guararapes",
        especies: ["Gato", "Ave"],
        dias: ["Sex", "Sáb", "Dom"],
        horarios: "09h às 18h",
        nota: "4.7",
        experiencia: 1,
        certificacoes: [],
        avaliacoes: []
    },

    {
        nome: "Diego Albuquerque",
        foto: "",
        preco: "48,00",
        descricao: "Rotina estruturada para filhotes em fase de socialização e adaptação a novos comandos.",
        idade: 29,
        cidade: "Recife",
        especies: ["Cão"],
        dias: ["Ter", "Qui", "Sáb"],
        horarios: "08h às 16h",
        nota: "4.8",
        experiencia: 4,
        certificacoes: ["Socialização de Filhotes"],
        avaliacoes: [
            {
                autor: "Pedro Henrique",
                nota: "4.8",
                comentario: "Ajudou bastante na rotina do meu filhote durante a semana."
            },

            {
                autor: "Camila Albuquerque",
                nota: "5.0",
                comentario: "Seguiu todo o checklist de alimentação e passeios à risca. Fiquei muito tranquila durante a viagem."
            },

            {
                autor: "Rafael Tavares",
                nota: "4.9",
                comentario: "Muito pontual e atencioso. Meu cachorro se adaptou logo no primeiro dia."
            },

            {
                autor: "Juliana Mendes",
                nota: "5.0",
                comentario: "Teve paciência com minha gata, que costuma ser bem arisca com visitas. Recomendo demais."
            }
        ]
    },

    {
        nome: "Juliana Tavares",
        foto: "",
        preco: "42,00",
        descricao: "Atendimento carinhoso e calmo para pets idosos que precisam de mais conforto e paciência.",
        idade: 37,
        cidade: "Olinda",
        especies: ["Cão", "Gato"],
        dias: ["Seg", "Qua", "Sex", "Dom"],
        horarios: "09h às 17h",
        nota: "5.0",
        experiencia: 7,
        certificacoes: ["Geriatria Pet", "Primeiros Socorros Pet"],
        avaliacoes: [
            {
                autor: "Ana Beatriz",
                nota: "5.0",
                comentario: "Trata os pets como família. Recomendo de olhos fechados."
            }
        ]
    },
    
    {
        nome: "Bruno Montenegro",
        foto: "",
        preco: "46,00",
        descricao: "Passeios ao ar livre, enriquecimento ambiental e cuidados diários sem pressa.",
        idade: 28,
        cidade: "Camaragibe",
        especies: ["Cão"],
        dias: ["Seg", "Ter", "Qui", "Sex"],
        horarios: "06h30 às 14h30",
        nota: "4.6",
        experiencia: 3,
        certificacoes: ["Enriquecimento Ambiental"],
        avaliacoes: []
    },

    {
        nome: "Clara Monteiro",
        foto: "",
        preco: "52,00",
        descricao: "Experiência com múltiplos pets na mesma residência e rotina organizada para viagens curtas.",
        idade: 33,
        cidade: "Recife",
        especies: ["Cão", "Gato", "Hamster"],
        dias: ["Qua", "Qui", "Sex", "Sáb", "Dom"],
        horarios: "08h às 20h",
        nota: "4.9",
        experiencia: 5,
        certificacoes: ["Primeiros Socorros Pet", "Manejo de Múltiplos Pets"],
        avaliacoes: [
            {
                autor: "Gustavo Ribeiro",
                nota: "4.9",
                comentario: "Cuidou de dois gatos e um cachorro sem nenhum problema."
            },

            {
                autor: "Diego Santana",
                nota: "4.7",
                comentario: "Atendeu perfeitamente às necessidades do meu pet e respeitou toda a rotina da casa."
            },
        ]
    },

    {
        nome: "Henrique Duarte",
        foto: "",
        preco: "44,00",
        descricao: "Disponibilidade flexível para passeios diários e acompanhamento durante o horário comercial.",
        idade: 27,
        cidade: "Paulista",
        especies: ["Cão", "Gato"],
        dias: ["Seg", "Ter", "Qua", "Qui", "Sex"],
        horarios: "10h às 19h",
        nota: "4.7",
        experiencia: 2,
        certificacoes: ["Passeios e Conduta"],
        avaliacoes: [
            {
                autor: "Larissa Costa",
                nota: "4.9",
                comentario: "Cuidou dos meus dois pets no fim de semana com muito carinho e responsabilidade."
            },

            {
                autor: "Bruno Cavalcanti",
                nota: "4.6",
                comentario: "Experiência muito boa, seguiu todas as orientações sobre a ração e a troca de água."
            },

            {
                autor: "Fernanda Moura",
                nota: "5.0",
                comentario: "Super cuidadosa e organizada. O checklist facilitou bastante e ela seguiu cada detalhe."
            },

            {
                autor: "Gustavo Ribeiro",
                nota: "4.8",
                comentario: "Excelente profissional, demonstrou experiência desde o primeiro contato."
            },

            {
                autor: "Renata Barros",
                nota: "5.0",
                comentario: "Deixei meu cachorro por quatro dias e ele foi super bem tratado. Passa muita confiança."
            }
        ]
    }
]

async function popularCuidadores(){
    const cuidadoresExistentes = (await buscarDados("/cuidadores")) || []

    if(cuidadoresExistentes.length > 0){
        console.log("Já existem cuidadores cadastrados. Nenhuma injeção necessária.")
        console.log("Cuidadores vindos da API:", cuidadoresExistentes)
        return
    }

    for(const cuidador of cuidadoresIniciais){
        await enviarDados("/cuidadores", cuidador)
        console.log(`Cuidador "${cuidador.nome}" cadastrado com sucesso.`)
    }

    console.log("Cuidadores vindos da API:", cuidadoresExistentes)
}

popularCuidadores()