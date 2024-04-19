const leer = require("prompt-sync")();

/**
 * Ej 2 
 * Elección de Casa en Hogwarts:
 * Solicita al estudiante su puntuación en un examen y determina a qué casa de Hogwarts pertenecería.
 * Gryffindor - a partir de 90 puntos
 * Hufflepuff - a partir de 70 puntos
 * Ravenclaw - a partir de 50 puntos
 * Slytherin - menos de 50 puntos
 * Por ejemplo si el estudiante saco 100 puntos entonces pertenece a Gryffindor.
 *  o si sacara 30 entonces pertenece a Slytherin
 */


function main() {
    let calificacionFinalexamen
    console.log("cual fue tu calificacion en el examen");
    calificacionFinalexamen = Number(leer())

    if (calificacionFinalexamen >= 90) {
        console.log("ingresaste a la casa gryffindor");

    }

    else if (calificacionFinalexamen >= 70) {

        console.log("ingresaste a la casa hufflepuff");



    }

    else if (calificacionFinalexamen >= 50) {

        console.log("ingresaste a la casa Ravenclaw");

    }

    else if (calificacionFinalexamen <= 50) {

        console.log("ingresaste a la casa Slytherin");

    }


}




main();