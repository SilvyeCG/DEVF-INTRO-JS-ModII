/*
crear una función que reciba una lista de elementos numericos y un numero a buscar
y retorne el index del elemento en la lista

*/

function searchElement(arr, num){
    for(let i= 0; i< arr.length; i++){
        if(arr[i] == num){
            return i;
        }else{
            return false;
        }
    }
}

//scenario 1

const result = searchElement([2,7,10,5], 5);
console.log(result);