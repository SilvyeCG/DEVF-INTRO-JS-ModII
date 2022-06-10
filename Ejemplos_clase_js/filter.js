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



//filter

//traer solo el elemento que su especie sea dog

const element = pets.filter((pet) => {
    return pet.specie === 'dog'
})

console.log(element);