const leer = require("prompt-sync")();

/**
 * Ej 1
 * Es crucial que los estudiantes aprendan los nombres de los hechizos correctamente para realizar magia de manera efectiva. En la clase de Encantamientos, los estudiantes deben demostrar su habilidad para recordar y lanzar los hechizos correctamente. Ayuda a simular este proceso creando un programa que solicite al usuario el nombre de un hechizo y le dé un número limitado de intentos para ingresarlo correctamente. Si el usuario ingresa el nombre del hechizo correctamente, el programa lo felicitará y finalizará. Si el usuario no logra ingresar el hechizo correctamente después de los intentos permitidos, el programa lo informará y finalizará.
 * 
 * 
 * Por ejemplo: hechizo "Wingardium leviosa", cantidad de intentos maximos 4
 * 
 * Extra: permitir que el programa acepte 3 hechizos diferentes
 */

const TURNOS_TOTALES = 4
const NOMBRE_HECHIZO_UNO = "windgardium leviosa"
const NOMBRE_HECHIZO_DOS = "avada kedavra"
const NOMBRE_HECHIZO_TRES = "patronus"
function main() {
    let nombreEchizo
    let turnos = TURNOS_TOTALES
    for (let i = 0; i < 4; i++) {
        console.log("cual es el nombre del echizo que deseas lanzar?");
        nombreEchizo = leer()
        if (nombreEchizo == NOMBRE_HECHIZO_UNO) {
            console.log("BIEN! lanzaste el echizo windgardium leviosa");
            turnos = turnos - 1
            console.log("te quedan en total \t", turnos, "turnos");
        }
        else if (nombreEchizo == NOMBRE_HECHIZO_DOS) {
            console.log("BIEN! lanzaste el echizo avada kedavra");
            turnos = turnos - 1
            console.log("te quedan en total \t", turnos, "turnos");
        }
        else if (nombreEchizo == NOMBRE_HECHIZO_TRES) {
            console.log("BIEN! lanzaste el echizo patronus");
            turnos = turnos - 1
            console.log("te quedan en total \t", turnos, "turnos");
        }
        else { console.log("hechizo incorrecto!! \t volve a intentarlo");
               turnos = turnos - 1
               console.log("te quedan en total \t", turnos, "turnos");
        }
    }




}


main();