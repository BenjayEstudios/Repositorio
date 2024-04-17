function recuperarPassword(){

    var v_email = document.getElementById("email")
    console.log("Hola")

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

    else {
        console.log("Formulario enviado");
        alert("Correo de recuperacion de contraseña ha sido enviado al correo electronico")
    }
    return false;
}