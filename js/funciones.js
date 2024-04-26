function validar() {
  // Variables
  let nombre = document.getElementById("nombre").value;
  let rut = document.getElementById("rut").value;
  let correo = document.getElementById("correo").value;

  /*
              Nombre Min: 15 - Max: 25
              Rut Min: 9 - Max: 12
              Correo Min: 5 - Max: 25 - Debe contener gmail || outlook || live 
          */

  // Validar Nombre completo
  if (String(nombre).length >= 15 && String(nombre).length <= 25) {
    $("#nombre").css("border", "3px solid green");
  }
  else {
    $("#nombre").css("border", "3px solid red");
  }
}
