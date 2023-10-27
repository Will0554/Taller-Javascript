/**23. Utilizar clases para gestionar la información de un grupo de estudiantes, calcular las calificaciones finales, 
y determinar la cantidad de estudiantes dentro de un rango de calificaciones.*/

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

    estaDentroDelRango(rangoMinimo, rangoMaximo) {
        const calificacion = this.calcularCalificacionFinal(ponderacionTareas, ponderacionExamenes);
        return calificacion >= rangoMinimo && calificacion <= rangoMaximo;
    }
}

class GrupoEstudiantes {
    constructor() {
        this.estudiantes = [];
    }

    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }

    cantidadEstudiantesEnRango(rangoMinimo, rangoMaximo) {
        return this.estudiantes.filter(estudiante => estudiante.estaDentroDelRango(rangoMinimo, rangoMaximo)).length;
    }
}

const grupo = new GrupoEstudiantes();

const estudiante1 = new Estudiante("Juan");
estudiante1.agregarNotaTarea(95);
estudiante1.agregarNotaExamen(85);

const estudiante2 = new Estudiante("María");
estudiante2.agregarNotaTarea(90);
estudiante2.agregarNotaExamen(88);

grupo.agregarEstudiante(estudiante1);
grupo.agregarEstudiante(estudiante2);

const ponderacionTareas = 0.4; // Ponderación de tareas (40%)
