let inputnombre = document.getElementById("mensajeNombre");
let inputidentificacion = document.getElementById("mensajeIdentificacion");
let inputfechaNacimiento = document.getElementById("mensajeFechaNacimiento");
let inputcorreo = document.getElementById("mensajeCorreo");
let inputdireccion = document.getElementById("mensajeDireccion");
let inputpais = document.getElementById("mensajePais");
let inputgenero = document.getElementById("mensajeGenero");
let inputcolor = document.getElementById("mensajeColor");
let inputsatisfaccion = document.getElementById("mensajeSatisfaccion");

function validarNombre(arg) {
    let nombre = arg.value;
    if (nombre === "") {
        inputnombre.textContent = "El nombre es obligatorio.";
        inputnombre.style.color = "red";
    } else {
        inputnombre.textContent = "OK";
        inputnombre.style.color = "green";
    }
}

function validarIdentificacion(arg) {
    let id= arg.value;
    if (id.length < 10 || isNaN(id)) {
        inputidentificacion.textContent = "Debe tener al menos 10 dígitos numéricos.";
        inputidentificacion.style.color = "red";
    } else {
        inputidentificacion.textContent = "Identificación válida.";
        inputidentificacion.style.color = "green";
    }
}

function validarFechaNacimiento(arg) {
    let fecha = arg.value;
    inputfechaNacimiento = document.getElementById("mensajeFechaNacimiento");
    if (fecha === "") {
        inputfechaNacimiento.textContent = "Seleccione una fecha válida.";
        inputfechaNacimiento.style.color = "red";
        return;
    }

    const fechaSeleccionada = new Date(fecha);
    const fechaMin = new Date("1980-01-01");
    const fechaMax = new Date("2007-12-31");

    if (fechaSeleccionada < fechaMin || fechaSeleccionada > fechaMax) {
        inputfechaNacimiento.textContent = "La fecha debe estar entre 1980 y 2007.";
        inputfechaNacimiento.style.color = "red";
    } else {
        inputfechaNacimiento.textContent = "Fecha válida.";
        inputfechaNacimiento.style.color = "green";
    }
}


function validarCorreo(input) {
    let correo = input.value;
    if (!correo.includes("@") || !correo.includes(".")) {
        inputcorreo.textContent = "Correo no válido.";
        inputcorreo.style.color = "red";
    } else {
        inputcorreo.textContent = "Correo correto";
        inputcorreo.style.color = "green";
    }
}

function validarGenero(arg) {
    let generoSeleccionado = arg.value;
    if (generoSeleccionado) {
        inputgenero.textContent = `Género seleccionado: ${generoSeleccionado}`;
        inputgenero.style.color = "green";
    } else {
        inputgenero.textContent = "Debe seleccionar un género.";
        inputgenero.style.color = "red";
    }
}



function validarPais(select) {
    const valor = select.value;
    
    if (valor === "") {
        inputpais.textContent = "Debe seleccionar un país.";
        inputpais.style.color = "red";
    } else {
        inputpais.textContent = `País seleccionado: ${valor}`;
        inputpais.style.color = "green";
    }
}

function validarDireccion(textarea) {
    if (textarea.value.trim() === "") {
        inputdireccion.textContent = "La dirección no puede estar vacía.";
        inputdireccion.style.color = "red";
    } else {
        inputdireccion.textContent = "De acuerdo a la dirección proporcionada, se aplicarán las normativas locales.";
        inputdireccion.style.color = "green";
    }
}

function validarColor(input) {
    let color = input.value;
    if (color) {
        inputcolor.textContent = `Color seleccionado: <span style="color:${color}">${color}</span>`;
        inputcolor.style.color = "green";
    } else {
        inputcolor.textContent = "Debe seleccionar un color.";
        inputcolor.style.color = "red";
    }
}

function validarSatisfaccion(input) {
    let satisfaccion = input.value;
    if (satisfaccion) {
        inputsatisfaccion.textContent = `Nivel seleccionado: ${satisfaccion}/5`;
        inputsatisfaccion.style.color = "green";
    } else {
        inputsatisfaccion.textContent = "Debe seleccionar un nivel de satisfacción.";
        inputsatisfaccion.style.color = "red";
    }
}

function validarTelefono(input) {
    let telefono = input.value;
    let mensaje = document.getElementById("mensajeTelefono");

    if (!/^\d{10}$/.test(telefono)) {
        mensaje.textContent = "Número de teléfono no válido.";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "Número de teléfono válido.";
        mensaje.style.color = "green";
    }
}

function validarEdad(input) {
    let edad = input.value;
    let mensaje = document.getElementById("mensajeEdad");

    if (edad < 18 || edad > 55) {
        mensaje.textContent = "Edad no válida. Debe estar entre 18 y 55 años.";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "Edad válida.";
        mensaje.style.color = "green";
    }
}


//la funcion debe tener if y else si todo esta correcto
//la funcion debe tener un mensaje de exito o error

function validarFormulario(event) {
    event.preventDefault(); // Evita el envío del formulario para validar los campos

    validarNombre(document.getElementById("nombre"));
    validarIdentificacion(document.getElementById("identificacion"));
    validarFechaNacimiento(document.getElementById("fechaNacimiento"));
    validarCorreo(document.getElementById("correo"));
    validarDireccion(document.getElementById("direccion"));
    validarPais(document.querySelector('input[name="pais"]:checked'));
    validarGenero(document.querySelector('input[name="genero"]:checked'));
    validarColor(document.getElementById("color"));
    validarSatisfaccion(document.getElementById("satisfaccion"));
    validarTelefono(document.getElementById("telefono"));
    validarEdad(document.getElementById("edad"));

    let mensajeFormulario = document.getElementById("mensajeFormulario");
    mensajeFormulario.textContent = "Formulario validado correctamente.";
    mensajeFormulario.style.color = "green";


}
