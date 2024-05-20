
// let menu = document.querySelector("#menu")

let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconesX = document.querySelector("#icones-x")

function abrirFecharMenu() {
    
    // Se o menu está fechado
    if (menu.classList.contains("menu-fechado")) {
        // Abrir o menu
        menu.classList.remove("menu-fechado")

        // Mostrar icone X
        iconesX.style.display = "unset"

        // Esconder icone Barras
        iconeBarras.style.display = "none"
    } else{
        // Fechar o menu
        menu.classList.add("menu-fechado")

         // Esconder icone X
         iconesX.style.display = "none"

         // Mostrar icone Barras
         iconeBarras.style.display = "unset"
    }

}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconesX.style.display = "inline"
    iconeBarras.style.display = "none"
}

const solicitarOrcamento = (event) => {
    // pegar valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-descricao").value

    // organizar objeto com os valores
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }
    // enviar requisição para a api
    // 127.0.0.1 -> localhost
    // Método HTTP POST - Create -> Cadastrar ou criar
    fetch("http://127.0.0.1:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    .then(resposta => {
        console.log(resposta)

        // Limpar os campos
        document.querySelector("#contato form").reset()

        // Mostrar alerts com msg de sucesso
        alert("Solicitação cadastrada")
    })
    .catch( erro => {
        console.error(erro)
        alert("Erro na requisição")
    })


   event.preventDefault()
}
