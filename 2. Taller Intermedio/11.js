/**11. Utilizar clases para gestionar la información de un grupo de estudiantes y 
calcular las calificaciones finales de cada estudiante.*/

class Estudiante {
    constructor(nombre, notas, porcentajes) {
      this.nombre = nombre;
      this.notas = notas;
      this.porcentajes = porcentajes;
    }
  
    calcularCalificacionFinal() {
      if (this.notas.length !== this.porcentajes.length) {
        return "Error: El número de notas no coincide con el número de porcentajes.";
      }
  
      let calificacionFinal = 0;
  
      for (let i = 0; i < this.notas.length; i++) {
        calificacionFinal += (this.notas[i] * this.porcentajes[i] / 100);
      }
  
      return calificacionFinal;
    }
  }
  
  class GrupoEstudiantes {
    constructor() {
      this.estudiantes = [];
    }
  
    agregarEstudiante(estudiante) {
      this.estudiantes.push(estudiante);
    }
  
    calcularCalificacionesFinales() {
      return this.estudiantes.map((estudiante) => {
        return {
          nombre: estudiante.nombre,
          calificacionFinal: estudiante.calcularCalificacionFinal(),
        };
      });
    }
  }
  
  const estudiante1 = new Estudiante("Estudiante 1", [4.5, 3.0, 3.7, 2.0], [30, 20, 25, 25]);
  const estudiante2 = new Estudiante("Estudiante 2", [3.5, 4.0, 4.2, 3.8], [20, 30, 25, 25]);
  const estudiante3 = new Estudiante("Estudiante 3", [4.0, 3.5, 4.6, 3.9], [25, 20, 30, 25]);
  
  const grupoEstudiantes = new GrupoEstudiantes();
  grupoEstudiantes.agregarEstudiante(estudiante1);
  grupoEstudiantes.agregarEstudiante(estudiante2);
  grupoEstudiantes.agregarEstudiante(estudiante3);
  
  const calificacionesFinales = grupoEstudiantes.calcularCalificacionesFinales();
  console.log("Calificaciones Finales:");
  for (const estudiante of calificacionesFinales) {
    if (typeof estudiante.calificacionFinal === "number") {
      console.log(`${estudiante.nombre}: ${estudiante.calificacionFinal.toFixed(2)}`);
    } else {
      console.log(estudiante.calificacionFinal); 
    }
  }
  