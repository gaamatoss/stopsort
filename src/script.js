let btnReset = document.querySelector(".btn-reset")
let btnSort = document.querySelector(".btn-sort")
let letra = document.querySelector("#letra-sort")
let spanLetra = document.querySelector("#letra-repeated")
let letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let letrasUsadas = []
letra.textContent = '-'

btnSort.addEventListener("click", function(){
    if(letras.length <= 0){
        letra.textContent = 'Reset!'
    }else {
        sortear()
        let letraSorteada = letra.textContent
        letrasUsadas.push(letraSorteada)
        letraRepetida(letraSorteada)
        classRepeated()
    }
})

btnReset.addEventListener("click", function(){
   if(letrasUsadas.length > 0){
        letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']     
        letrasUsadas = []
        spanLetra.textContent = letrasUsadas
        letra.textContent = '-'
   } else {
        classDanger()
   }
})

const sortear = () => {
    let aleatorio = letras[Math.floor(Math.random() * letras.length)];
    letra.textContent = aleatorio;
}

const classRepeated = () => {
    spanLetra.textContent = letrasUsadas
    spanLetra.classList.remove('alert')
    spanLetra.classList.remove('alert-danger')
    spanLetra.classList.add('letra-repetida')
}

const classDanger = () => {
    spanLetra.classList.remove('letra-repetida')
    spanLetra.textContent = 'Reset feito'
    spanLetra.classList.add('alert')
    spanLetra.classList.add('alert-danger')
}

const letraRepetida = (letra) => {
    for(let i = 0; i < letras.length; i++){
        if(letras[i] == letra){
            console.log("Posição: " + i + " Letra: " + letra);
            letras.splice(i, 1)
            console.log(letras);
        }
    }
}