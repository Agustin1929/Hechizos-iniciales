const leer = require("prompt-sync")();

/**
 * Ej 5
 * Permiso para Visitar Hogsmeade:
 * Pide al estudiante su edad y si tiene permiso de sus padres, y verifica si puede visitar el pueblo de Hogsmeade.
 * Solo a partir de los 13 años, y con permiso de los padres, o 17 años tendra permitido realizar la actividad
 * Por ejemplo si tiene 12 años y con permiso de los padres no le sera permitido.
 *  si tiene 14 y no cuenta con permiso de los padres no le sera permitido.
 *  en otro caso si tiene 18 puede realizar la actividad
 */


function main() {

    let edadEstudiante = 0
    let permisoDepadres = 0
    console.log("cual es tu edad?");
    edadEstudiante = leer()


    if (edadEstudiante >= 17) {
        console.log("sos mayor de edad,podes pasar");

    }
    else if ((edadEstudiante >= 13) && (edadEstudiante < 17)) {

        console.log("contas con el permiso de tus padres? si - no");
        permisoDepadres = leer()
        if (permisoDepadres == "si") {

            console.log("contas con la suficente edad y el permiso de tus padres,adelante podes pasar");
        }

        else  {
            console.log("si no contas con el permiso no podes pasar");
    
    
        }

    }





}


main();