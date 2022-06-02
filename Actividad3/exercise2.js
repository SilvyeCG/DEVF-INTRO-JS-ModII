/*
Solicitar al usuario dos datos, y a partir de una estructura de control realizar las condiciones
necesarias para crear un juego Piedra, Papel o Tijera. Imprimir en pantalla quien es el 
ganador

*/

var player1 = prompt ('Escoje piedra, papel o tijera: ');
var player2 = prompt ('Escoje piedra, papel o tijera: ');

if(player1 === player2) {
    console.log('Empate');
}else if(player1 == 'piedra' && player2 == 'papel'){
    console.log('El papel envuelve la piedra, papel gana')
}else if(player1 =='papel' && player2 == 'piedra'){
    console.log('El papel envuelve la piedra, papel gana')
}else if(player1 == 'tijera' && player2 == 'papel'){
    console.log('Las tijeras cortan al papel, tijeras ganan');
}else if(player1 =='papel' && player2 == 'tijera'){
    console.log('Las tijeras cortan al papel, tijeras ganan');
}else if(player1 == 'piedra' && player2 == 'tijera'){
    console.log('La piedra rompe las tijeras, piedra gana');
}else if(player1 =='tijera' && player2 == 'piedra'){
    console.log('La piedra rompe las tijeras, piedra gana');
}