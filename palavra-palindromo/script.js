let formulario = document.querySelector("#in-formulario")
let saida = document.querySelector("#out-saida")

formulario.addEventListener("submit", (e) =>{
    e.preventDefault()

    let palavra = formulario.elements["in-palavra"].value

    if (/^[a-z]+$/.test(palavra)) {
        // Se a palavra contém apenas letras, processa normalmente
        palavra = palavra.toLowerCase();
    } else {
        saida.innerText = "Por favor, insira apenas letras.";
        saida.style.backgroundColor = "#f9c4ad";
        saida.style.border = "1px solid #9f1fe0";
        formulario.elements["in-palavra"].value = ""
        return;
    }

   // palavra = palavra.toLowerCase().replace(/[^a-z]/g, "")

    let palavraInvertida = palavra.split("").reverse().join("")

    if(palavra === palavraInvertida){
        saida.innerText = `A palavra ${palavra} é um palíndromo.`
        saida.style.backgroundColor = "#f9c4ad";
        saida.style.border = "1px solid #9f1fe0";
    } else{
        saida.innerText = `A palavra ${palavra} não é um palíndromo.`
        saida.style.backgroundColor = "#f9c4ad";
        saida.style.border = "1px solid #9f1fe0";    
    }

    formulario.elements["in-palavra"].value = ""
    formulario.elements["in-palavra"].value.focus()
})