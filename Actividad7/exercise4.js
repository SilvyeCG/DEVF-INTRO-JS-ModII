/*  
Crear un programa el cual sirva para convertir temperaturas. De celsius a fahrenheit  y viceversa. Utiliza
las expresiones matemáticas necesarias para la conversión. Que dicho progama recibe como argumento las 
temperaturas y regresa el resultado imprimiendo en pantalla la conversión. Tu solución es libre a tu lógica.

*/

var conversion = prompt('Que función quieres ejecutar: \n a. Celsius a Fahrenheit \n b. Fahrenheit a Celsius');
var grade = prompt('Coloca los grados a convertir');

switch(conversion){

    case 'a':

        function celsius(grades){
            let totalc = grades * 9 / 5.0 + 32;
            return totalc;
        }

        celsius(grade);
    break;

    case 'b':
        function fahrenheit(grades){
            let totalf = (grades - 32) * 5 / 9;
            return totalf;
        }

        fahrenheit(grade);
    break;

    default:
        console.log('Invalid option');
    break;
}



