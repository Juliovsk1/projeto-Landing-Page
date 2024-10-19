var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var botaoDireita = window.document.getElementById("botaodireita")
var botaoEsquerda = window.document.getElementById("botaoesquerda")

function MoverDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    botaoDireita.style = "display:none"
    botaoEsquerda.style = "display:flex; margin-top:80%"
}
function MoverEsquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    botaoDireita.style = "display:flex"
    botaoEsquerda.style = "display:none"
}
