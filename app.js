function print_word(){
    //Confirmamos que el valor tomado sea el correcto
    let frase_recibida = document.getElementsByName("contenedor_texto")[0].value;
    console.log(frase_recibida);
}

function erase_content(){
    //Borramos la imagen y el titulo
    let imagen = document.getElementById('muñeco_imagen');
    let contenedorTexto = document.getElementById('contenedor_imagen_texto');

    imagen.style.display = "none";
    contenedorTexto.style.display = "none";
}

function change_text(text){
    //Modificamos el parrafo por un contenido nuevo
    let parrafo = document.getElementById("parrafo_imagen");
    parrafo.textContent = text;
}

function change_word(){
    // Obtenemos el valor del input cada vez que se llama la función
    let frase_recibida = document.getElementsByName("contenedor_texto")[0].value;
    let new_word = ''; // Inicializamos new_word como variante vacía

   //for loop para revisar cada letra
    for(let i = 0; i < frase_recibida.length; i++){
        let letra = frase_recibida[i];
        console.log(letra);

        // Usamos switch(aprendido en python) para realizar las transformaciones de las letras
        switch(letra){
            case "a":
                new_word += "ai";
                break;
            case "e":
                new_word += "ene";
                break;
            case "i":
                new_word += "imes";
                break;
            case "o":
                new_word += "ober";
                break;
            case "u":
                new_word += "ufat";
                break;
            default:
                new_word += letra;
                break;
        }
    }

    erase_content();
    change_text(new_word)
}