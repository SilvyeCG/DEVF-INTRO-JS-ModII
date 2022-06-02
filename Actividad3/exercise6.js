/*
Solicitar al usuario que ingrese dos números y mostrar cual de los dos es menor. No considerar 
el caso en que ambos sean iguales

*/

var num1 = prompt('Ingresa un primer número ');
var num2 = prompt('Ingresa otro número diferente');

if(num1 < num2){
    console.log('El numero menor es ' + num1);
}else{
    console.log('El numero menor es ' + num2);
}