function enviarFormulario() {
    var v_apellido = document.getElementById('apellido').value;
    var v_nombre = document.getElementById('name').value;
    var v_email = document.getElementById('email').value;
    var v_telefono = document.getElementById('telefono').value;
    var v_direccion = document.getElementById('direccion').value;
    var v_pass = document.getElementById('pass').value;

    // NOMBRE //
    if (v_nombre.trim() === '') {
        console.log("El nombre es obligatorio");
    }
    else if (v_nombre.length < 5 || v_nombre.length > 20) {
        console.log("El nombre debe tener entre 5 y 20 caracteres");
    }


    // APELLIDO //
    else if(v_apellido.trim() === '') {
        console.log("El apellido es obligatorio");
    }
    else if (v_apellido.length < 5 || v_apellido.length > 20) {
        console.log("El apellido debe tener entre 5 y 20 caracteres");
    }

    // EMAIL //
    else if(v_email.trim() === '') {
        console.log("El email es obligatorio");
    }
    else if(v_email.indexOf('@') === -1){
        console.log("Falta el @")
    }
    else if(v_email.indexOf('.') === -1){
        console.log("Falta el .")
    }
    // TELEFONO //
    else if(v_telefono.trim() === '') {
        console.log("El telefono es obligatorio");
    }

    // DIRECCION //
    else if(v_direccion.trim() === '') {
        console.log("La direccion es obligatorio");
    }
    
    // CONTRASEÑA //
    else if(v_pass.trim() === '') {
        console.log("La contraseña es obligatoria");
    }
    
    
    
    
    else {
        console.log("Formulario enviado");
    }
    return false;
}
