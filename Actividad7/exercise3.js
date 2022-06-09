/*

Desarrolla un método para verificar si una palabra es un palíndromo. Casos de prueba:
const word1 = 'madam' const word2 = 'computadora'

*/

/* Esta no funcionó

function palindromo(palabra){

    //The split() method splits a string into an array of substrings.
    let array = palabra.split(' ');

    //The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
    let reverse = array.reverse();

    //El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

    let join = reverse.join();

    if(palabra == join){
        console.log('Palabra palindromo');
    }else{
        console.log('No es un palindromo');
    } 
}
*/


function palindromo(palabra){
    let arr = palabra.split(' ');
    let reverse = arr.reverse();
    let join = reverse.join('');

    return palabra == join;

}

palindromo("madam");
palindromo("computadora");




