/*
Crea el mismo problema 2, ahora usando Do While
*/

let i = 0;
var num = prompt('Introduce un numero');

do{
    if(i % 5 == 0){
        console.log(i);
    }
    i++
}while(i <= num);