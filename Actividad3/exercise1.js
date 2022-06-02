/*
Con ayuda de la función prompt pedir dos datos al usuario: Nombre, edad

Para luego imprimir en pantalla el siguiente resultado:

- Si el usuario tiene edad de 18 o mayor puede ingresar a la discoteca
- Si el usuario es menor de 18 no puede ingresar a la discoteca
- Si el usuario se llama Mario o Carlos puede ingresar a VIP

*/

var namePerson = prompt('What is your name?');
var age = prompt('What is your age?');

if(age >=18){
    console.log('You can go into the club');
}else if(age<=18 && namePerson != 'Mario' || namePerson != 'Carlos'){
    console.log('You cannot get into the club');
}else if(namePerson == 'Mario' || namePerson == 'Carlos'){
    console.log('Congrats, you can be in the VIP zone');
}else{
    console.log('Club is full of people, go to the next one right in the next block (honestly you do not meet the criteria to be in our exclusive club)');
}