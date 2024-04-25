const leer = require("prompt-sync")();

/**
 * Ej 1
 * Clasificación de Pociones:
 * Solicita al estudiante el nombre de una poción y muestra su nivel de dificultad de acuerdo a su complejidad.
 * 
 * Pociones conocidas: 
 * Felix Felicis - es extremadamente compleja y peligrosa.
 * Polvo de Flu - es compleja pero útil en la red de transportación.
 * Poción Multijugos - es complicada pero muy útil para transformaciones temporales.
 * Cualquier otro tipo de pocion indicar que: No tenemos información sobre esa poción en nuestros registros.
 * 
 */


function main() {
    let nombreDepocion
    console.log("cual es el nombre de tu pocion?");
    nombreDepocion = leer()

    if (nombreDepocion == "felix felicis") {

        console.log("tu pocion es extremadamente compleja y peligrosa");

    }

    else if (nombreDepocion == "polvo de flu") {

        console.log("tu pocion es compleja pero util en la red de transportacion");
    }
    else if (nombreDepocion == "pocion multijugos") {

        console.log("es una pocion complicada pero muy util para transforamaciones temporales");
    }

    else console.log("no tenemos informacion sobre esa pocion en nuestros registros")
}


main();