/*

Mediante una funcion, y dado un arreglo de enteros const numbers =[1, 2, 3, 4, 10, 11], encuentra la suma
de sus elementos

*/
// const numbers =[1, 2, 3, 4, 10, 11];

const numbers =[1, 2, 3, 4, 10, 11];
let total = numbers.reduce((a, b) => a + b, 0);
console.log(total);