//array de objetos

const pets = [
    { //position : 0
        'pet-name': 'Mila',
        specie: 'cat',
        age: 2,
        color: 'calico'
    },

    { //position 1
        'pet-name': 'Baileys',
        specie: 'cat',
        age: 5,
        color: 'carey'
    },
]

//acceder a una prop de un obj dentro de un array

console.log(pets[1]);
console.log(pets[0]['pet-name']);