/**10. Implementar una función para calcular la calificación final de un estudiante, 
considerando los porcentajes asignados a cada materia.*/

function calcularCalificacionFinal(notas, porcentajes) {
if (notas.length !== porcentajes.length) {
    return "Error: El número de notas no coincide con el número de porcentajes.";
}

let calificacionFinal = 0;

for (let i = 0; i < notas.length; i++) {
    calificacionFinal += (notas[i] * porcentajes[i] / 100);
}

return calificacionFinal;
}

const notas = [4.5, 3.0, 3.7, 2.0];
const porcentajes = [30, 20, 25, 25];

const resultado = calcularCalificacionFinal(notas, porcentajes);

if (typeof resultado === "number") {
console.log("Calificación Final: " + resultado.toFixed(2));
} else {
console.log(resultado); // Mensaje de error
}
