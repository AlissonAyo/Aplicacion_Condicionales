let inputnombre = document.getElementById("mensajeNombre");
let inputidentificacion = document.getElementById("mensajeIdentificacion");
let inputfechaNacimiento = document.getElementById("mensajeFechaNacimiento");
let inputcorreo = document.getElementById("mensajeCorreo");
let inputdireccion = document.getElementById("mensajeDireccion");
let inputpais = document.getElementById("mensajePais");
let inputgenero = document.getElementById("mensajeGenero");
let inputcolor = document.getElementById("mensajeColor");
let inputsatisfaccion = document.getElementById("mensajeSatisfaccion");
let inputpassword = document.getElementById("mensajePassword");
let inputhora = document.getElementById("mensajeHora");
let inputarchivo = document.getElementById("mensajeArchivo");
let inputweb = document.getElementById("mensajeWeb");
let inputpreferencias = document.getElementById("mensajePreferencias");
let inputciudad = document.getElementById("mensajeCiudad");

function validarNombre(arg) {
    if (arg.value.trim() === "") {
        inputnombre.textContent = "El nombre es obligatorio.";
        inputnombre.style.color = "red";
    } else {
        inputnombre.textContent = "OK";
        inputnombre.style.color = "green";
    }
}

function validarPassword(arg) {
    if (arg.value.length < 6) {
        inputpassword.textContent = "La contraseña debe tener al menos 6 caracteres.";
        inputpassword.style.color = "red";
    } else {
        inputpassword.textContent = "Contraseña válida.";
        inputpassword.style.color = "green";
    }
}

function validarIdentificacion(arg) {
    if (arg.value.length < 10) {
        inputidentificacion.textContent = "Debe tener al menos 10 dígitos.";
        inputidentificacion.style.color = "red";
    } else {
        inputidentificacion.textContent = "Identificación válida.";
        inputidentificacion.style.color = "green";
    }
}

function validarFechaNacimiento(arg) {
    if (arg.value === "") {
        inputfechaNacimiento.textContent = "Seleccione una fecha.";
        inputfechaNacimiento.style.color = "red";
    } else {
        inputfechaNacimiento.textContent = "Fecha válida.";
        inputfechaNacimiento.style.color = "green";
    }
}

function validarHora(arg) {
    if (arg.value === "") {
        inputhora.textContent = "Ingrese una hora.";
        inputhora.style.color = "red";
    } else {
        inputhora.textContent = "Hora válida.";
        inputhora.style.color = "green";
    }
}

function validarArchivo(arg) {
    if (!arg.value) {
        inputarchivo.textContent = "Debe seleccionar un archivo.";
        inputarchivo.style.color = "red";
    } else {
        inputarchivo.textContent = "Archivo seleccionado.";
        inputarchivo.style.color = "green";
    }
}

function validarCorreo(arg) {
    if (arg.value.includes("@") && arg.value.includes(".")) {
        inputcorreo.textContent = "Correo válido.";
        inputcorreo.style.color = "green";
    } else {
        inputcorreo.textContent = "Correo no válido.";
        inputcorreo.style.color = "red";
    }
}

function validarEdad(arg) {
    let edad = parseInt(arg.value);
    let mensaje = document.getElementById("mensajeEdad");
    if (isNaN(edad) || edad < 18 || edad > 55) {
        mensaje.textContent = "Edad no válida. Debe estar entre 18 y 55 años.";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "Edad válida.";
        mensaje.style.color = "green";
    }
}

function validarTelefono(arg) {
    let mensaje = document.getElementById("mensajeTelefono");
    if (/^\d{10}$/.test(arg.value)) {
        mensaje.textContent = "Teléfono válido.";
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "Teléfono no válido.";
        mensaje.style.color = "red";
    }
}

function validarWeb(arg) {
    if (arg.value.startsWith("http")) {
        inputweb.textContent = "URL válida.";
        inputweb.style.color = "green";
    } else {
        inputweb.textContent = "URL no válida.";
        inputweb.style.color = "red";
    }
}

function validarGenero(arg) {
    if (arg && arg.checked) {
        inputgenero.textContent = "Género seleccionado.";
        inputgenero.style.color = "green";
    } else {
        inputgenero.textContent = "Debe seleccionar un género.";
        inputgenero.style.color = "red";
    }
}

function validarPais(arg) {
    if (arg && arg.checked) {
        inputpais.textContent = "País seleccionado.";
        inputpais.style.color = "green";
    } else {
        inputpais.textContent = "Debe seleccionar un país.";
        inputpais.style.color = "red";
    }
}

