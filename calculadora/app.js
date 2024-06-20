// Creamos una variable global para almacenar los resultados para luego redondearlos
let resultadoARedondear = 0;

// Creamos la funcion para mostrar los resultados
function mostrarResultado(resultados){
    document.getElementById('resultado').textContent = resultados;
    resultadoARedondear = resultados;
}

// Creamos las funciones para la calculadora
function sumar(numero1, numero2){
    numero1 = +(document.getElementById(numero1).value);
    numero2 = +(document.getElementById(numero2).value);
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    let resultado = numero1 + numero2;
    mostrarResultado(resultado)
}

function resta(numero1, numero2){
    numero1 = +(document.getElementById(numero1).value);
    numero2 = +(document.getElementById(numero2).value);
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    let resultado = numero1 - numero2;
        mostrarResultado(resultado)
}

function multiplicacion(numero1, numero2){
    numero1 = +(document.getElementById(numero1).value);
    numero2 = +(document.getElementById(numero2).value);
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    let resultado = numero1 * numero2;
        mostrarResultado(resultado)
}

function division(numero1, numero2){
    numero1 = +(document.getElementById(numero1).value);
    numero2 = +(document.getElementById(numero2).value);
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    let resultado = numero1 / numero2;
        mostrarResultado(resultado)
}


function potencia(numero1, numero2){
    numero1 = +(document.getElementById(numero1).value);
    numero2 = +(document.getElementById(numero2).value);
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    let resultado = Math.pow(numero1, numero2);
        mostrarResultado(resultado)
}

function raizCuadrada(numero2){
    numero2 = +(document.getElementById(numero2).value);
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    let resultado = Math.sqrt(numero2);
        mostrarResultado(resultado)
}

function valorAbsoluto(numero2){
    numero2 = +(document.getElementById(numero2).value);
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    let resultado = Math.abs(numero2);
        mostrarResultado(resultado)
}

function generarNroRandom(numero1, numero2){
    numero1 = +(document.getElementById(numero1).value);
    numero2 = +(document.getElementById(numero2).value);
    numero2 = numero2 + 1;
    resultado = Math.floor(Math.random() * (numero2 - numero1) + numero1);
    mostrarResultado(resultado)
}

function redondear(){
    let resultado = Math.round(resultadoARedondear);
    mostrarResultado(resultado)
}

function floor(){
    let resultado = Math.floor(resultadoARedondear);
    mostrarResultado(resultado)

}

function redondearParaArriba(){
    let resultado = Math.ceil(resultadoARedondear);
    mostrarResultado(resultado)

}




