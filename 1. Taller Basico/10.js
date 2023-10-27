/**10. Completa el siguiente programa para imprimir los números que sean mayores a 10.

    ``` JavaScript
    const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]
    // escribe tu código acá
    ```

    El resultado debería ser el siguiente:

    ``` JavaScript
    23
    40
    12
    67
    24
    39
    ```

    NOTA: este ejercicio lo debes hacer con ciclos y sin ayuda de la función filter de JavaScript. 
    Al terminarlo cambia el arreglo original para verificar que funcione con otros números.*/

const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 10) {
    console.log(nums[i]);
  }
}
