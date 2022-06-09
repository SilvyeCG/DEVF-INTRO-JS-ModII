/* * Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
    
Objeto de muestra:

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

//El método Object.entries() devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado

for(let i = 0; i < Object.entries(student); i++){
    console.log(`$[i]: ${key}: ${value}`)
}

// for (var [key, value] of Object.entries(student)) {
//     console.log(`${key}: ${value}`);
//   }
