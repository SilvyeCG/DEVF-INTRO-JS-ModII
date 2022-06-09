// Ejercicios de Objetos y sus métodos básicos:

/*Create an object that will be filled only by a function inside of it,
    and not from someone outside of it's function.. example:
let myObject = {
    myFunction: function ()... // This function is supposed to fill this object
}
myObject.myNewProp = "Hello world" // This should throw an exception or error because we don't want this object to be filled from outside...
It supposed to be filled using it's own function
Add any type of element on the object.. arrays, objects, int, strings, etc*/


var myObject = {
    myFunction: function(){
        console.log(`${this.value}`);
    }
};

const values = Object.create(myObject);

values.value = 'name';

values.myFunction();

