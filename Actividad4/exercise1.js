/* Usando while, crea un programa que pregunte al usuario un númeo. Mostrar los números que son
multiplos de 5 desde 1 hasta el número introducido por el user

*/

let i = 0;
var num = prompt('Introduce un numero');

while(i <= num){
    if(i % 5 == 0){
        console.log(i);
    }
    i++
}