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
const arr = ['one', 'two', 'one', 'one', 'two', 'three', 'five', 'seven', 'five', 'ten', 'nine', 'one', 'two', 'four'].sort();
 var result = array_count_values(arr);
 
for(var word in result){
    console.log("La palabra '" + word + "' se repite " + result[word] + " vez/veces");
}

/*

let uniqueElementsArr = [];
let contadorVeces = [];
let contador = 1;

uniqueElementsArr = arr.sort((a,b) => {
   if(a.element == b.element){
     contador++

   }else {
      uniqueElementsArr.push(arr[i]);
      contadorVeces.push(contador);
      contador = 1;
   }
 });

 for(let j = 0; j < uniqueElementsArr.length; j++){
   console.log(uniqueElementsArr[j] + ' : ' + contadorVeces[j]);
}

*/
/*

const arr = [1,2,8,7,4,3,2,9,3,1,1,2,2,9.9,6,8,4,5].sort();
let uniqueElementsArr = [];
let contadorVeces = [];
let contador = 1;


for(let i = 0; i < arr.length; i++){
   if(arr[i + 1] === arr[i]){

      contador ++;
      
   }else{
      uniqueElementsArr.push(arr[i]);
      contadorVeces.push(contador);
      contador = 1;
   }
}


for(let j = 0; j < uniqueElementsArr.length; j++){
   console.log('el value ' + uniqueElementsArr[j] + 'se repite ' + contadorVeces[j]);
}


/*

const arr = ['one', 'two', 'one', 'one', 'two', 'three', 'five', 'seven', 'five', 'ten', 'nine', 'one', 'two', 'four'];

var arr2 = [ new Set(arr)].sort();

console.log(arr2); */
