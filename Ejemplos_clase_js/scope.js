let x = 10;

function getNumber (num){
    let y = 20;

    if(num > 1){
        num += y;
        console.log(num);

    }

    var z = 30;

    console.log(x+y+z);

}
getNumber(20)
// console.log(x + y);
// console.log(x + z);


var mensaje = 'gana global';

function imprimir(){
    var mensaje = "gana local";
    console.log(mensaje);
}

console.log(mensaje);

