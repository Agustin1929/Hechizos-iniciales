const leer = require("prompt-sync")();

/**
 * Ej 2 
 * Clase de Encantamientos
 * Para saber el total de ingredientes necesarios en la clase de hoy tenemos que saber el numero de estudiantes y libros a usar 
 * Donde podemos saber el total triplicando la cantidad de varitas por estudiante y duplicando la cantidad de libros 
 * Los estudiante tiene que traer su propia varita, los que no traigan no podran practicar los encantamientos
 * 
 * Por ejemplo si hay 7 varitas y 4 libros a usar los ingredientes necesarios son 29
 */


function main() {
    let estudiantesPresentes = 0 
    let librosAusar = 0
    let total = 0 
    let total_1 = 0
    console.log("cuantos estudiantes presentes trajeron su varita hoy?");
    estudiantesPresentes = Number (leer())
    console.log("cual es la cantidad de libros a usar?");
    librosAusar = Number (leer())
    total=estudiantesPresentes *3
    total_1 = librosAusar *2
    console.log("la cantidad es",total+total_1)
    
    
    




    
}


main();