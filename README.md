# PataHood

Plataforma web que conecta tutores de animais de estimação a cuidadores locais verificados, promovendo transparência na rotina de cuidados diários por meio de checklists personalizados.

## Aplicação Publicada

* **Acesse o projeto online:** [https://evertonrpaixao.github.io/PataHood/](https://evertonrpaixao.github.io/PataHood/)

---

## Sobre o Projeto e ODS

### O Problema
Muitos tutores enfrentam insegurança ao precisar deixar seus pets sob responsabilidade de terceiros durante jornadas de trabalho ou viagens, seja pela dificuldade de encontrar cuidadores confiáveis na mesma região ou pela falta de acompanhamento claro sobre horários de alimentação, passeios e medicações.

### A Solução
O **PataHood** centraliza a busca por cuidadores próximos e permite que cada tutor cadastre o perfil completo dos seus pets com um **checklist dinâmico de rotina**, garantindo que todas as instruções fiquem documentadas e associadas ao profissional contratado.

### Alinhamento com os ODS (ONU)
* **ODS 11 — Cidades e Comunidades Sustentáveis (Impacto Direto):** Fortalece redes locais de apoio entre moradores da mesma cidade, reduzindo deslocamentos e prevenindo situações de negligência ou abandono animal, tornando o convívio urbano mais seguro e sustentável.
* **ODS 3 — Saúde e Bem-Estar (Impacto Indireto):** Preserva a saúde física e emocional dos animais ao manter sua rotina respeitada, enquanto reduz o estresse e a ansiedade dos tutores por meio de um acompanhamento transparente.

---

## Funcionalidades Principais

* **Cadastro e Edição de Pets:** Formulário integrado à API com criação dinâmica de tarefas no checklist (alimentação, medicação, passeios), diferenciando automaticamente criação (`POST`) e atualização (`PATCH`) pelo parâmetro `?id=` na URL.
* **População Inicial Automática:** Ao carregar a página inicial, a aplicação verifica se já existem cuidadores cadastrados; caso a base esteja vazia, injeta automaticamente 10 perfis fictícios sem gerar duplicatas nos acessos seguintes.
* **Busca de Cuidadores e Pets:** Listagem dinâmica na tela inicial com redirecionamento para páginas de perfil individualizadas via id (`?id=`).
* **Perfil do Cuidador e Contratação:** Exibição de especialidades, disponibilidade, certificações, avaliações e formulário para vincular um ou mais pets cadastrados ao cuidador escolhido.

---

## Tecnologias e Arquitetura

* **HTML5:** Estruturação semântica e acessível.
* **CSS3:** Estilização responsiva organizada com a metodologia **BEM** (*Block, Element, Modifier*).
* **JavaScript (Vanilla):** Arquitetura modular carregada com `defer`, manipulação de DOM, `FormData` e comunicação assíncrona (`async/await`) via `Fetch API`.

---

## Integração com a API e Endpoints

Toda a comunicação com o back-end é centralizada no módulo `api.js` por meio das funções `buscarDados` (`GET`), `enviarDados` (`POST`) e `atualizarDados` (`PATCH`), trafegando objetos em formato `JSON`.

### Endpoints Utilizados

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/api/devserbalao-final/cuidadores` | Retorna a lista de cuidadores cadastrados (usado na busca e na checagem dos profissionais pré-cadastrados). |
| `POST` | `/api/devserbalao-final/cuidadores` | Cadastra os cuidadores fictícios iniciais quando a coleção está vazia. |
| `GET` | `/api/devserbalao-final/cuidadores/{id}` | Busca os dados detalhados de um cuidador específico para renderizar seu perfil. |
| `GET` | `/api/devserbalao-final/pets` | Lista os pets cadastrados para exibição na tela inicial e seleção na contratação. |
| `GET` | `/api/devserbalao-final/pets/{id}` | Carrega os dados e o checklist de um pet específico para visualização ou edição. |
| `POST` | `/api/devserbalao-final/pets` | Cria um novo registro de pet com `cuidadorId: null` e checklist inicial. |
| `PATCH` | `/api/devserbalao-final/pets/{id}` | Atualiza parcialmente os dados/checklist do pet ou vincula um `cuidadorId` na contratação. |

### Exemplo de Payload (`POST /pets`)

```json
{
  "nome": "Raimundo",
  "especie": "Cachorro",
  "raca": "Pinscher",
  "idade": "4",
  "peso": "4,6kg",
  "telefone": "(62) 9 2512 - 5352",
  "checklist": [
    { "texto": "Ração às 08h e 18h", "concluida": false },
    { "texto": "Passeio curto no fim da tarde", "concluida": false }
  ],
  "cuidadorId": null
}
```

---

## Estrutura de Pastas

```text
PataHood/
├── assets                      # Arquivos de imagem
└── src/                     
│    ├── pages/
│        ├── perfil-pet.html     # Cadastro e edição de perfil e checklist do pet
│        ├── perfil-profissional.html # Perfil detalhado do cuidador e contratação
│    ├── styles/                 # Arquivos de estilo
│    └── scripts/
│        ├── api.js              # Funções genéricas de GET, POST e PATCH
│        ├── dados-cuidadores.js # Massa de dados e injeção automática de cuidadores
│        ├── index.js            # Lógica da página inicial e renderização das listas
│        ├── perfil-pet.js       # CRUD de pets e gerenciamento dinâmico do checklist
│        └── perfil-profissional.js # Carregamento do cuidador e vínculo de contratação
├── index.html                  # Página inicial (busca, listagens, seção sobre a solução e footer)
├── LICENSE
├── README.md
```

---

## Equipe

* **Everton Rodrigues** — [GitHub](https://github.com/evertonrpaixao)
* **Ana Florentino** — [GitHub](https://github.com/claralfs)
* **Felipe Correia** — [GitHub](https://github.com/felipecorreiaa)
* **Jezreel David**
