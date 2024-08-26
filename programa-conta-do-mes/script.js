const formulario = document.querySelector("form")
const resp1 = document.querySelector("#outResumoContas")
const resp2 = document.querySelector("#outValorTotal")

let resposta = ""
let numContas = 0 //inicializa contador
let valorTotal = 0 // acumulador = variarel global

formulario.addEventListener("submit", (e) => {
  e.preventDefault()
  
  const descricao = formulario.inDescricao.value //obtem dados da conta
  const preco = Number(formulario.inValor.value)
  
  numContas++ // adiciona valores ao contador e acumulador
  valorTotal += preco
  resposta+= descricao + " - R$: " + preco.toFixed(2) + "\n"
  resp1.innerText = `${resposta} `
  resp2.innerText = `${numContas} Conta(s) - Total R$: ${valorTotal.toFixed(2)}`
  resp1.style.backgroundColor = '#a4a5ef';
  resp2.style.backgroundColor = '#a4a5ef';
  formulario.inDescricao.value = ""
  formulario.inValor.value = ""
  formulario.inDescricao.focus()
})