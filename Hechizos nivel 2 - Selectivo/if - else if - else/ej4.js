const leer = require("prompt-sync")();

/**
 * Ej 4 
 * Verificación de Varita Mágica:
 * Pide al usuario el nivel de lealtad y astucia de una varita mágica y verifica si es adecuada para su uso.
 * A partir de 70 nivel de lealtad o 80 en astucia la varita es apta
 * Por ejemplo si la astucia es 90 y la lealtad es 40 entonces la varita es apta.
 *  en otro caso si la astucia es 30 y la lealtad es 60 la varita no es apta
 */


function main() {
    let nivelDelealtad = 0
    let nivelDeastucia = 0
    console.log("cual es el nivel actual de lealtad en tu varita?");
    nivelDelealtad = leer()
    console.log("y cual es el nivel de astucia");
    nivelDeastucia = leer ()

    if ((nivelDelealtad >=70) || (nivelDeastucia >=80))  {

        console.log("tu varita es apta para darle uso");
        
    }
    else {console.log("tu varita no es apta para usar"); }


    
}


main();