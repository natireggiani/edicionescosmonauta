
let card2 = document.querySelectorAll('.card2')
let cardpadre = document.querySelectorAll('.card-padre')
let cardhover = document.querySelectorAll('.card-hover')
console.log(cardpadre)
function agregarDiv(){
    this.childNodes[5].classList.remove('hide')
    this.childNodes[5].classList.remove('slide-out-top')
    this.childNodes[5].classList.add('slide-in-top')
    
}

function sacarDiv(){
    this.childNodes[5].classList.add('slide-out-top')
    this.childNodes[5].classList.remove('slide-in-top')
}

cardpadre.forEach(el=>{
    el.addEventListener('mouseover', agregarDiv)
})

cardpadre.forEach(el=>{
    el.addEventListener('mouseout', sacarDiv)
})

let al = document.getElementById('alerta');
al.addEventListener('click',function(){  
    alert("Contenido no apto para menores de 18 años. Incluye chanchadas")    
})
