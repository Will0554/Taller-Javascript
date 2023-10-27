/**1. Ingresar una calificación y determinar si el alumno aprobó o reprobó la materia 
 (3.5 es la nota mínima para pasar). */

const calificacion = prompt("Ingresa la calificación del alumno:");

if (calificacion >= "3.5") {
  console.log("El alumno aprobó la materia.");
} else {
  console.log("El alumno reprobó la materia.");
}
