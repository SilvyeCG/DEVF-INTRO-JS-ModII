/*
* Dadas dos matrices de enteros, encuentra qué elementos faltan en la segunda matriz de la primera matriz.

  Ejemplo

  La matriz es la lista original. Los números que faltan son

  matriz = [7,2,5,3,5,3]

  br = [7,2,5,4,6,3,5,3]

Los números que faltan en arr son [4,6]
*/

let matriz = [7,2,5,3,5,3];
let br = [7,2,5,4,6,3,5,3];
var different = 0;
var num = 0;

for(var i = 0; i<br.length;i++){
  for(var j = 0; j<matriz.length; j++){
    if(br[i] != matriz[j]){
      
      console.log('falta el numero ' );
      different++
    }
  }
}




