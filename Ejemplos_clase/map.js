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
    { //position : 2
        'pet-name': 'Panucho',
        specie: 'turtle',
        age: 12,
        color: 'green'
    },
    { //position : 3
        'pet-name': 'Peluchin',
        specie: 'dog',
        age: 7,
        color: 'gray'
    },

]

//map

//traer un arreglo con los nombrres de las mascotas

const petNames = pets.map((element) => {
    return element['pet-name']
})

console.log(petNames);