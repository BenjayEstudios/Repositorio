function enviarFormulario() {
    var v_apellido = document.getElementById('apellido').value;
    var v_nombre = document.getElementById('name').value;
    var v_email = document.getElementById('email').value;
    var v_telefono = document.getElementById('telefono').value;
    var v_direccion = document.getElementById('direccion').value;
    var v_comuna = document.getElementById('comuna').value
    var v_pass = document.getElementById('pass').value;

    // NOMBRE //
    if (v_nombre.trim() === '') {
        console.log("El nombre es obligatorio");
        alert("El nombre es obligatorio");
    }
    else if (v_nombre.length < 5 || v_nombre.length > 20) {
        console.log("El nombre debe tener entre 5 y 20 caracteres");
        alert("El nombre debe tener entre 5 y 20 caracteres");
    }

    // APELLIDO //
    else if(v_apellido.trim() === '') {
        console.log("El apellido es obligatorio");
        alert("El apellido es obligatorio");
    }
    else if (v_apellido.length < 5 || v_apellido.length > 20) {
        console.log("El apellido debe tener entre 5 y 20 caracteres");
        alert("El apellido debe tener entre 5 y 20 caracteres");
    }

    // EMAIL //
    else if(v_email.trim() === '') {
        console.log("El email es obligatorio");
        alert("El email es obligatorio");
    }
    else if(v_email.indexOf('@') === -1){
        console.log("Falta el @ en el email");
        alert("Falta el @ en el email");
    }
    else if(v_email.indexOf('.') === -1){
        console.log("Falta el . en el email");
        alert("Falta el . en el email");
    }

    // TELEFONO //
    else if(v_telefono.trim() === '') {
        console.log("El telefono es obligatorio");
        alert("El telefono es obligatorio");
    }

    // DIRECCION //
    else if(v_direccion.trim() === '') {
        console.log("La direccion es obligatoria");
        alert("La direccion es obligatoria");
    }

    // CONTRASEÑA //
    else if(v_pass.trim() === '') {
        console.log("La contraseña es obligatoria");
        alert("La contraseña es obligatoria");
    }

    // COMUNA //
    else if(v_comuna === 'Seleccione...') {
        console.log("Debe seleccionar una comuna");
        alert("Debe seleccionar una comuna");
    }
    
    
    else {
        console.log("Formulario enviado");
        window.location.href = '../Home/index.html';
    }
    return false;
}
