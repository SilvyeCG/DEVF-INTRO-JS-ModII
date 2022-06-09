/**
 * Del siguiente arreglo, retorna un objeto donde retorne unicamente los elementos sin 
 * repetir y el valor sea las ocurrencias que encontró dentro de ese arreglo. 
 * 
 * 
 * Resultado esperado:
 *  {
      one: 4,
      two: 3,
      three: 1,
      ...
    }
 */

const arr = ['one', 'two', 'one', 'one', 'two', 'three', 'five', 'seven', 'five', 'ten', 'nine', 'one', 'two', 'four'];
let dup = [];

const newArray = arr.sort();
var cont = 0;

for(let i = 0; i < newArray.length; i++){
   if(newArray[i + 1] === newArray[i]){
     cont = cont + 1;
   }else{
      console.log(newArray[i] + ':' + cont);
   }
   
}



