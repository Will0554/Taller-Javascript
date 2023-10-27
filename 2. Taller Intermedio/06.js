/**6. Agregar la opción de ingresar el número total de materias y las notas correspondientes de un solo estudiante.
 Determinar qué materias aprobó y cuáles reprobó.*/
 
class Estudiante {
constructor(nombre, numeroMaterias) {
    this.nombre = nombre;
    this.numeroMaterias = numeroMaterias;
    this.materias = [];
}

agregarMateria(nombreMateria, calificacion) {
    this.materias.push({ nombre: nombreMateria, calificacion });
}

mostrarResultados() {
    console.log("Resultados para el estudiante " + this.nombre + ":");
    for (const materia of this.materias) {
    const resultado = materia.calificacion >= 3.5 ? "Aprobó" : "Reprobó";
    console.log(`Materia: ${materia.nombre}, Calificación: ${materia.calificacion.toFixed(2)}, Resultado: ${resultado}`);
    }
}
}

const nombreEstudiante = prompt("Ingresa el nombre del estudiante:");
const numeroMaterias = +prompt("Ingresa el número de materias:");

const estudiante = new Estudiante(nombreEstudiante, numeroMaterias);

for (let i = 0; i < numeroMaterias; i++) {
const nombreMateria = prompt(`Ingresa el nombre de la materia ${i + 1}:`);
const calificacion = +prompt(`Ingresa la calificación de la materia ${nombreMateria}:`);
estudiante.agregarMateria(nombreMateria, calificacion);
}

estudiante.mostrarResultados();

