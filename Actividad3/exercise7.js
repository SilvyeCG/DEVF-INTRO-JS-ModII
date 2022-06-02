/*
Solicitar al usuario que ingrese tres números y mostrar cual de los tres es el número mayor.
Considerar el caso en que 2 números sean iguales

*/

var num1 = prompt('Ingresa el primer número: ');
var num2 = prompt('Ingresa el segundo número: ');
var num3 = prompt('Ingresa el tercer número: ');

if(num1 > num2){
    if(num1 > num3){
        console.log('El ' + num1 + ' es mayor');
    }else if(num1 == num3){
        console.log('Tienes un par de números mayores ' + num3);
    }else{
        console.log('El ' + num3 + ' es el mayor');
    }
}else if(num2 > num3){
    if(num2 > num3){
        console.log('El ' + num2 + ' es mayor');
    }else if(num2 == num3){
        console.log('Tienes un par de números mayores iguales ' + num3);
    }else{
        console.log('El ' + num3 + ' es mayor');
    }
}else if(num1 == num2){
    if(num2 > num3){
        console.log('Tienes un par de números mayores ' + num2);
    }else if(num2 < num3){
        console.log('El ' + num3 + ' es el mayor');
    }else{
        console.log('Tienes 3 numeros iguales');
    }
}