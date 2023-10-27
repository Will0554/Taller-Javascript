/**25. Implementar una función para determinar si el grupo de estudiantes cumple con el requisito de tener 
el número especificado de estudiantes aprobados.*/

function cumpleRequisitoEstudiantesAprobados(estudiantes, umbralAprobacion, estudiantesAprobadosRequeridos) {
    const cantidadAprobados = estudiantes.filter(estudiante => estudiante.calificacionFinal >= umbralAprobacion).length;
    return cantidadAprobados >= estudiantesAprobadosRequeridos;
}

const umbralAprobacion = 0.6; 
const estudiantesAprobadosRequeridos = 3; 

const estudiantes = [];

const cumpleRequisito = cumpleRequisitoEstudiantesAprobados(estudiantes, umbralAprobacion, estudiantesAprobadosRequeridos);

if (cumpleRequisito) {
    console.log("El grupo de estudiantes cumple con el requisito de estudiantes aprobados.");
} else {
    console.log("El grupo de estudiantes no cumple con el requisito de estudiantes aprobados.");
}
