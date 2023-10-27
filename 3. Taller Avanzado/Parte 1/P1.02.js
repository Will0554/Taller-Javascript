/**
 Dibujar las siguentes lineas en un cuadrado que equivale a un área de 10 por 10 asteriscos. El resultado debe ser como el que se muestra a continuación de cada reto.
2. El reto es dibujar todas las columnas impares.

    ``` JavaScript
    * * * * * 
    * * * * * 
    * * * * * 
    * * * * * 
    * * * * * 
    * * * * * 
    * * * * * 
    * * * * * 
    * * * * *
    * * * * * 
    ```
 */

const tamano = 10;

for (let fila = 0; fila < tamano; fila++) {
    let filaAsteriscos = "";
    
    for (let columna = 0; columna < tamano; columna++) {
        if (columna % 2 !== 0) {
            filaAsteriscos += " ";
        } else {
            filaAsteriscos += "*";
        }
    }
    
    console.log(filaAsteriscos);
}
