const leer = require("prompt-sync")();

/**
 * Ej 2
 * Elección de Varita Mágica:
 * Pide al estudiante el núcleo de una varita mágica y muestra un mensaje personalizado dependiendo del tipo de núcleo.
 * Fénix - ¡Excelente elección! Las varitas con núcleo de fénix son poderosas y leales.
 * Unicornio - Las varitas con núcleo de unicornio son conocidas por su pureza y fuerza.
 * Dragón - ¡Cuidado! Las varitas con núcleo de dragón son poderosas pero pueden ser temperamentales.
 * Cualquier otro tipo de nucleo - No reconocemos ese tipo de núcleo. Por favor, ingrese un núcleo válido.
 */


function main() {
    let nucleoDevarita
    console.log("cual es el nucleo de tu varita magica?");
    nucleoDevarita = leer()

    if (nucleoDevarita == "fenix") {

        console.log("bien,¡Excelente elección! las varitas que cuentan con el nucleo fenix son poderosas y leales");

    }
    else if (nucleoDevarita == "unicornio") {

        console.log("bien,las varitas con nucleo de unicornio son conocidas por su pureza y fuerza");

    }
    else if (nucleoDevarita == "dragon") {

        console.log("¡Cuidado! Las varitas con núcleo de dragón son poderosas pero pueden ser temperamentales.")
    }

    else console.log("no reconocemos ese nucleo. por favor, ingrese un nucleo valido");


}




main();