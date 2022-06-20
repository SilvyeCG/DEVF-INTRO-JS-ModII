let nombre = 'Pepe' ;

let items = ['uno','dos','tres','cuatro'];

let persona = {
    nombre: 'andres',
    edad: 23,
    pais: 'Colombia'
}

const textAbout = document.querySelector('#textoAbout')

//localstorage.setItem(key,value);

function add (){
    localStorage.setItem('pais',nombre)
    localStorage.setItem('items', JSON.stringify(items) )
    localStorage.setItem('persona', JSON.stringify( persona) )
}

function obtenerDatos (){

    let nombre = localStorage.getItem('pais');
    let items = JSON.parse( localStorage.getItem('items') );
    let obj = JSON.parse( localStorage.getItem('persona') );

    if(nombre){console.log(nombre);}
    if(items){console.log(items);}
    if(obj){console.log(obj);}


}

function eliminarDato(e){
    localStorage.removeItem(e);
}

function eliminarTodo(){
    localStorage.clear();
}

function actualizarContenido (){
    let titulo = localStorage.getItem('pais');
    let obj = JSON.parse( localStorage.getItem('persona') );
    textAbout.textContent = `Conoce más sobre ${titulo} que tiene ${obj.edad} años`;
}

add();
obtenerDatos ();
//eliminarDato('ciudad');
//eliminarTodo();
actualizarContenido();