/*
var player1 = prompt ('Escoje piedra, papel o tijera: ');
var player2 = prompt ('Escoje piedra, papel o tijera: ');


if((player1 == 'piedra' && player2 == 'piedra') || (player1 == 'papel' && player2 == 'papel') || (player1 == 'tijera' && player2 == 'tijera') ) {
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
else{
    console.log("¿Seguro que estamos jugando piedra, papel o tijera?")
} 

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
else{
    console.log("¿Seguro que estamos jugando piedra, papel o tijera?")
    
} 