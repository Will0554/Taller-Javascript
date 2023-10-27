/** A partir de un área de 10 por 10 imprimir un triángulo rectángulo para cada uno de sus cuadrántes.
3. El triángulo que se debe imprimir para el tercer cuadrante.

    ``` JavaScript
    **********
     *********
      ********
       *******
        ******
         *****
          ****
           ***
            **
             *
    ``` */

const tamano = 10;

for (let fila = 0; fila < tamano; fila++) {
    let filaAsteriscos = "";
    
    for (let columna = 0; columna < tamano; columna++) {
        if (columna >= tamano - fila - 1) {
            filaAsteriscos += "*";
        } else {
            filaAsteriscos += " ";
        }
    }
    
    filaAsteriscos = " ".repeat(fila) + filaAsteriscos;
    
    console.log(filaAsteriscos);
}
