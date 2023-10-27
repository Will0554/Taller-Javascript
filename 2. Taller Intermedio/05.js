/**5. Implementar el concepto de clases para gestionar la información de los estudiantes y 
calcular las notas de los tres estudiantes.*/

class Estudiante {
constructor(nombre, calificacion1, calificacion2, calificacion3) {
    this.nombre = nombre;
    this.calificacion1 = calificacion1;
    this.calificacion2 = calificacion2;
    this.calificacion3 = calificacion3;
}

calcularPromedio() {
    return (this.calificacion1 + this.calificacion2 + this.calificacion3) / 3;
}

determinarAprobacion() {
    const promedio = this.calcularPromedio();
    if (promedio >= 3.5) {
    return "Aprobó";
    } else {
    return "Reprobó";
    }
}

mostrarResultado() {
    const resultado = this.determinarAprobacion();
    console.log(this.nombre + " " + resultado + " con un promedio de " + this.calcularPromedio().toFixed(2));
}
}

const estudiante1 = new Estudiante("Estudiante 1", 4.5, 3.0, 3.7);
const estudiante2 = new Estudiante("Estudiante 2", 2.0, 3.5, 2.9);
const estudiante3 = new Estudiante("Estudiante 3", 4.0, 4.2, 4.6);

estudiante1.mostrarResultado();
estudiante2.mostrarResultado();
estudiante3.mostrarResultado();
