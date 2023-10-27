/**17. Utilizar clases para gestionar la información de un grupo de estudiantes y calcular las calificaciones finales, a
sí como determinar el estudiante con la calificación más alta y más baja.*/

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

function encontrarEstudianteConMejorCalificacion(estudiantes) {
    let mejorEstudiante = estudiantes[0];
    let mejorCalificacion = mejorEstudiante.calcularCalificacionFinal(ponderacionTareas, ponderacionExamenes);

    for (let i = 1; i < estudiantes.length; i++) {
        const estudiante = estudiantes[i];
        const calificacion = estudiante.calcularCalificacionFinal(ponderacionTareas, ponderacionExamenes);

        if (calificacion > mejorCalificacion) {
            mejorEstudiante = estudiante;
            mejorCalificacion = calificacion;
        }
    }

    return mejorEstudiante;
}

function encontrarEstudianteConPeorCalificacion(estudiantes) {
    let peorEstudiante = estudiantes[0];
    let peorCalificacion = peorEstudiante.calcularCalificacionFinal(ponderacionTareas, ponderacionExamenes);

    for (let i = 1; i < estudiantes.length; i++) {
        const estudiante = estudiantes[i];
        const calificacion = estudiante.calcularCalificacionFinal(ponderacionTareas, ponderacionExamenes);

        if (calificacion < peorCalificacion) {
            peorEstudiante = estudiante;
            peorCalificacion = calificacion;
        }
    }

    return peorEstudiante;
}

const estudiante1 = new Estudiante("Juan");
estudiante1.agregarNotaTarea(95);
estudiante1.agregarNotaExamen(85);

const estudiante2 = new Estudiante("María");
estudiante2.agregarNotaTarea(90);
estudiante2.agregarNotaExamen(88);


const ponderacionTareas = 0.4; // Ponderación de tareas (40%)
const ponderacionExamenes = 0.6; // Ponderación de exámenes (60%)

const estudiantes = [estudiante1, estudiante2];

for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];
    const calificacionFinal = estudiante.calcularCalificacionFinal(ponderacionTareas, ponderacionExamenes);
    console.log(`Calificación final de ${estudiante.nombre}: ${calificacionFinal}`);
}

const mejorEstudiante = encontrarEstudianteConMejorCalificacion(estudiantes);
const peorEstudiante = encontrarEstudianteConPeorCalificacion(estudiantes);

console.log(`Estudiante con la calificación más alta: ${mejorEstudiante.nombre}`);
console.log(`Calificación más alta: ${mejorEstudiante.calcularCalificacionFinal(ponderacionTareas, ponderacionExamenes)}`);

console.log(`Estudiante con la calificación más baja: ${peorEstudiante.nombre}`);
console.log(`Calificación más baja: ${peorEstudiante.calcularCalificacionFinal(ponderacionTareas, ponderacionExamenes)}`);
