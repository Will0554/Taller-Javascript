/** 20. Utilizar clases para gestionar la información de un grupo de estudiantes, 
 calcular las calificaciones finales, promedios y aprobar/reprobar estudiantes, según el umbral de calificación. */

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

    aprobo(umbral) {
        return this.calcularCalificacionFinal(ponderacionTareas, ponderacionExamenes) >= umbral;
    }
}

class GrupoEstudiantes {
    constructor() {
        this.estudiantes = [];
    }

    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }

    calcularPromedioNotas() {
        const totalNotas = this.estudiantes.reduce((acumulador, estudiante) =>
            acumulador + estudiante.notasTareas.reduce((a, b) => a + b, 0), 0);
        const promedioNotas = totalNotas / (this.estudiantes.length * this.estudiantes[0].notasTareas.length);
        return promedioNotas;
    }

    calcularPromedioExamenes() {
        const totalExamenes = this.estudiantes.reduce((acumulador, estudiante) =>
            acumulador + estudiante.notasExamenes.reduce((a, b) => a + b, 0), 0);
        const promedioExamenes = totalExamenes / (this.estudiantes.length * this.estudiantes[0].notasExamenes.length);
        return promedioExamenes;
    }

    obtenerEstudiantesAprobados(umbral) {
        return this.estudiantes.filter(estudiante => estudiante.aprobo(umbral));
    }

    obtenerEstudiantesReprobados(umbral) {
        return this.estudiantes.filter(estudiante => !estudiante.aprobo(umbral));
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

console.log("Resultados:");
console.log("Calificaciones Finales:");
for (const estudiante of grupo.estudiantes) {
    const calificacionFinal = estudiante.calcularCalificacionFinal(ponderacionTareas, ponderacionExamenes);
    const estado = estudiante.aprobo(umbralAprobacion) ? "Aprobado" : "Reprobado";
    console.log(`${estudiante.nombre} - Calificación final: ${calificacionFinal} - Estado: ${estado}`);
}

console.log(`Promedio de notas del grupo: ${grupo.calcularPromedioNotas()}`);
console.log(`Promedio de exámenes del grupo: ${grupo.calcularPromedioExamenes()}`);

const estudiantesAprobados = grupo.obtenerEstudiantesAprobados(umbralAprobacion);
const estudiantesReprobados = grupo.obtenerEstudiantesReprobados(umbralAprobacion);

console.log("Estudiantes Aprobados:");
for (const estudiante of estudiantesAprobados) {
    console.log(estudiante.nombre);
}

console.log("Estudiantes Reprobados:");
for (const estudiante of estudiantesReprobados) {
    console.log(estudiante.nombre);
}
