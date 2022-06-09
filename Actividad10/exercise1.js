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
let menor =100
let mayor = 0
let count = 0
let ismayor= 0
let ismenor = 0

function myFunction(Family, age){

    const ages = Family.map((element) =>{
        return element['age']
    })

    ages.forEach((item) => {
        if(item >mayor){
            mayor = item;
        }else if(item < menor){
            menor = item;
        }

        count++
        // if(count == Family.length){
        //     while(!Family.includes(mayor)){
        //         mayor--
        //     }
        //     while(!Family.includes(menor)){
        //         menor--
        //     }
        // }       
    });
}

console.log('LA EDAD MAYOR ES: '+ mayor);
console.log('LA EDAD MENOR ES: ' + menor);
console.log('LA DIFERENCIA DE EDADES ES' + (mayor - menor));
