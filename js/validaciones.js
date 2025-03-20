$(document).ready(function () {
    $("#registroForm").submit(function (event) {
        event.preventDefault(); // Evita que el formulario se envíe por defecto

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

        // Validaciones de los campos
        if (nombre === "") {
            $("#nombre").addClass("is-invalid");
            valido = false;
        } else {
            $("#nombre").removeClass("is-invalid").addClass("is-valid");
        }

        if (usuario === "") {
            $("#usuario").addClass("is-invalid");
            valido = false;
        } else {
            $("#usuario").removeClass("is-invalid").addClass("is-valid");
        }

        if (!correoRegex.test(correo)) {
            $("#correo").addClass("is-invalid");
            valido = false;
        } else {
            $("#correo").removeClass("is-invalid").addClass("is-valid");
        }

        if (fechaNacimiento === "") {
            $("#fechaNacimiento").addClass("is-invalid");
            valido = false;
        } else {
            $("#fechaNacimiento").removeClass("is-invalid").addClass("is-valid");
        }

        if (!claveRegex.test(clave)) {
            $("#clave").addClass("is-invalid");
            valido = false;
        } else {
            $("#clave").removeClass("is-invalid").addClass("is-valid");
        }

        if (clave !== repetirClave) {
            $("#repetirClave").addClass("is-invalid");
            valido = false;
        } else {
            $("#repetirClave").removeClass("is-invalid").addClass("is-valid");
        }

        // Si todo está válido, mostrar mensaje de éxito
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

            // Ocultar el mensaje después de 3 segundos
            setTimeout(() => {
                mensajeExito.remove();
            }, 3000);

            console.log("Formulario enviado correctamente.");
            
            // Limpiar el formulario después de mostrar el mensaje
            $("#registroForm")[0].reset();
            $(".is-valid").removeClass("is-valid");
        }
    });
});