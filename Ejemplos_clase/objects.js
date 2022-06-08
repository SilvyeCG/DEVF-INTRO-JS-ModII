//declarar un objeto literal

//como variable o c}también conocido como objeto clave

const myObject = {
    color: 'verde',
    edad: 2,
    peso: 5,
    'nombre-obj': 'planta x'
}

//acceder a las propiedades o valores del objeto

//por punto
console.log(myObject.color);

//por corchete ---> esto es porque la propiedad esta compuesta por string
console.log(myObject["nombre-obj"]); 

//modificar el valor de una propiedad existente

myObject.edad = 5;
console.log(myObject);

//agregar propiedad al object

myObject.pais = 'Mexico';
console.log(myObject);

//borrar propiedad de object palabra reservada delete

delete myObject["nombre-obj"];
console.log(myObject)