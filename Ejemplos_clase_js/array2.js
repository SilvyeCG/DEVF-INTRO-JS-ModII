let frutas = ['Mango', 'Piña', 'Melon', 'Guayaba', 'Yaca'];

//frutas[frutas.length] = 'Mora';

frutas.push = 'Mandarina'; //lo mismo que futas[frutas.lenght] --> lo manda al final de la lista

for(let i = 0; i <= frutas.length; i++){
    console.log(frutas[i]);
}

let newArray = frutas.slice[2, 4];