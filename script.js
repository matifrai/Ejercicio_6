const inputNombre = document.getElementById("NombreViajero");
const inputEdad = document.getElementById("Edad");
const inputPresupuesto = document.getElementById("Presupuesto");
const inputDestino = document.getElementById("Destino");
const inputTemporada = document.getElementById("Temporada");
const inputSeguro = document.getElementById("Acepto");
const divResultado = document.getElementById("resultado");


function registrarViaje(){
    const NombreViajero = inputNombre.value;
    const Edad = inputEdad.value;
    const Presupuesto = inputPresupuesto.value;
    const Destino = inputDestino.value;
    const Temporada = inputTemporada.value;
    const Seguro = inputSeguro.value;
    const errores = [];

    if(NombreViajero != ""){
        mostrarOk("fb-nombre","✓ OK" )
    }
    if(Edad >= 18 && Edad <= 65){
        mostrarOk("fb-edad", "✓ OK")
    }else{
        errores.push("No cumple con la edad que se requiere para el viaje");
        mostrarError("fb-edad","No cumple con la edad");
    }
    if(Presupuesto >= 500000){
        mostrarOk("fb-presupuesto","✓ OK");
    }else{
        errores.push("No cuenta con la cantidad de dinero necesaria");
        mostrarError("fb-presupuesto","Se necesitan minimo $500.000");
    }
    if(Destino === "Bariloche" || Destino === "NoPreferencia"){
        mostrarOk("fb-destino","✓ OK");
    }else{
        errores.push("No hay paqutes a ese lugar");
        mostrarError("fb-destino","No existe paquete");
    }
    if(Temporada === "Enero" || Temporada === "Feberero" || Temporada === "Ambos"){
        mostrarOk("fb-temporada","✓ OK");
    }else{
        errores.push("Seleccione una opción valida");
        mostrarError("fb-temporada","Campo obligatorio");
    }
    if(Seguro != ""){
        mostrarOk("fb-seguro","✓ OK");
    }else{
        errores.push("Acepte el seguro para continuar");
        mostrarError("fb-seguro","Campo obligatorio");
    }
    if (errores.length > 0) {
      divResultado.style.color  = "red";
      divResultado.style.border = "1px solid red";
      divResultado.style.padding = "8px";
      divResultado.innerHTML = "<strong>No se pudo registrar:</strong><br>"
                             + errores.join("<br>");
    } else {
      divResultado.style.color  = "green";
      divResultado.style.border = "1px solid green";
      divResultado.style.padding = "8px";
      divResultado.innerHTML = "<strong>Viaje registrado</strong><br>"
                             + "Nombre: " + NombreViajero.value + "<br>"
                             + "Destino: "  + Destino.value + "<br>"
                             + "Presupuesto: "   + Presupuesto.value
                             + " — "}
}


 function limpiarFormulario() {
   inputNombre.value = "";
   inputDestino.value = "";
   inputEdad.value = "";
   inputPresupuesto.value = "";
   inputSeguro.value = "";
   inputTemporada.value = "";
  }

function mostrarError(id, msg) {
    const el = document.getElementById(id);
    el.innerHTML = msg;
    el.style.color = "red";
  }
 
  function mostrarOk(id, msg) {
    const el = document.getElementById(id);
    el.innerHTML = msg;
    el.style.color = "green";
  }
