function revisarOpciones() {
    let opcion1 = document.querySelector("#opcion1").checked;
    let opcion2 = document.querySelector("#opcion2").checked;

    if (opcion1 == true && opcion2 == true) {
        document.querySelector("#resultado").innerHTML = 
            "Opciones seleccionadas correctamente";
    } else if (opcion1 == true) {
        document.querySelector("#resultado").innerHTML = 
            "Solo la opcion 1 esta seleccionada";
    } else if (opcion2 == true) {
        document.querySelector("#resultado").innerHTML = 
            "Solo la opcion 2 esta seleccionada";
    } else {
        document.querySelector("#resultado").innerHTML = 
            "No se selecciono ninguna opcion";
    }

    
    if (opcion1 || opcion2) {
        document.querySelector("#btn-enviar").disabled = false;
    } else {
        document.querySelector("#btn-enviar").disabled = true;
    }
}