var operandoa;
var operandob;
var operacion;

//ancla con body onload

function init(){
    
    var resultado = document.getElementById('result');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma')
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    //events para concatenar los numeros 

    uno.onclick = function(e){ // e -> evento
        resultado.textContent = resultado.textContent + '1';
    }   
    
    dos.onclick = function(e){ // e -> evento
        resultado.textContent = resultado.textContent + '2';
    } 

    tres.onclick = function(e){ // e -> evento
        resultado.textContent = resultado.textContent + '3';
    } 

    cuatro.onclick = function(e){ // e -> evento
        resultado.textContent = resultado.textContent + '4';
    } 

    cinco.onclick = function(e){ // e -> evento
        resultado.textContent = resultado.textContent + '5';
    } 

    seis.onclick = function(e){ // e -> evento
        resultado.textContent = resultado.textContent + '6';
    } 

    siete.onclick = function(e){ // e -> evento
        resultado.textContent = resultado.textContent + '7';
    } 

    ocho.onclick = function(e){ // e -> evento
        resultado.textContent = resultado.textContent + '8';
    } 

    nueve.onclick = function(e){ // e -> evento
        resultado.textContent = resultado.textContent + '9';
    } 

    cero.onclick = function(e){ // e -> evento
        resultado.textContent = resultado.textContent + '0';
    } 

    reset.onclick = function(e){ // e -> evento
        resetear();
    } 

    suma.onclick = function(e){ // e -> evento
        operandoa = resultado.textContent; // guarda en una variable lo que hay en pantalla
        operacion = '+';
        limpiar();
    }

    resta.onclick = function(e){ // e -> evento
        operandoa = resultado.textContent; // guarda en una variable lo que hay en pantalla
        operacion = '+';
        limpiar();
    }

    multiplicacion.onclick = function(e){ // e -> evento
        operandoa = resultado.textContent; // guarda en una variable lo que hay en pantalla
        operacion = '+';
        limpiar();
    }

    division.onclick = function(e){ // e -> evento
        operandoa = resultado.textContent; // guarda en una variable lo que hay en pantalla
        operacion = '+';
        limpiar();
    }
    igual.onclick = function(e){ // e -> evento
        operandob = resultado.textContent; // guarda en una variable lo que hay en pantalla
        operacion = '+';
        resolver();
    }
}

function limpiar(){
    resultado.textContent = '';
}

function resetear(){
    resultado.textContent = '';
    operandoa = 0;
    operandob = 0;
    operacion = '';
}

function resolver(){
    var res;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
        break;

        case '-':
            res = parseFloat(operandoa) - parseFloat(operandob);
        break;

        case '*':
            res = parseFloat(operandoa) * parseFloat(operandob);
        break;

        case '/':
            res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    resultado.textContent = res;
}
