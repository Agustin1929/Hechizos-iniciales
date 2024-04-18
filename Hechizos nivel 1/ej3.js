const leer = require("prompt-sync")();

/**
 * Ej 3 
 * Cálculo del Peso de la Nimbus 2000
 * Preguntale a Harry el peso base de la Nimbus 2000 en kg y la cantidad de plumas de fénix utilizadas para su fabricación, luego calcula el peso total de la escoba considerando que cada pluma añade 0.1 kg
 * 
 * Por ejemplo si la cantidad de plumas usadas son 350 y el peso base es de 1.5kg entonces el total es de 36.5kg
 */


function main() {
    let cant_plumasDefenix=0
    let peso_nimbus=0
    let total=0
    console.log("cual es la cantidad de plumas de fenix");
    cant_plumasDefenix = Number (leer())
    console.log("cual es el peso de la nimbus");
    peso_nimbus = Number (leer())
    total=peso_nimbus*0.1
    console.log("la cantidad es:",cant_plumasDefenix+total)






    
}


main();