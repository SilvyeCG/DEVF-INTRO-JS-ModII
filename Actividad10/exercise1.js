/**
 * Crea una función para encontrar la diferencia de edad entre el miembro mas viejo y el
 *  más jóven de la familia y regresa como resultado, sus respectivas edades y la 
 * diferencia de edad. 
 * 
 */

 const Family = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56
    },
    {
      name: 'Rachel',
      age: 45
    },
    {
      name: 'Nate',
      age: 67
    },
    {
      name: 'Jeniffer',
      age: 65
    },
    {
      name: 'Martha',
      age: 25
    }
  ];

 var difference = 0;

// 1er funcion ordena ascendentemente las edades de el arreglo de objetos
// a,b lo que hacen es tomar los dos primeros valores, comparan con el if y despues van tomando el siguiente valor para compararlo y asi sucesivamente
//el primer if compara si es menor, y regresa 1 valor antes
//el segundo if else compara si es mayor, y lo deja en la posicion siguiente
//el else es si tienen la misma edad, los deja en esa posicion

const order = Family.sort((a,b) => {
  if(a.age < b.age){
    return -1
  }else if(a.age > b.age){
    return 1;
  }else {
    return 0;
  }
});

//esta función, crea un nuevo array unicamente con las edaddes ya ordenadas

const order1= order.map((element) => {
  return element['age']
} )

//hace la comparación entre el ultimo elemento y el primer elemento del array con las puras  para saber la diferencia

const result = order1[5] - order1[0];

console.log('El miembro más grande tiene ' + order1[5] + ' y el miembro más joven tiene ' + order1[0] + ' por lo tanto, la diferencia de edadades es de ' + result + ' años');
