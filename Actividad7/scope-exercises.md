# JS Scoping exercises

1. What’s the result of executing this code and why.
  ```js
  function test() {
     console.log(a);
     console.log(foo());
     
     var a = 1;
     function foo() {
        return 2;
     }
  }
  
  test();
  ```

> En los dos primeros console creo que es undefined y tambien un 2 por el return
> undefined
  2
  undefined


2. What is result?
  ```js
  var a = 1; 
  
  function someFunction(number) {
    function otherFunction(input) {
      return a;
    }
    
    a = 5;
    
    return otherFunction;
  }
  
  var firstResult = someFunction(9);
  var result = firstResult(2);
  ```
> _5
> undefined


3. What is the result of the following code? Explain your answer.
  ```js
  var a = 1
  function foo() {
    var a = 2;

    function bar() {
      console.log( a );
    }

    return bar;
  }
  var baz = foo();
  baz();
  ``` 
> 2 porque se declara a como valor local de foo con valor de 2, y bar puede acceder a ella al ser una funcion dentro de foo
> 2


4. What will you see in the console for the following example?
  ```js
  var a = 1; 
  function b() { 
      a = 10; 
      return; 
      function a() {} 
  } 
  b(); 
  ```

> Creo que no esta regresando ningun valor, porque el return esta vacio, no dice que va a regresar y la función a tampoco tiene instrucciones o codigo, por lo que creo que sera un undefined
> undefined
