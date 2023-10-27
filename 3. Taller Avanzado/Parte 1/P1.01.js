/**Dibujar las siguentes lineas en un cuadrado que equivale a un área de 10 por 10 asteriscos. El resultado debe ser como el que se muestra a continuación de cada reto.

1. El reto es dibujar todas las filas pares.

    ``` JavaScript

    **********
    
    **********
    
    **********
    
    **********
    
    **********
    ```*/

const tamano = 10;

for (let fila = 0; fila < tamano; fila++) {
    if (fila % 2 === 0) {
        let filaAsteriscos = "";
        for (let columna = 0; columna < tamano; columna++) {
            filaAsteriscos += "*";
        }
        console.log(filaAsteriscos);
    }
}
