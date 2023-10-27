/**2. Ingresar tres calificaciones, calcular el promedio y determinar si el alumno aprobó la materia 
 (3.5 es la nota mínima para pasar). */

const calificacion1 = +prompt("Ingresa la primera calificación:");
const calificacion2 = +prompt("Ingresa la segunda calificación:");
const calificacion3 = +prompt("Ingresa la tercera calificación:");

const promedio = (calificacion1 + calificacion2 + calificacion3) / 3;

if (promedio >= 3.5) {
  console.log("El alumno aprobó la materia con un promedio de " + promedio.toFixed(2));
} else {
  console.log("El alumno reprobó la materia con un promedio de " + promedio.toFixed(2));
}
