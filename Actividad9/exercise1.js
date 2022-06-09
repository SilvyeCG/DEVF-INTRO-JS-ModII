/*
 * Escriba una función de JavaScript que tomará una serie de números almacenados
 * y encontrará el segundo número más bajos y segundo más altos, respectivamente
 * del siguiente arreglo:  const arr = [3,4,6,1,5,2,9,10,23,12]
 */

const arr = [3,4,6,1,5,2,9,10,23,12];

/*

Encuentre el valor mínimo de un array usando la función Math.min() en JavaScript
Encuentre el valor máximo de un array usando la función Math.max() en JavaScript
Algunos navegadores no admitan el método anterior, por lo que puede usar la función 
apply() junto con la función Math.min() / Math.max() para obtener el valor

*/

function myFunction(){
      
    var max = Math.max.apply(null, arr);
    var min = Math.min.apply(null, arr);
    return [max, min];
}
myFunction();

