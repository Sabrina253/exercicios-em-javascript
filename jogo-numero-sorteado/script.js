const formulario = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = [] //acumula os erros
const sorteado = Math.floor(Math.random() * 10) + 1
const CHANCES = 6 //número total de chances

formulario.addEventListener("submit", (e) => {
  e.preventDefault()
  const numero = Number(formulario.inNumero.value)
  if(numero == sorteado){
    respDica.innerText = `Parábens! O número sorteado é: ${sorteado}`
    formulario.btSubmit.disabled = true
    formulario.btSubmit.classList.add('btDesativado');
  } else{
    if(erros.includes(numero)){ //verifica se número digitado já foi escolhido
        respDica.innerText = `Você já escolheu o número ${numero}. Tente outro`
    } else{ //acumula os números digitados no array erros
      erros.push(numero)
      const numErros = erros.length
      const numChances = CHANCES - numErros
      respErros.innerText = `${numErros} (${erros.join(", ")})`
      respChances.innerText = numChances
      if(numChances == 0){
        formulario.btSubmit.disabled = true
        respDica.innerText = `Game over! O número sorteado é: ${sorteado}`
      } else { //condição ternária
        const dica = numero < sorteado ? "maior" : "menor"
        respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
      }
    }
  }
  
  formulario.inNumero.value = ""
  formulario.inNumero.focus()
  
})

formulario.btReiniciar.addEventListener("click", () => {
  location.reload()
})