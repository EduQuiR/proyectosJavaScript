//Establecemos una variable con el tiempo del juego
let tiempoRestante = 30;

// Se declara la variable que contiene el intervalo
let intervalo;

// Variable para iniciar el contador
let contador = 0

// Listado de preguntas
const listaDePreguntas = [
    '¿Cuál es la danza tradicional más famosa de Paraguay?',
    '¿Qué río importante divide Paraguay en dos regiones distintas?',
    '¿Quién fue el héroe máximo de la independencia de Paraguay?',
    '¿Qué significado tiene el diseño de la bandera de Paraguay?',
    '¿Cuál es el plato típico paraguayo que se suele comer en los días fríos?'
];

// Lista vacia de las respuestas
let respuestasUsuarios = []

// funcion para llamar a las fuciones de empezar el juego y mostrar las preguntas
function empezarYMostrar(){
    iniciarConteo();
    mostrarPreguntas()
}

// Funcion para llamar a las funciones para mostrar las preguntas y capturar las respuestas
function preguntasYRespuestas(idRespuesta){
    capturarRespuestas(idRespuesta);
    mostrarPreguntas();
}
// Creamos la funcion flecha para el conteo regresivo
const actualizarConteo = () => {

    tiempoRestante--;// Restamos a la variable con el tiempo establecido
    
    // Capturamos la informacion del HTML(H1) y modificamos con el contenido con el resultado del tiempo
    document.getElementById('countDown').textContent = '00:' + String(tiempoRestante).padStart(2,"0") ;
    
    // Establecemos la condicion donde indicamos que al llegar a 0 salta la alerta y termina el juego
    if (tiempoRestante === 0) {
        clearInterval(intervalo); // Con esto hacemos que al llegar a 00 se detenga el conteo
        alert('Perdiste!!! El tiempo ha terminado')
    }
}

// Se establece la funcion que inicia el conteo con el intervalo.
function iniciarConteo(){ 
    intervalo = setInterval(actualizarConteo, 1000);
}

// Funcion para mostrar las prguntas
function mostrarPreguntas(){
    
    // Capturamos y modificamos el valor del <h3> para mostrar las preguntas
    document.getElementById('listaPreguntas').textContent = listaDePreguntas[contador];
    document.getElementById('respuesta1').value = '';

    // Sumamos el contador de a uno para mostrar las preguntas
    contador ++ ;
}

// Funcion para capturar las respuestas de las preguntas
function capturarRespuestas(idRespuesta){

    // Obtenemos el valor del input
    let respuesta = document.getElementById(idRespuesta).value;

    // Cargamos la respuesta a lista vacia
    respuestasUsuarios.push(respuesta)
    console.log(respuesta)
    console.log(respuestasUsuarios)
}


// Funcion para finalizar el juego
function terminarJuego(){
    clearInterval(intervalo);

    // Caputaramos el valor del <p> con el ID 
    const preguntasElemento = document.getElementById('preguntasDelJuego');

    // Usamos el for con entries para obtener el indice y la pregunta
    for (let [indice, pregunta] of listaDePreguntas.entries()){

        // Se busca la respuesta del array con el indice, en caso de no tener devuelve el texto 
        let respuesta = respuestasUsuarios[indice] || 'Sin respuesta';

        // Creamos el contenedor de las preguntas y respuestas, con esto hacemos que se vean una prengunta y una respuesta
        let contenedorPreguntasRespuestas = document.createElement('div')

        // Crear y agregar los elementos para mostrar las preguntas
        let preguntaParrafo = document.createElement('p');
        preguntaParrafo.textContent = `Pregunta ${indice + 1} : ${pregunta} `;
        contenedorPreguntasRespuestas.append(preguntaParrafo)

        // Creamos y agregamos los elementos para mostrar las respuestas
        let respuestaParrafo = document.createElement('p');
        respuestaParrafo.textContent = `respuesta ${indice + 1} : ${respuesta} `;
        contenedorPreguntasRespuestas.append(respuestaParrafo)

        // Agregar contenedor al elemento principal
        preguntasElemento.append(contenedorPreguntasRespuestas);
    }
}