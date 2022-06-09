//define properties

const car = {

}

//nombre del objeto, propiedades

Object.defineProperties(car, {
    marca: {
        enumerable : true,
        value: 'mazda',
        writable: true
    },
    modelo: {
        enumerable: true,
        value: 2022,
        writable: true,
    },
    color: {
        enumerable: true,
        value: 'blanco',
        writable: true,
    }
});

console.log(car);