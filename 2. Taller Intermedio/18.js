/** 18. Agregar la opción de ingresar el número total de estudiantes y las notas correspondientes de cada materia y examen, así como los porcentajes de ponderación de las notas y los exámenes para calcular la calificación final de cada estudiante. Además, 
permitir ingresar un umbral de calificación para determinar qué estudiantes aprobaron y cuáles reprobaron.*/ 

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

function ingresarNotas(estudiante) {
    const notasTareas = prompt(`Ingrese las notas de tareas del estudiante ${estudiante.nombre} separadas por comas:`).split(',').map(str => +str);
    const notasExamenes = prompt(`Ingrese las notas de exámenes del estudiante ${estudiante.nombre} separadas por comas:`).split(',').map(str => +str);

    estudiante.notasTareas = notasTareas;
    estudiante.notasExamenes = notasExamenes;
}

const numEstudiantes = +prompt("Ingrese el número total de estudiantes:");
const estudiantes = [];
const umbralAprobacion = +prompt("Ingrese el umbral de calificación para aprobar (por ejemplo, 60 para 60%):") / 100;
const ponderacionTareas = +prompt("Ingrese el porcentaje de ponderación de las tareas (por ejemplo, 40 para 40%):") / 100;
const ponderacionExamenes = +prompt("Ingrese el porcentaje de ponderación de los exámenes (por ejemplo, 60 para 60%):") / 100;

for (let i = 0; i < numEstudiantes; i++) {
    const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
    const estudiante = new Estudiante(nombre);
    ingresarNotas(estudiante);
    estudiantes.push(estudiante);
}

console.log("Resultados:");
for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];
    const calificacionFinal = estudiante.calcularCalificacionFinal(ponderacionTareas, ponderacionExamenes);
    const estado = estudiante.aprobo(umbralAprobacion) ? "Aprobado" : "Reprobado";
    console.log(`${estudiante.nombre} - Calificación final: ${calificacionFinal} - Estado: ${estado}`);
}
