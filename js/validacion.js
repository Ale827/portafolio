
function validarDatos(){
    window.event.preventDefault();
    
    if(document.form.nombre.value === ""){
        alert("Campo Nombre obligatorio");
        document.form.nombre.focus();// hace que el usuario vuelva al  error

    }else if(document.form.email.value === ""){
        alert("Campo Email obligatorio");
        document.form.email.focus();

    }else if(document.form.asunto.value === ""){
        alert("Campo Asunto obligatorio");
        document.form.asunto.focus();

    }else if(document.form.mensaje.value === ""){
        alert("Campo mensaje obligatorio");
        document.form.mensaje.focus();

    }else if(document.form.email.value.indexOf("@")==-1 || document.form.email.value.indexOf(".")==-1 ){
        alert("email es invalido");
        document.form.email.focus();

    }else if (document.form.mensaje.value === "" || document.form.mensaje.length <= 50) {
        alert("campo mensaje es obligtiorio y no debe superara los 50 caracteres ")
    }  
}
document.querySelector("form").addEventListener("submit", validarDatos);
