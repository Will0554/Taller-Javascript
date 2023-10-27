/**A partir de un área de 10 por 10 imprimir un triángulo rectángulo para cada uno de sus cuadrántes.

1. El triángulo que se debe imprimir para el primer cuadrante.

    ``` JavaScript
    *
    **
    ***
    ****
    *****
    ******
    *******
    ********
    *********
    **********
    ```
*/
const tamano = 10;

for (let fila = 0; fila < tamano; fila++) {
    let filaAsteriscos = "";
    
    for (let columna = 0; columna <= fila; columna++) {
        filaAsteriscos += "*";
    }
    
    console.log(filaAsteriscos);
}
