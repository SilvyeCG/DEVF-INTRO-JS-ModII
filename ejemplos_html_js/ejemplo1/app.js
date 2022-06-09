//funcionalidad a los botones y reflejar el resultado en pantalla

//vamos a usar para guardar el valor del contador
let count = 0;

//traer el elemento span para reflejar el contador

let value = document.getElementById('contador');

// incrementar o decrementar con los botones mediante eventos

function incrementar(){
    count++
    value.textContent = count
}
//funcion decrementar  : constraint: no puede haber negativos

function decrementar(){
    count--
    if(count < 0){
        count = 0;
        alert('No se puede obtener numeros negativos');
    }else{
        value.textContent = count
    }
    
}