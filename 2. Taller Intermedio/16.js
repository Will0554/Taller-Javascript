/**16. Implementar una función para determinar el estudiante con la calificación más alta y
 el estudiante con la calificación más baja.*/

 // ... (Código anterior) ...

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
