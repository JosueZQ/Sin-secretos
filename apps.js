let numeroSecreto = 0;
let numeroMaximo = 10
let intentos = 0;
let numeroMaximoDeIntentos = 3
let numerosSorteados = [];

function verificarIntento() {
    //De esta forma también se puede hacer
    //let numeroDeUsuario = document.querySelector("input").value;
    let numeroDeUsuario = parseInt(document.getElementById("numeroUsuario").value);
        //El "===" sirve para validar tanto la cantidad como el tipo de dato es decir si ambos son strings o numbers
   
        if (numeroDeUsuario === numeroSecreto) {
            asignarTextoElemento ("p", `¡¡¡Felicidades!!! Haz acertado el número secreto en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
            document.getElementById("reiniciar").removeAttribute("disabled");
        } else {
            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento ("p", "Casi, el número secreto es menor");
            } else {asignarTextoElemento ("p", "Casi, el número secreto es mayor");
            }
             LimpiarCaja("#numeroUsuario");
            
            if(intentos == numeroMaximoDeIntentos){
                asignarTextoElemento("p", `¡¡¡Casi lo logras!!! haz alcanzado el número máximo de ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
                document.querySelector("#reiniciar").removeAttribute("disabled");
                document.querySelector("#numeroUsuario").setAttribute("disabled", "true");
            }
            intentos++;
        }
return;
}

function LimpiarCaja(ubicación, ) {
    let vaciarCaja = document.querySelector(ubicación).value = "";
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generadorDeNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //console.log(numeroGenerado);
    //console.log(numerosSorteados);

    if(numerosSorteados.length == numeroMaximo/2){

        numerosSorteados.splice(0, numerosSorteados.length);
        return generadorDeNumeroSecreto();

    }else{

        if (numerosSorteados.includes(numeroGenerado)){
        return generadorDeNumeroSecreto();
    } else {
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

function condicionesIniciales() {
    asignarTextoElemento ("h1", "Juego del Número secreto");
    asignarTextoElemento ("p", `Introduce un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generadorDeNumeroSecreto();
    intentos = 1;
    //console.log(numeroSecreto)
    //console.log(intentos)
}

function reiniciarJuego(){
    //Limpiar la caja
    LimpiarCaja("#numeroUsuario");
    //indicar los mensajes iniciales
    //Generar el número secreto
    //Reiniciar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón "nuevo intento"
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
    //Habilitar la caja de texto
    document.querySelector("#numeroUsuario").removeAttribute("disabled");
}

condicionesIniciales();