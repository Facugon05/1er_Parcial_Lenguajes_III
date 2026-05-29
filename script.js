function validarNomYAp (){
    var valor = document.getElementById('nombreYapellido').value;
    spanError = document.getElementById('error-nombreYapellido');

    var soloLetras = /^[A-Za-z]+$/;

    if (valor === ""){
        spanError.innerHTML = "no puede dejar este campo vacío, debe completarlo"
        return false;
    }

    if (valor.length < 3 ){
    spanError.innerHTML= "El nombre y apellido debe tener un mínimo de 3 caracteres"
    return false;
    }

    if (!soloLetras.test(valor)){
        spanError.innerHTML = "este campo no puede contener números ni caracteres especiales"
        return false;
    }

    spanError.innerHTML=""
    return true;

}

function validarDNI(){

    var valor = document.getElementById('dni').value;
    var spanError = document.getElementById('error-dni');

    if (valor==="" || isNaN(valor)){
        spanError.innerHTML = "el dni solo puede estar compuesto por números"
        return false;
    }

    if (valor.length !== 8){
        spanError.innerHTML = "el dni debe tener una longitud exacta de 8 digitos"
        return false;
    }
    

    spanError.innerHTML=""
    return true;
}

function validarFechaNac (){
    var valor = document.getElementById('fechaNac').value;
    var spanError = document.getElementById('error-fechaNac');

    const fechaNacimiento = new Date(valor);
    const fechaActual = new Date();

    if (!(fechaNacimiento instanceof Date) || isNaN(fechaNacimiento.getTime())){
        spanError.innerHTML = "ingrese una fecha valida"
        return false;
    }
    else{
        let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
        if (edad < 18) {
            spanError.innerHTML= "debes tener más de 18 años"
            return false;
        }

    }

    spanError.innerHTML=""
    return true;

    
}


function registrarInfo(){

    nombreYApOK = validarNomYAp();
    dniOk = validarDNI();
    fechaNacOK = validarFechaNac();

    if (nombreYApOK && dniOk && fechaNacOK){
        var seccion = document.getElementById('seccion-formulario');

        seccion.innerHTML = "<div class='mensaje-exito'>" + 
        "<h3> ¡Registro Exitoso! </h3>" + 
        "</div>";

        document.getElementById('seccion-preguntasProg').style.display = "block";
    }

}

function hacerPreguntas(){

    var nacionalidad = prompt("¿Cuál es tu nacionalidad?");
    var nivelConocimientoProg = prompt("¿Cuál es tu nivel de conocimiento en programación? (Básico / Intermedio / Avanzado)");
    var eleccionCarrera = prompt("¿Por qué elegiste esta carrera?");

    if (nacionalidad === "" || nacionalidad === null) { nacionalidad = "No respondió esta pregunta"};
    if (nivelConocimientoProg === "" || nivelConocimientoProg === null) { nivelConocimientoProg = "No respondió esta pregunta"};
    if (eleccionCarrera === "" || eleccionCarrera === null) { eleccionCarrera = "No respondió esta pregunta"};
    
    var divRespuestas = document.getElementById('respuestas');

    divRespuestas.innerHTML = 
    "<p><strong>Pregunta 1: </strong>" + nacionalidad + "</p>" +
    "<p><strong>Pregunta 2: </strong>"+ nivelConocimientoProg +"</p>" +
    "<p><strong>Pregunta 3: </strong>"+ eleccionCarrera +"</p>";

}
