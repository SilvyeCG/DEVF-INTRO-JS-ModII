//variables declaration

const btnInicio = document.querySelector('#inicio');
const player1 = document.querySelector('#jugador1');
const player2 = document.querySelector('#jugador2');
const player3 = document.querySelector('#jugador3');

let pos1 = 0;
let pos2 = 0;
let pos3 = 0;

//functions creation

btnInicio.addEventListener('click', () => {
    btnInicio.style.display = 'none';

    //mover las pelotitas

    let interval = setInterval(carrera, 100);


    function carrera(){
        pos1 += Math.round(Math.random()*20);
        player1.style.left = pos1 + 'px';

        pos2 += Math.round(Math.random()*20);
        player2.style.left = pos2 + 'px';

        pos3 += Math.round(Math.random()*20);
        player3.style.left = pos3 + 'px';

        if(pos1 >= 680){
            alert('Ganó rojo');
            clearInterval(interval);
        }else if(pos2 >= 680){
            alert('Gano azul');
            clearInterval(interval);
        }else if(pos3 >= 680){
            alert('gano amarillo');
            clearInterval(interval);
        }
    }

});

// Reto: añadir boton de reiniciar y añadir mensaje con el jugador ganador.

