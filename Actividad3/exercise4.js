/*
Crear un programa que determine si un número introducido en un prompt es par o no, la
respuesta será demostrada en un Alert

*/

var num = prompt('Escribe un número: ');

if(num % 2 === 0){
    alert("El número " + num + " es par");
}else{
    alert("El número " + num + " es impar");
}