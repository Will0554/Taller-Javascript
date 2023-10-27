/**8. Utilizar clases para gestionar la información de un grupo de estudiantes 
y calcular los promedios de notas de cada estudiante.*/

class Estudiante {
constructor(nombre, notas) {
    this.nombre = nombre;
    this.notas = notas;
}

calcularPromedio() {
    const totalNotas = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return totalNotas / this.notas.length;
}
}

class GrupoEstudiantes {
constructor() {
    this.estudiantes = [];
}

agregarEstudiante(estudiante) {
    this.estudiantes.push(estudiante);
}

calcularPromedios() {
    return this.estudiantes.map((estudiante) => {
    return {
        nombre: estudiante.nombre,
        promedio: estudiante.calcularPromedio(),
    };
    });
}
}

const estudiante1 = new Estudiante("Estudiante 1", [4.5, 3.0, 3.7]);
const estudiante2 = new Estudiante("Estudiante 2", [2.0, 3.5, 2.9]);
const estudiante3 = new Estudiante("Estudiante 3", [4.0, 4.2, 4.6]);

const grupoEstudiantes = new GrupoEstudiantes();
grupoEstudiantes.agregarEstudiante(estudiante1);
grupoEstudiantes.agregarEstudiante(estudiante2);
grupoEstudiantes.agregarEstudiante(estudiante3);

const promedios = grupoEstudiantes.calcularPromedios();
console.log("Promedios de notas del grupo:");
for (const estudiante of promedios) {
console.log(`${estudiante.nombre}: ${estudiante.promedio.toFixed(2)}`);
}
  