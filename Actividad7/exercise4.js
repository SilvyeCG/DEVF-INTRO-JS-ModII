/*  
Crear un programa el cual sirva para convertir temperaturas. De celsius a fahrenheit  y de 
*/
/*

function celsius(grades){
    let totalc = grades * 9 / 5.0 + 32;
    return totalc;
}

function fahrenheit(grades){
    let totalf = (grades - 32) * 5 / 9;
    return totalf;
}

celsius(58);
fahrenheit(38);

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



