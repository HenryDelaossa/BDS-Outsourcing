// pequeño ajuste sobre menu hamburguesa (mostrar x cuando activo y quitar cuando no)
const navTogg = document.getElementById("btnNavTogg");
const spannNavTogg = document.querySelector(".ctnSpanNav")
const navbartglrIcon = document.querySelector(".navbar-toggler-icon")
navTogg.addEventListener("click", ()=> {
    spannNavTogg.classList.toggle("ctnSpanNavInac")
    navbartglrIcon.classList.toggle("outLinesBackspn")
})