let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];

let numeroMinimo = 1;
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento); 
/*existen variables globales y locales. Las globales funcionan en todo el código,
mientras que las locales en unaa parte, en este caso la variable elementoHTML es
local ya que solo es válida dentro de la función.
*/

    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    //Guardando el valor del elemento en la variable numeroUsuario
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value); //no olvidar verificar tipo de dato, y si llega a ser string usar una función de conversión (en este caso a entero)
    
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`¡Adivinaste el número en ${intentos} ${(intentos==1) ? 'intento' : 'intentos'} :D!`);
        document.getElementById('reiniciar').removeAttribute('disabled'); //Remover un atributo
    } else {
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#numeroUsuario').value = ''; //Limpiar un texto
    return;
}

function generarNumeroSecreto(min,max) {
    let numeroGenerado = Math.floor(Math.random()*(max-min+1)+min);

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == (numeroMaximo-numeroMinimo+1)){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles')
    }
    else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(numeroMinimo,numeroMaximo);
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    
}

function condicionesIniciales(){
    //Mensaje de indicar número
    asignarTextoElemento('h1','Juego del número secreto'); //Haciendo uso de la función asignarTextoElemento
    asignarTextoElemento('p',`Indica un número del ${numeroMinimo} al ${numeroMaximo}`);
    //inicializar input
    limpiarCaja()
    //nuevo número secreto
    numeroSecreto = generarNumeroSecreto(numeroMinimo,numeroMaximo);
    //inicializar contador
    intentos=1;
    //desactivar botón 'nuevo juego'
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    return;
}

condicionesIniciales();