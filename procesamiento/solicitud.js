import solicitud  from "../utilidades/preguntas-respuestas.js";
import  valoresRandom  from "../utilidades/valores-random.js";

import escrituraDatos from "./escritura-datos.js";
import encriptarDatos from "./encriptar-datos.js";
import lecturaDatos from "./lectura-datos.js";


process.stdin.on('data', async(data) => {
    solicitud.respuesta.push(data.toString().trim());

    if(solicitud.respuesta.length === solicitud.pregunta.length) {
        const nombre = solicitud.respuesta[0].replace(/\s+/g,"") || valoresRandom.nombreDeUsuarioAleatorio;
        const clave = await encriptarDatos(valoresRandom.claveDeUsuarioAleatoria);
        await escrituraDatos(`${nombre} ${clave}\n`)
        const cuentasRegistradas = await lecturaDatos();
        console.table(cuentasRegistradas);
        return process.exit();
    }
    solicitarDatos(solicitud.respuesta.length);
})

const solicitarDatos = (posicion) => process.stdout.write(solicitud.pregunta[posicion]);

export default solicitarDatos;



































/*
const solicitud.preguntas = ['¿Cuál es tu nombre?', '¿Cuál es tu edad?', '¿Cuál es tu color favorito?'];
const solicitud.respuestas = [];

//PROCESS STDIN STDOUT

const solicitud.pregunta = (consulta) => {
    process.stdout.write(solicitud.preguntas[consulta]);
}

process.stdin.on('data', function (data) {
    solicitud.respuestas.push(data.toString().trim());
    
    if (solicitud.respuestas.length < solicitud.preguntas.length) {
        solicitud.pregunta(solicitud.respuestas.length)
    } else {
        let nombre = solicitud.respuestas[0].toString();
        let edad = solicitud.respuestas[1].toString();
        let colorFavorito = solicitud.respuestas[2].toString();
        process.stdout.write(`Nombre: ${nombre} Edad: ${edad} Color Favorito: ${colorFavorito}`);
    }
})

solicitud.pregunta(0);
*/
