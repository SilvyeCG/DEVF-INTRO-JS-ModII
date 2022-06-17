//1 variables

const formBusqueda = document.querySelector('#form-busqueda');
const inputName = document.querySelector('#inputName');
const inputGenero = document.querySelector('#inputGenre');
const inputYear = document.querySelector('#inputYear');
const boxPeliculas = document.querySelector('#box-peliculas');

//5. crear objeto que guarde la selec de busqueda de usuario

const datosBusqueda = {
    nombre: '',
    genero: '',
    year: ''

}

//2 crear el evento p mostrar info al cargar pagina

document.addEventListener('DOMContentLoaded', () => {
    mostrarHTML(peliculas)
});

//3 CREAR FUNC QUE MUESTRA CONTENIDO

function mostrarHTML(peliculas){

    peliculas.forEach(pelicula => {

        const {nombre, genero, year, descripcion, image} = pelicula;

        const cardPelicula = document.createElement('div');
        cardPelicula.classList.add('col',  'mb-3');
        cardPelicula.innerHTML = `
        <div class="card bg-secondary flex-row">
            <div class="w-50"> <!--width = w-x  x = tamaño del width -->
                <img src="${image}" class="img-fluid object-fit" alt="">
            </div>
            <div class="card-body">
                <h2 class="card-title">${nombre}</h2>
                    <p class="card-text mb-1">Género: ${genero}</p>
                    <p class="card-text mb-1">Año: ${year}</p>
                    <p class="card-text mb-1">Description: ${descripcion}</p>
            </div>
        </div>
        `
        boxPeliculas.appendChild(cardPelicula);
    })

    
}

//4 crear evento de envio. Aqui vamos a hacer el filtro.


formBusqueda.addEventListener('submit', (e) =>{

    e.preventDefault();

    datosBusqueda.nombre = inputName.value.toLowerCase();
    datosBusqueda.genero = inputGenero.value.toLowerCase();
    datosBusqueda.year = inputYear.value();

    console.log(datosBusqueda);

    filtrarPeliculas(); //llama la función que filtra los datos de busqueda

    formBusqueda.reset();
});
// 7 vrear funcion de filtro de pelicula
function filtrarPeliculas(){
    const resultado = peliculas.filter(filtrarName)

  
}

function filtrarName (pelicula){

    const {nombre} = datosBusqueda;

    if(nombre){
        return pelicula.nombre == nombre;
    }

}

