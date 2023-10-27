/**22. Implementar una función para determinar la cantidad de estudiantes que se encuentran dentro del rango 
de calificaciones especificado.*/

function cantidadEstudiantesEnRango(estudiantes, rangoMinimo, rangoMaximo) {
    let contador = 0;

    for (let i = 0; i < estudiantes.length; i++) {
        const estudiante = estudiantes[i];
        if (estudiante.estaDentroDelRango(rangoMinimo, rangoMaximo)) {
            contador++;
        }
    }

    return contador;
}

const estudiantes = [];
const rangoMinimo = 60; // Ejemplo, 60 puntos
const rangoMaximo = 90; // Ejemplo, 90 puntos

const cantidadEnRango = cantidadEstudiantesEnRango(estudiantes, rangoMinimo, rangoMaximo);

console.log(`La cantidad de estudiantes dentro del rango ${rangoMinimo}-${rangoMaximo} es: ${cantidadEnRango}`);
