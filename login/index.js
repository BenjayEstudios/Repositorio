function enviarFormulario() {
    var v_email = document.getElementById('email').value;
    var v_pass = document.getElementById('pass').value;

    // EMAIL //
    if(v_email.trim() === '') {
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
    else if(v_email !== 'ADMIN@GMAIL.COM'){
        console.log("Email incorrecto");
        alert("Email incorrecto");
    }

    // CONTRASEÑA //
    else if(v_pass.trim() === '') {
        console.log("La contraseña es obligatoria");
        alert("La contraseña es obligatoria");
    }
    else if(v_pass !== 'ADMIN'){
        console.log("Contraseña incorrecta");
        alert("Contraseña incorrecta");
    }
    
    else {
        console.log("Formulario enviado");
        window.location.href = '../Home/index.html';
    }
    return false;
}