const leer = require("prompt-sync")();

/**
 * Ej 3 
 * Examen de Herbología:
 * Pide al estudiante el nombre de la planta que encontro y determina si es apta para el examen de Herbología.
 * Si es Mandrágora o Valeriana entonces son aptas
 * Si son Bubotuber o Whomping Willow es necesario informar que no es posible debido a lo peligrosas que son
 * Cualquier otro tipo de planta no sera aceptada
 * Por ejemplo si el estudiante quiere traer un Whomping Willow no podra hacer el examen.
 * en otro caso si trae una Valeriana se le otorgara el permiso
 */


function main() {
    let nombreDeplanta = "plantaEncontrada"
    console.log("que tipo de planta encontraste?");
    nombreDeplanta = leer();

    if ((nombreDeplanta == "mandragora") || (nombreDeplanta == "valeriana")) {

        console.log("tu planta es apta para el examen");
    }

    else if ((nombreDeplanta == "bobotuber") || (nombreDeplanta == "whomping willow")) {

        console.log("tu planta no es apta para el examen,es peligrosa");

    } else {console.log("tu tipo de planta no es aceptada,debe ser una de las indicadas en la consigna");}
    


}



main();