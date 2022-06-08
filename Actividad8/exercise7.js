// Ejercicios de Objetos y sus métodos básicos:

/**
 * Crea un código para llenar un objecto vacio:
 * 
 * const objeto = {}
 * 
 * Con las siguiente propiedades:
    * color
    * tamaño
    * peso
    * cantidad
    * 
*/
const object = {};

// The Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object.

Object.defineProperties(object, {
  color: {
    value: 'red',
    writable: true
  },
  tamaño: {
      value: 12,
      writable: true
  },
  peso: {
    value: 18,
    writable: true
},
cantidad: {
    value: 3,
    writable: true
},
});

console.log(object);