function validarPreferencias() {
    let checks = document.querySelectorAll('input[name="preferencias"]:checked');
    if (checks.length > 0) {
        inputpreferencias.textContent = "Preferencias seleccionadas.";
        inputpreferencias.style.color = "green";
    } else {
        inputpreferencias.textContent = "Seleccione al menos una preferencia.";
        inputpreferencias.style.color = "red";
    }
}

function validarCiudad(arg) {
    if (arg.value === "") {
        inputciudad.textContent = "Seleccione una ciudad.";
        inputciudad.style.color = "red";
    } else {
        inputciudad.textContent = "Ciudad seleccionada.";
        inputciudad.style.color = "green";
    }
}

function validarDireccion(arg) {
    if (arg.value.trim() === "") {
        inputdireccion.textContent = "La dirección no puede estar vacía.";
        inputdireccion.style.color = "red";
    } else {
        inputdireccion.textContent = "Dirección válida.";
        inputdireccion.style.color = "green";
    }
}

function validarColor(arg) {
    if (arg.value) {
        inputcolor.textContent = "Color seleccionado.";
        inputcolor.style.color = "green";
    } else {
        inputcolor.textContent = "Seleccione un color.";
        inputcolor.style.color = "red";
    }
}

function validarSatisfaccion(arg) {
    if (arg.value) {
        inputsatisfaccion.textContent = "Nivel seleccionado: " + arg.value;
        inputsatisfaccion.style.color = "green";
    } else {
        inputsatisfaccion.textContent = "Seleccione un nivel.";
        inputsatisfaccion.style.color = "red";
    }
}

function validarFormulario(event) {
    event.preventDefault();

    validarNombre(document.getElementById("nombre"));
    validarPassword(document.getElementById("password"));
    validarIdentificacion(document.getElementById("identificacion"));
    validarFechaNacimiento(document.getElementById("fechaNacimiento"));
    validarHora(document.getElementById("horaRegistro"));
    validarArchivo(document.getElementById("archivo"));
    validarCorreo(document.getElementById("correo"));
    validarEdad(document.getElementById("edad"));
    validarTelefono(document.getElementById("telefono"));
    validarWeb(document.getElementById("web"));
    validarGenero(document.querySelector('input[name="genero"]:checked'));
    validarPais(document.querySelector('input[name="pais"]:checked'));
    validarPreferencias();
    validarCiudad(document.getElementById("ciudad"));
    validarDireccion(document.getElementById("direccion"));
    validarColor(document.getElementById("color"));
    validarSatisfaccion(document.getElementById("satisfaccion"));

    let mensajeFormulario = document.getElementById("mensajeFormulario");
    let errores = document.querySelectorAll('p[style*="red"]');
    if (errores.length === 0) {
        mensajeFormulario.textContent = "Formulario validado correctamente.";
        mensajeFormulario.style.color = "green";
    } else {
        mensajeFormulario.textContent = "Por favor, corrija los errores en el formulario.";
        mensajeFormulario.style.color = "red";
    }
}

function validarBoton(event) {
    let mensajeFormulario = document.getElementById("mensajeFormulario");
    if (true) {
        mensajeFormulario.textContent = "Botón Validar presionado.";
        mensajeFormulario.style.color = "blue";
    } else {
        mensajeFormulario.textContent = "";
    }
}

function validarReset(event) {
    // Limpia todos los mensajes de validación
    let mensajes = document.querySelectorAll('p[id^="mensaje"]');
    mensajes.forEach(function(p) {
        p.textContent = "";
        p.style.color = "";
    });
    // Limpia el mensaje general del formulario
    let mensajeFormulario = document.getElementById("mensajeFormulario");
    if (mensajeFormulario) {
        mensajeFormulario.textContent = "Formulario reiniciado.";
        mensajeFormulario.style.color = "orange";
    }
}

function botonMouseOver(event) {
    event.target.style.backgroundColor = "#e0e0e0";
}
function botonMouseOut(event) {
    event.target.style.backgroundColor = "";
}
function botonMouseUp(event) {
    event.target.style.transform = "scale(1)";
}
function botonMouseDown(event) {
    event.target.style.transform = "scale(0.95)";
}
function botonFocus(event) {
    event.target.style.outline = "2px solid #007bff";
}
function submitMouseOver(event) {
    event.target.style.backgroundColor = "#d1ffd1";
}
