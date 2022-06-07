/*

Crear una funcion que recibe 2 parametros (una oracion y la palabra buscar) Retornar true/false en caso de que
una oración contenga una palabra dada, es decir, si yo mando "Hola mundo" y mando la palabra perro me debe retornar
un false. En cambio si mando "mundo" entonces retorna true
Oracion: input
buscar: true/false
*/

function myFunction(phrase, word){
    var arr = phrase.split(' ');
    var exist = false;

    console.log(arr)
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == word){
            exist = true;
        }else{
            exist = false;
        }
    }

    return exist
}

myFunction("What's new", 'is');
