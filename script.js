let btnReset = document.querySelector(".btn-reset")
let btnSort = document.querySelector(".btn-sort")
let letra = document.querySelector("#letra-sort")
let spanMessage = document.querySelector("#letra-repeated")
let letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let letrasUsadas = []
letra.textContent = '-'

btnSort.addEventListener("click", function(){
    sortear()
    let letraSorteada = letra.textContent
    letrasUsadas.push(letraSorteada)
    classRepeated()
})

btnReset.addEventListener("click", function(){
   if(letrasUsadas.length > 0){
        letrasUsadas = []
        spanMessage.textContent = letrasUsadas
        letra.textContent = '-'
   } else {
        classDanger()
   }
})

const sortear = () => {
    let aleatorio = letras[Math.floor(Math.random() * letras.length)];
    letra.textContent = aleatorio;

    for(let i = 0; i < letras.length; i++){
    }
}

const classRepeated = () => {
    spanMessage.textContent = letrasUsadas
    spanMessage.classList.remove('alert')
    spanMessage.classList.remove('alert-danger')
    spanMessage.classList.add('letra-repeated')
}

const classDanger = () => {
    spanMessage.classList.remove('letra-repeated')
    spanMessage.textContent = 'Reset feito'
    spanMessage.classList.add('alert')
    spanMessage.classList.add('alert-danger')
}