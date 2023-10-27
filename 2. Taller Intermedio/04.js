/**4. Implementar funciones para realizar la misma funcionalidad del punto 3, 
pero calculando las notas de tres estudiantes.*/

function calcularPromedio(calificacion1, calificacion2, calificacion3) {
return (calificacion1 + calificacion2 + calificacion3) / 3;
}

function determinarAprobacion(promedio) {
if (promedio >= 3.5) {
    return "Aprobó";
} else {
    return "Reprobó";
}
}

function mostrarResultado(estudiante, promedio, resultado) {
console.log(estudiante + " " + resultado + " con un promedio de " + promedio.toFixed(2));
}

const estudiante1 = "Estudiante 1";
const calificacion1_1 = 4.5;
const calificacion2_1 = 3.0;
const calificacion3_1 = 3.7;

const estudiante2 = "Estudiante 2";
const calificacion1_2 = 2.0;
const calificacion2_2 = 3.5;
const calificacion3_2 = 2.9;

const estudiante3 = "Estudiante 3";
const calificacion1_3 = 4.0;
const calificacion2_3 = 4.2;
const calificacion3_3 = 4.6;

const promedio1 = calcularPromedio(calificacion1_1, calificacion2_1, calificacion3_1);
const resultado1 = determinarAprobacion(promedio1);
mostrarResultado(estudiante1, promedio1, resultado1);

const promedio2 = calcularPromedio(calificacion1_2, calificacion2_2, calificacion3_2);
const resultado2 = determinarAprobacion(promedio2);
mostrarResultado(estudiante2, promedio2, resultado2);

const promedio3 = calcularPromedio(calificacion1_3, calificacion2_3, calificacion3_3);
const resultado3 = determinarAprobacion(promedio3);
mostrarResultado(estudiante3, promedio3, resultado3);
  