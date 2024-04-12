const leer = require("prompt-sync")();

/**
 * Ej 1 
 * Cálculo de Pociones
 * Solicita la cantidad de escarabajos de ojo de tigre y el número de raíces de mandrágora necesarios para hacer una poción, y luego calcula la cantidad total de ingredientes necesarios
 * 
 * Por ejemplo si es necesario 8 raíces de mandrágora y 5 escarabajos de ojo de tigre para hacer la poción entonces el total de ingredientes es 13
 */


function main() {
    let total = 0
    let raices_mandragora = 0
    let cant_escarabajos = 0
    console.log("cual es la cantidad de raices mandragora que se nesecitan para la pocion")
    raices_mandragora = Number(leer())
    console.log("¿y la cantidad de escarabajos cual es?")
    cant_escarabajos =  Number (leer())
   total = raices_mandragora+cant_escarabajos 
    console.log ("la cantdad de ingredientes es:")
    console.log(total);

}
main();