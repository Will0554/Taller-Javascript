/**14. Utilizar clases para gestionar la información de un grupo de estudiantes y 
calcular las calificaciones finales considerando notas y exámenes.*/

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

    calcularCalificacionFinal() {
        const promedioTareas = this.notasTareas.reduce((a, b) => a + b, 0) / this.notasTareas.length;
        const promedioExamenes = this.notasExamenes.reduce((a, b) => a + b, 0) / this.notasExamenes.length;
        const calificacionFinal = 0.4 * promedioTareas + 0.6 * promedioExamenes;
        return calificacionFinal;
    }
}

const estudiante1 = new Estudiante("Juan");
estudiante1.agregarNotaTarea(95);
estudiante1.agregarNotaExamen(85);

const estudiante2 = new Estudiante("María");
estudiante2.agregarNotaTarea(90);
estudiante2.agregarNotaExamen(88);

const calificacionFinalEstudiante1 = estudiante1.calcularCalificacionFinal();
const calificacionFinalEstudiante2 = estudiante2.calcularCalificacionFinal();

console.log(`Calificación final de ${estudiante1.nombre}: ${calificacionFinalEstudiante1}`);
console.log(`Calificación final de ${estudiante2.nombre}: ${calificacionFinalEstudiante2}`);
