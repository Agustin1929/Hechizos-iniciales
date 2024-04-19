const leer = require("prompt-sync")();

/**
 * Ej 4 
 * Cálculo del Hechizo Patronus:
 * Solicita al usuario la edad del mago y la cantidad de días de práctica del hechizo Patronus.
 *  luego calcula la potencia del hechizo.
 *  La potencia se obtiene duplicando la edad sumado a la mitad de todos los días de practica realizados para dominar el Patronus
 * 
 * Por ejemplo si la edad es 25 y los días de practica son 158 entonces su potencia con el hechizo patronus es de 129
 */


function main() {
    let edadMago = 0
    let cantDiasdepractica = 0
    let potenciaDehechizo = 0 
    console.log("cual es la edad del mago?:");
    edadMago = Number (leer())
    console.log("cuales son la cantidad de dias de pracrtica");
    cantDiasdepractica = Number (leer())
    potenciaDehechizo=edadMago*2
    console.log("la potencia total del hechizo es:",potenciaDehechizo+cantDiasdepractica/2);

}


main();