/**12. Agregar la opción de ingresar el número total de exámenes y las calificaciones correspondientes 
de cada examen para calcular el promedio del estudiante.*/

class Estudiante {
    constructor(nombre) {
      this.nombre = nombre;
      this.notas = [];
      this.porcentajes = [];
    }
  
    agregarNota(nota, porcentaje) {
      this.notas.push(nota);
      this.porcentajes.push(porcentaje);
    }
  
    calcularPromedio() {
      if (this.notas.length !== this.porcentajes.length) {
        return "Error: El número de notas no coincide con el número de porcentajes.";
      }
  
      let totalPonderado = 0;
      let totalPorcentajes = 0;
  
      for (let i = 0; i < this.notas.length; i++) {
        totalPonderado += (this.notas[i] * this.porcentajes[i]);
        totalPorcentajes += this.porcentajes[i];
      }
  
      return totalPonderado / totalPorcentajes;
    }
  }
  
  const nombreEstudiante = prompt("Ingresa el nombre del estudiante:");
  const numeroExamenes = +prompt("Ingresa el número total de exámenes:");
  
  const estudiante = new Estudiante(nombreEstudiante);
  
  for (let i = 0; i < numeroExamenes; i++) {
    const nota = +prompt(`Ingresa la nota del Examen ${i + 1}:`);
    const porcentaje = +prompt(`Ingresa el porcentaje del Examen ${i + 1}:`);
    estudiante.agregarNota(nota, porcentaje);
  }
  
  const promedioPonderado = estudiante.calcularPromedio();
  
  if (typeof promedioPonderado === "number") {
    console.log("Promedio Ponderado del Estudiante " + nombreEstudiante + ": " + promedioPonderado.toFixed(2));
  } else {
    console.log(promedioPonderado);
  }
  