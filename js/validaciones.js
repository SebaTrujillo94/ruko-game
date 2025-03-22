$(document).ready(function () {
    $("#registroForm").submit(function (event) {
        event.preventDefault(); // Evita el envío por defecto

        let valido = true;

        // Obtener valores de los campos
        let nombre = $("#nombre").val().trim();
        let usuario = $("#usuario").val().trim();
        let correo = $("#correo").val().trim();
        let fechaNacimiento = $("#fechaNacimiento").val();
        let clave = $("#clave").val();
        let repetirClave = $("#repetirClave").val();

        // Expresión regular para validar el correo
        let correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // Expresión regular para validar la contraseña (mínimo 6 caracteres, una mayúscula y un número)
        let claveRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

        // Validar los campos
        function validarCampo(id, condicion) {
            if (condicion) {
                $(id).removeClass("is-invalid").addClass("is-valid");
            } else {
                $(id).addClass("is-invalid");
                valido = false;
            }
        }

        validarCampo("#nombre", nombre !== "");
        validarCampo("#usuario", usuario !== "");
        validarCampo("#correo", correoRegex.test(correo));
        validarCampo("#fechaNacimiento", fechaNacimiento !== "");
        validarCampo("#clave", claveRegex.test(clave));
        validarCampo("#repetirClave", clave === repetirClave);

        // Si es válido, mostrar mensaje de éxito
        if (valido) {
            let mensajeExito = document.createElement("div");
            mensajeExito.innerHTML = "¡Registro exitoso! Bienvenido a Ruko Game.";
            mensajeExito.style.position = "fixed";
            mensajeExito.style.top = "20px";
            mensajeExito.style.left = "50%";
            mensajeExito.style.transform = "translateX(-50%)";
            mensajeExito.style.backgroundColor = "#222";
            mensajeExito.style.color = "#ff8800";
            mensajeExito.style.padding = "15px 25px";
            mensajeExito.style.border = "2px solid #ff8800";
            mensajeExito.style.borderRadius = "10px";
            mensajeExito.style.fontSize = "18px";
            mensajeExito.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.5)";
            mensajeExito.style.zIndex = "9999";
        
            document.body.appendChild(mensajeExito);
        
            console.log("Formulario enviado correctamente.");

            // Limpiar el formulario después de mostrar el mensaje
            $("#registroForm")[0].reset();
            $(".is-valid").removeClass("is-valid");
        
            // Redirigir automáticamente después de 3 segundos
            setTimeout(function() {
                window.location.replace("index.html");
            }, 3000);
        }
    });
});