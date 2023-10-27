/**3. Ingresar el nombre de un alumno y tres notas por materia (en total tres materias) 
 y determinar qué materias aprobó y cuáles reprobó. */

const calificacion1 = +prompt("Ingresa la primera calificación:");
const calificacion2 = +prompt("Ingresa la segunda calificación:");
const calificacion3 = +prompt("Ingresa la tercera calificación:");

const promedio = (calificacion1 + calificacion2 + calificacion3) / 3;

if (promedio >= 3.5) {
  console.log("El alumno aprobó la materia con un promedio de " + promedio.toFixed(2));
} else {
  console.log("El alumno reprobó la materia con un promedio de " + promedio.toFixed(2));
}
