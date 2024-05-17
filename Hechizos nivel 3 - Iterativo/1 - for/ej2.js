const leer = require("prompt-sync")();

/**
 * Ej 2
 * Los Dementores son criaturas oscuras que se alimentan de la felicidad de las personas, dejándolas con recuerdos dolorosos y desesperación. Para protegerse de los Dementores, los estudiantes de Hogwarts aprenden el hechizo Patronus, que repele a estas criaturas y los aleja con recuerdos felices. En este ejercicio, simularemos un encuentro con un Dementor en un mini juego donde un estudiante debe lanzar el hechizo Patronus correctamente para repeler al Dementor y proteger su felicidad. Dependiendo de la cantidad de vida del estudiante, se necesitará ingresar el hechizo Patronus varias veces para vencer al Dementor. Si el estudiante no ingresa el hechizo correctamente, perderá turnos y el Dementor consumirá su felicidad y recuerdos felices, acercándose más a la derrota del estudiante. En otro caso si el estudiante ingresa bien los hechizos y logra vencer al dementor entonces se mostrar un mensaje de victoria
 * 
 * Vida maxima del dementor: 1000
 * Vida maxima del estudiante: 350
 * Daño por turno perdido del dementor al estudiante: 75
 * Daño por hechizo acertado del estudiante contra dementor: 267
 * Turnos totales: 5 
 */
const VIDA_MAX_DEMENTOR = 1000
const VIDA_ESTUDIANTE = 350 
const DAÑO_PERDIDO_TURNO = 75
const DAÑO_ACERTADO = 267
const NOMBRE_HECHIZO = "patronus"
function main() {
    let vidaDemen = VIDA_MAX_DEMENTOR
    let vidaMaxestudiante = VIDA_ESTUDIANTE
    let dañoPerdido = DAÑO_PERDIDO_TURNO
    let dañoEchizo = DAÑO_ACERTADO
    let echizo = NOMBRE_HECHIZO
    let echizoIngresado 
    
    while (vidaDemen >0 && vidaMaxestudiante >0   ) {
        console.log("\n la vida actual del dementor es de",vidaDemen,"\n");
        console.log("\n  tu vida es de",vidaMaxestudiante,"\n");
    console.log("cual es el nombre del echizo que deseas lanzar:");
    echizoIngresado = leer()
        if (echizoIngresado == echizo ) {
            console.log("\n lanzaste el echizo patronus\n");
            console.log("\n le hiciste al dementor un daño de",dañoEchizo,"\n");
            vidaDemen = vidaDemen-dañoEchizo
        }
        else if (echizoIngresado != echizo ) {
            console.log("\nechizo incorrecto\n");
            vidaMaxestudiante = vidaMaxestudiante - dañoPerdido
        }
    }
        if  (vidaDemen<=0) {
          console.log("victoria");
        }
        else{ 
              console.log("derrota");
        }
}
    

main();