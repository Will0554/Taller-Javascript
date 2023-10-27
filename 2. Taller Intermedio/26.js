/**26. Utilizar clases para gestionar la información de un grupo de estudiantes, calcular las calificaciones finales, 
y determinar si el grupo cumple con el requisito de estudiantes aprobados.*/

class Estudiante {
    constructor(nombre) {
        this.nombre = nombre;
        this.notasTareas = [];
        this.notasExamenes = [];
        this.calificacionFinal = 0;
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
        this.calificacionFinal = (ponderacionTareas * promedioTareas) + (ponderacionExamenes * promedioExamenes);
    }

    estaAprobado(umbralAprobacion) {
        return this.calificacionFinal >= umbralAprobacion;
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
            estudiante.calcularCalificacionFinal(ponderacionTareas, ponderacionExamenes);
        }
    }

    cumpleRequisitoEstudiantesAprobados(umbralAprobacion, estudiantesAprobadosRequeridos) {
        const cantidadAprobados = this.estudiantes.filter(estudiante => estudiante.estaAprobado(umbralAprobacion)).length;
        return cantidadAprobados >= estudiantesAprobadosRequeridos;
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

const ponderacionTareas = 0.4; 
const ponderacionExamenes = 0.6; 

const umbralAprobacion = 0.6; 

const estudiantesAprobadosRequeridos = 2; 

grupo.calcularCalificacionesFinales(ponderacionTareas, ponderacionExamenes);

console.log("Calificaciones Finales:");
for (const estudiante of grupo.estudiantes) {
    console.log(`${estudiante.nombre} - Calificación final: ${estudiante.calificacionFinal}`);
}

const cumpleRequisito = grupo.cumpleRequisitoEstudiantesAprobados(umbralAprobacion, estudiantesAprobadosRequeridos);

if (cumpleRequisito) {
    console.log("El grupo de estudiantes cumple con el requisito de estudiantes aprobados.");
} else {
    console.log("El grupo de estudiantes no cumple con el requisito de estudiantes aprobados.");
}
