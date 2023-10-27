/**9. Agregar la opción de ingresar el número total de estudiantes y 
 * las notas correspondientes de cada materia para calcular el promedio por materia. */

class Estudiante {
constructor(nombre, notas) {
    this.nombre = nombre;
    this.notas = notas;
}
}

class GrupoEstudiantes {
constructor() {
    this.estudiantes = [];
}

agregarEstudiante(estudiante) {
    this.estudiantes.push(estudiante);
}

calcularPromedioPorMateria() {
    const promediosPorMateria = {};

    for (const estudiante of this.estudiantes) {
    for (let i = 0; i < estudiante.notas.length; i++) {
        const materia = `Materia ${i + 1}`;
        const nota = estudiante.notas[i];

        if (!promediosPorMateria[materia]) {
        promediosPorMateria[materia] = { total: 0, cantidad: 0 };
        }

        promediosByMateria[materia].total += nota;
        promediosByMateria[materia].cantidad++;
    }
    }

    for (const materia in promediosByMateria) {
    promediosByMateria[materia].promedio = promediosByMateria[materia].total / promediosByMateria[materia].cantidad;
    }

    return promediosByMateria;
}
}

const numeroEstudiantes = +prompt("Ingresa el número total de estudiantes:");
const numeroMaterias = +prompt("Ingresa el número total de materias:");

const grupoEstudiantes = new GrupoEstudiantes();

for (let i = 0; i < numeroEstudiantes; i++) {
const nombreEstudiante = prompt(`Ingresa el nombre del estudiante ${i + 1}:`);
const notasEstudiante = [];
for (let j = 0; j < numeroMaterias; j++) {
    const nota = +prompt(`Ingresa la nota del estudiante ${nombreEstudiante} en la Materia ${j + 1}:`);
    notasEstudiante.push(nota);
}

const estudiante = new Estudiante(nombreEstudiante, notasEstudiante);
grupoEstudiantes.agregarEstudiante(estudiante);
}

const promediosPorMateria = grupoEstudiantes.calcularPromedioPorMateria();
console.log("Promedios por materia:");
for (const materia in promediosPorMateria) {
console.log(`${materia}: ${promediosPorMateria[materia].promedio.toFixed(2)}`);
}
