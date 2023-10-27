/**13. Implementar funciones para calcular la calificación final de un grupo de estudiantes, 
considerando el promedio de las notas y el promedio de los exámenes.*/

function calcularPromedioNotas(notas) {
const totalNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
return totalNotas / notas.length;
}

function calcularPromedioExamenes(examenes) {
const totalExamenes = examenes.reduce((acumulador, examen) => acumulador + examen, 0);
return totalExamenes / examenes.length;
}

function calcularCalificacionFinal(promedioNotas, promedioExamenes) {
return (promedioNotas * 0.7) + (promedioExamenes * 0.3);
}

const estudiantes = [
{ nombre: "Estudiante 1", notas: [4.5, 3.0, 3.7], examenes: [8.0, 7.5, 9.0] },
{ nombre: "Estudiante 2", notas: [2.0, 3.5, 2.9], examenes: [7.0, 6.5, 8.0] },
{ nombre: "Estudiante 3", notas: [4.0, 4.2, 4.6], examenes: [9.0, 8.5, 8.7] },
];

console.log("Calificaciones Finales:");
for (const estudiante of estudiantes) {
const promedioNotas = calcularPromedioNotas(estudiante.notas);
const promedioExamenes = calcularPromedioExamenes(estudiante.examenes);
const calificacionFinal = calcularCalificacionFinal(promedioNotas, promedioExamenes);
console.log(`${estudiante.nombre}: ${calificacionFinal.toFixed(2)}`);
}
  