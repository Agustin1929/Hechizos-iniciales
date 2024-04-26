const leer = require("prompt-sync")();

/**
 * Ej 3
 * Permitir a los estudiantes lanzar hechizos mágicos utilizando un código numérico de 4 dígitos.

Instrucciones:

El programa solicitará al usuario que ingrese un código numérico de 4 dígitos.
Basado en el código ingresado, el programa determinará qué hechizo lanzar.
Utiliza la estructura de control switch para asociar cada código con un hechizo específico.
Si el código ingresado coincide con alguno de los códigos asignados, el programa mostrará el nombre del hechizo correspondiente.
Si el código no coincide con ninguno de los códigos asignados, el programa mostrará un mensaje indicando que el código es incorrecto.
El programa debe asegurarse de que el código ingresado sea un número entero de 4 dígitos.
Hechizos Disponibles:

Expecto Patronum
Wingardium Leviosa
Expelliarmus
Avada Kedavra
 */
const NUMERO_DEFINIDO_POR_USUARIO = 0
const CODIGO_SECRETO_1 = 2004
const CODIGO_SECRETO_2 = 1234
const CODIGO_SECRETO_3 = 5678
const CODIGO_SECRETO_4 = 2024

function main() {

    let codigoArecibir
    console.log("cual es el codigo que queres ingresar?:");
    codigoArecibir = leer()

    if (codigoArecibir == CODIGO_SECRETO_1) {

        console.log("ingresaste el codigo del echizo \t expecto patronum");
    }

    else if (codigoArecibir == CODIGO_SECRETO_2) {

        console.log("ingresaste el codigo del echizo \t Wingardium Leviosa");

    }

    else if (codigoArecibir == CODIGO_SECRETO_3) {

        console.log("ingresaste el codigo del hechizo \t Expelliarmus");
        
    }
    
    else if (codigoArecibir == CODIGO_SECRETO_4) {

        console.log("ingresaste el codigo del hechizo \t Avada Kedavra");
        
    }

     else console.log("tu codigo ingresado es incorrecto")

}


main();