/**7. Implementar funciones para calcular el promedio de notas de un grupo de estudiantes,
 dados sus nombres y notas por materia.*/

function calcularPromedio(notas) {
const totalNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
return totalNotas / notas.length;
}

function calcularPromedioGrupo(estudiantes) {
const promedios = estudiantes.map((estudiante) => {
    return {
    nombre: estudiante.nombre,
    promedio: calcularPromedio(estudiante.notas),
    };
});
return promedios;
}

const estudiantes = [
{ nombre: "Estudiante 1", notas: [4.5, 3.0, 3.7] },
{ nombre: "Estudiante 2", notas: [2.0, 3.5, 2.9] },
{ nombre: "Estudiante 3", notas: [4.0, 4.2, 4.6] },
];

const promediosGrupo = calcularPromedioGrupo(estudiantes);

console.log("Promedios de notas del grupo:");
for (const estudiante of promediosGrupo) {
console.log(`${estudiante.nombre}: ${estudiante.promedio.toFixed(2)}`);
}
  