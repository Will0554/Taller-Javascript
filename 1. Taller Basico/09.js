/**9. Escribe un programa que:
    - Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número
     que el usuario ingrese (incluyéndolo)
    - Elimine el segundo elemento.
    - Recorra e imprima el arreglo.

    Ejemplo:

    ``` JavaScript
        Ingresa un número> 5
        1
        3
        4
        5
    ```*/
let numero = +prompt("Ingresa un número:");
let arreglo = [];

for (let i = 1; i <= numero; i++) {
  arreglo.push(i);
}
if (arreglo.length >= 2) {
  arreglo.splice(1, 1);
}
for (let i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i]);
}
