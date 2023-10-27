/**24. Agregar la opción de ingresar el número total de estudiantes y las notas correspondientes de cada materia y examen, 
así como los porcentajes de ponderación de las notas y los exámenes para calcular la calificación final de cada estudiante. Además, permitir ingresar un 
número de estudiantes aprobados para determinar si el grupo de estudiantes cumple con ese requisito. */

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

class GrupoEstudiantes {
    constructor() {
        this.estudiantes = [];
    }

    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }

    calcularCalificacionesFinales(ponderacionTareas, ponderacionExamenes) {
        for (const estudiante of this.estudiantes) {
            const calificacionFinal = estudiante.calcularCalificacionFinal(ponderacionTareas, ponderacionExamenes);
            estudiante.calificacionFinal = calificacionFinal;
        }
    }

    cantidadEstudiantesAprobados() {
        return this.estudiantes.filter(estudiante => estudiante.calificacionFinal >= umbralAprobacion).length;
    }
}

const numEstudiantes = +prompt("Ingrese el número total de estudiantes:");

const estudiantes = [];
const grupo = new GrupoEstudiantes();

for (let i = 0; i < numEstudiantes; i++) {
    const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
    const estudiante = new Estudiante(nombre);
    const notasTareas = prompt(`Ingrese las notas de tareas del estudiante ${estudiante.nombre} separadas por comas:`).split(',').map(str => +str);
    const notasExamenes = prompt(`Ingrese las notas de exámenes del estudiante ${estudiante.nombre} separadas por comas:`).split(',').map(str => +str);
    estudiante.notasTareas = notasTareas;
    estudiante.notasExamenes = notasExamenes;
    grupo.agregarEstudiante(estudiante);
}

const ponderacionTareas = +prompt("Ingrese el porcentaje de ponderación de las tareas (por ejemplo, 40 para 40%):") / 100;
const ponderacionExamenes = +prompt("Ingrese el porcentaje de ponderación de los exámenes (por ejemplo, 60 para 60%):") / 100;
const umbralAprobacion = +prompt("Ingrese el umbral de calificación para aprobar (por ejemplo, 60 para 60%):") / 100;
const estudiantesAprobadosRequeridos = +prompt("Ingrese el número de estudiantes aprobados requeridos:");

grupo.calcularCalificacionesFinales(ponderacionTareas, ponderacionExamenes);

console.log("Calificaciones Finales:");
for (const estudiante of grupo.estudiantes) {
    console.log(`${estudiante.nombre} - Calificación final: ${estudiante.calificacionFinal}`);
}

const cantidadAprobados = grupo.cantidadEstudiantesAprobados();

console.log(`La cantidad de estudiantes aprobados es: ${cantidadAprobados}`);

if (cantidadAprobados >= estudiantesAprobadosRequeridos) {
    console.log("El grupo de estudiantes cumple con el requisito de estudiantes aprobados.");
} else {
    console.log("El grupo de estudiantes no cumple con el requisito de estudiantes aprobados.");
}
