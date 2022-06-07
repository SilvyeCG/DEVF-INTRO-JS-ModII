/*

Desarrolla un método para verificar si una palabra es un palíndromo. Casos de prueba:
const word1 = 'madam' const word2 = 'computadora'

*/

function palindromo(palabra){
    let arr = palabra.split(' ');
    let reverse = arr.reverse();
    let join = reverse.join('');

    return palabra == join;

}

// word = prompt("introduce una palabra");
palindromo("madam");
palindromo("computadora");


