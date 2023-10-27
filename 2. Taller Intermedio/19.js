/**19. Implementar funciones para calcular el promedio de notas y el promedio de exámenes de un grupo de 
estudiantes, así como determinar qué estudiantes aprobaron y cuáles reprobaron, según el umbral de calificación.*/

class Estudiante {
    constructor(nombre) {
        this.nombre = nombre;
        this.notasTareas = [];
        this.notasExamenes = [];
    }

    agregarNotaTarea(nota) {
        this.notasTareas.push(nota);
    }

    agregarNotaExamen(nota) {
        this.notasExamenes.push(nota);
    }

    calcularCalificacionFinal(ponderacionTareas, ponderacionExamenes) {
        if (this.notasTareas.length === 0 || this.notasExamenes.length === 0) {
            return "Falta información para calcular la calificación final.";
        }

        const promedioTareas = this.notasTareas.reduce((a, b) => a + b, 0) / this.notasTareas.length;
        const promedioExamenes = this.notasExamenes.reduce((a, b) => a + b, 0) / this.notasExamenes.length;
        const calificacionFinal = (ponderacionTareas * promedioTareas) + (ponderacionExamenes * promedioExamenes);
        return calificacionFinal;
    }
}

function calcularPromedioNotas(estudiantes) {
    const totalNotas = estudiantes.reduce((acumulador, estudiante) => acumulador + estudiante.notasTareas.reduce((a, b) => a + b, 0), 0);
    const promedioNotas = totalNotas / (estudiantes.length * estudiantes[0].notasTareas.length);
    return promedioNotas;
}

function calcularPromedioExamenes(estudiantes) {
    const totalExamenes = estudiantes.reduce((acumulador, estudiante) => acumulador + estudiante.notasExamenes.reduce((a, b) => a + b, 0), 0);
    const promedioExamenes = totalExamenes / (estudiantes.length * estudiantes[0].notasExamenes.length);
    return promedioExamenes;
}

function aprobarReprobarEstudiantes(estudiantes, umbral) {
    const aprobados = estudiantes.filter(estudiante => estudiante.calcularCalificacionFinal(ponderacionTareas, ponderacionExamenes) >= umbral);
    const reprobados = estudiantes.filter(estudiante => estudiante.calcularCalificacionFinal(ponderacionTareas, ponderacionExamenes) < umbral);
    return { aprobados, reprobados };
}

const numEstudiantes = +prompt("Ingrese el número total de estudiantes:");
const estudiantes = [];
const umbralAprobacion = +prompt("Ingrese el umbral de calificación para aprobar (por ejemplo, 60 para 60%):") / 100;
const ponderacionTareas = +prompt("Ingrese el porcentaje de ponderación de las tareas (por ejemplo, 40 para 40%):") / 100;
const ponderacionExamenes = +prompt("Ingrese el porcentaje de ponderación de los exámenes (por ejemplo, 60 para 60%):") / 100;

for (let i = 0; i < numEstudiantes; i++) {
    const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
    const estudiante = new Estudiante(nombre);
    const notasTareas = prompt(`Ingrese las notas de tareas del estudiante ${estudiante.nombre} separadas por comas:`).split(',').map(str => +str);
    const notasExamenes = prompt(`Ingrese las notas de exámenes del estudiante ${estudiante.nombre} separadas por comas:`).split(',').map(str => +str);
    estudiante.notasTareas = notasTareas;
    estudiante.notasExamenes = notasExamenes;
    estudiantes.push(estudiante);
}

console.log("Resultados:");
for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];
    const calificacionFinal = estudiante.calcularCalificacionFinal(ponderacionTareas, ponderacionExamenes);
    const estado = estudiante.aprobo(umbralAprobacion) ? "Aprobado" : "Reprobado";
    console.log(`${estudiante.nombre} - Calificación final: ${calificacionFinal} - Estado: ${estado}`);
}

const promedioNotas = calcularPromedioNotas(estudiantes);
const promedioExamenes = calcularPromedioExamenes(estudiantes);
console.log(`Promedio de notas del grupo: ${promedioNotas}`);
console.log(`Promedio de exámenes del grupo: ${promedioExamenes}`);

const { aprobados, reprobados } = aprobarReprobarEstudiantes(estudiantes, umbralAprobacion);

console.log("Estudiantes Aprobados:");
for (const estudiante of aprobados) {
    console.log(estudiante.nombre);
}

console.log("Estudiantes Reprobados:");
for (const estudiante of reprobados) {
    console.log(estudiante.nombre);
}
