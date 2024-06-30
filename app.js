function print_word(){
    //Confirmamos que el valor tomado sea el correcto
    let frase_recibida = document.getElementsByName("contenedor_texto")[0].value;
    console.log(frase_recibida);
}

function erase_content(){
    //Borramos la imagen y el titulo
    let imagen = document.getElementById('muñeco_imagen');
    let contenedorTexto = document.getElementById('segundo_texto');

    imagen.style.display = "none";
    contenedorTexto.style.display = "none";
}

function change_text(text){
    //Modificamos el parrafo por un contenido nuevo
    let parrafo = document.getElementById("parrafo_imagen");
    parrafo.textContent = text;
    parrafo.style.fontSize = "30px";
}



function cleanInput(){
    document.getElementsByName("contenedor_texto")[0].value = "";
}


function habilitarBoton() {
    var botonOculto = document.getElementById('boton_copiar');
    botonOculto.disabled = false; // Habilitar el botón cambiando el atributo disabled
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
    
    erase_content();// Limpiar contenido anterior
    change_text(new_word);// Mostrar el texto original desencriptado
    habilitarBoton();// Habilitar el boton de copia
}




function revertirCambio() {
    let frase_encriptada = document.getElementById("parrafo_imagen").textContent;
    let original_text = ''; // Variable para almacenar el texto original desencriptado

    for (let i = 0; i < frase_encriptada.length; i++) {
        let letra = frase_encriptada[i];
        
        switch (letra) {
            case 'a':
                if (frase_encriptada[i + 1] === 'i') {
                    original_text += 'a';
                    i++; // Saltar al siguiente caracter después de 'i'
                } else {
                    original_text += letra;
                }
                break;
            case 'e':
                if (frase_encriptada.substr(i, 3) === 'ene') {
                    original_text += 'e';
                    i += 2; // Saltar dos caracteres después de 'e' y 'n'
                } else {
                    original_text += letra;
                }
                break;
            case 'i':
                if (frase_encriptada.substr(i, 4) === 'imes') {
                    original_text += 'i';
                    i += 3; // Saltar tres caracteres después de 'i', 'm', 'e'
                } else {
                    original_text += letra;
                }
                break;
            case 'o':
                if (frase_encriptada.substr(i, 4) === 'ober') {
                    original_text += 'o';
                    i += 3; // Saltar tres caracteres después de 'o', 'b', 'e'
                } else {
                    original_text += letra;
                }
                break;
            case 'u':
                if (frase_encriptada.substr(i, 4) === 'ufat') {
                    original_text += 'u';
                    i += 3; // Saltar tres caracteres después de 'u', 'f', 'a'
                } else {
                    original_text += letra;
                }
                break;
            default:
                original_text += letra;
                break;
        }
    }

    erase_content(); // Limpiar contenido anterior
    change_text(original_text); // Mostrar el texto original desencriptado
    habilitarBoton(); // Habilitar el botón de copia
}



  function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).textContent);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}
