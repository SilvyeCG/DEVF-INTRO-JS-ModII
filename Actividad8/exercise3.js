// Ejercicios de Objetos y sus métodos básicos:


/**
 * Verifica si la propiedad name se encuentra dentro del siguiente objeto:
 * 
     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
*/
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

//El método hasOwnProperty() devuelve un booleano indicando si el objeto tiene la propiedad especificada.

console.log(student.hasOwnProperty('name')); //return true en consola de chrome

