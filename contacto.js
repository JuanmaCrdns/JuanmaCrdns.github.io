(function(){

    var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('btn');

    var validarNombre = function(e){
        if (formulario.nombre.value == 0){
            alert("Completa el campo Nombre");
            e.preventDefault();
        }
    };

    var validarApellido = function(e){
        if (formulario.apellido.value == 0){
            alert("Completa el campo Apellido");
            e.preventDefault();
        }
    };

    var validarEmail = function(e){
        if (formulario.email.value == 0){
            alert("Completa el campo Email");
            e.preventDefault();
        }
    };

    var validarTelefono = function(e){
        if (formulario.telefono.value == 0){
            alert("Completa el campo Telefono");
            e.preventDefault();
        }
    };
    
    var validarInteres = function(e){
        if (formulario.interes[0].checked == true || 
            formulario.interes[1].checked == true ||
            formulario.interes[2].checked == true){
        } else{
            alert("Seleccione un Producto de Interes");
            e.preventDefault();
        }
    };

    var validarMensaje = function(e){
        if (formulario.mensaje.value == 0){
            alert("Completa el campo Mensaje");
            e.preventDefault();
        }
    };

    var validar = function(e){
        validarNombre(e);
        validarApellido(e);
        validarEmail(e);
        validarTelefono(e);
        validarInteres(e);
        validarMensaje(e);
    };
    formulario.addEventListener("submit", validar);
}())