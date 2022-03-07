// boton ver mas...
let pverMas = document.getElementById("pverMas");
let btnVerMas = document.getElementById("btnVerMas");
btnVerMas.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    pverMas.classList.toggle("pVerMasNon");
  }
});




