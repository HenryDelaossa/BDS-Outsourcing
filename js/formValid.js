// // regex validacion inputs
// const ValidacionInputs = {
//     nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
//     apellido: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
//     correo:
//       /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/,
//     telefono: /^\d{7,13}$/,
//     mensaje: /[a-zA-Z0-9 ]{5,40}$/,
//   };
//   // estados inputs
//   const estado = {
//     nombre: false,
//     apellido: false,
//     correo: false,
//     telefono: false,
//     mensaje: false,
//   };
//   // variables
//   const inptName = document.getElementById("inptNombre");
//   const inptApellido = document.getElementById("inptApellido");
//   const inptEmail = document.getElementById("inptEmail");
//   const inptTelefono = document.getElementById("inptTelefono");
//   const labelMensaje = document.getElementById("labelMensaje");
//   const errNombre = document.querySelector(".errNombre")
//   const errApell = document.querySelector(".errApell")
//   const errEmail = document.querySelector(".errEmail")
//   const errTel = document.querySelector(".errTel")
//   const errMsje = document.querySelector(".errMsje")
  
//   // logica validacion datos formulario
//   function actionsValid ( input, errCase ) {
//       input.style.outline = "1px solid transparent";
//       input.style.border = "1px solid green";
//       errCase.style.display = "none"
//   }
//   function actionValidFalse (input, errCase ) {
//       input.style.outline = "1px solid transparent";
//       input.style.border = "1px solid red";
//       errCase.style.display = "inline-block";
//   }
  
//   function validEntrys(e) {
//     switch (e.target.name) {
//       case "inptNombre":
//         ValidacionInputs.nombre.test(e.target.value) ? (actionsValid(inptName, errNombre), estado.nombre= true): (actionValidFalse(inptName, errNombre), estado.nombre = false)
//         break;
//       case "inptApellido":
//         ValidacionInputs.apellido.test(e.target.value) ? (actionsValid(inptApellido, errApell), estado.apellido= true): (actionValidFalse(inptApellido, errApell), estado.apellido = false)
//         break;
//       case "inptEmail":
//         ValidacionInputs.correo.test(e.target.value) ? (actionsValid(inptEmail, errEmail), estado.correo= true): (actionValidFalse(inptEmail, errEmail), estado.correo = false)
//         break;
//       case "inptTelefono":
//         ValidacionInputs.telefono.test(e.target.value) ? (actionsValid(inptTelefono, errTel), estado.telefono= true): (actionValidFalse(inptTelefono, errTel), estado.telefono = false)
//         break;
//       case "labelMensaje":
//         ValidacionInputs.mensaje.test(e.target.value) ? (actionsValid(labelMensaje, errMsje), estado.mensaje= true): (actionValidFalse(labelMensaje, errMsje), estado.mensaje = false)
//         break;
//     }
//   }
//   // eventos sobre inputs para validacion de los datos
//   const inputs = document.querySelectorAll("input");
//   inputs.forEach((input) => {
//     input.addEventListener("keyup", validEntrys);
//     input.addEventListener("blur", validEntrys);
//   });
//   labelMensaje.addEventListener("keyup", validEntrys);
//   labelMensaje.addEventListener("blur", validEntrys);
  
//   // evento sobre boton submit valiadacion todos los inputs
//   const btnSubmitFormContact = document.getElementById("btnSubmitFormContact");
//   const sectionValidForm = document.getElementById("sectionValidForm");
//   btnSubmitFormContact.addEventListener("click", (e) => {
//     e.preventDefault();
//     estado.mensaje && estado.telefono && estado.correo && estado.apellido && estado.nombre ? sectionValidForm.style.display = "flex": alert("Ingresa datoscorrectamente")
//   });
  
//   // eventos acciones cerrar modal formulario
//   const xClose = document.querySelector(".xClose");
//   const formContact = document.querySelector(".formContact");
//   window.addEventListener("click", (e) => {
//     if (e.target === sectionValidForm || e.target === xClose) {
//       sectionValidForm.style.display = "none";
//       formContact.reset();
//       estado.nombre = false
//       estado.apellido = false
//       estado.correo = false
//       estado.telefono = false
//       estado.mensaje = false
//     }
//   });