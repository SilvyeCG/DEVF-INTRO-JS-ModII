// 01. declare variables

const formSearch = document.querySelector('#form-busqueda');
const inputName = document.querySelector('#inputName');
const inputGenre = document.querySelector('#inputGenre');
const inputYear = document.querySelector('#inputYear');
const boxMovies = document.querySelector('#box-peliculas');

//05. Crear objeto que guarde la seleccion de busqueda del usuario

const dataSearch = {
    movieName: '',
    genre: '',
    year: '',
    description: '',
    image: '',

}

// 02. Crear el evento para mostrar info al cargar la pagina

document.addEventListener('DOMContentLoaded', () => {

    mostrarHTML(movies);

});

// 03. Crear funcion que muestra contenido

function mostrarHTML(movies){

    clearHTML();

        movies.forEach(movie => {

            const {movieName, genre, year, description, image} = movie;

            const cardMovies = document.createElement('div');
            cardMovies.classList.add('col', 'mb-3');
            cardMovies.innerHTML = ` 
            <div class="card bg-secondary flex-row">
                <div class="w-50"> 
                    <img src="${image}" class="img-fluid object-fit" alt="">
                </div>
                <div class="card-body">
                    <h2 class="card-title">${movieName}</h2>
                    <p class="card-text mb-1">Género: ${genre} </p>
                    <p class="card-text mb-1">Año: ${year}</p>
                    <p class="card-text mb-1">Description: ${description}</p>
                </div>
            </div>
            `   
            boxMovies.appendChild(cardMovies);
        });
}

//04. Crear el evento de envío. Aquí vamos a hacer el filtro

formSearch.addEventListener('submit', (e) => {
    e.preventDefault(); //no se ve el parpadeo cuando se da clic en buscar
    
    dataSearch.movieName = inputName.value.toLowerCase();
    dataSearch.genre = inputGenre.value.toLowerCase();
    dataSearch.year = inputYear.value;
    
    filterMovies(); // llama la funcion que filtra los datos de busqueda
    formSearch.reset(); //regresa los valores de defecto en el form de search

});

//06. Crear funcion de filtrar peliculas

function filterMovies(){
    const result = movies.filter(filterGenre).filter(filterYear).filter(filterName);
    
    console.log(result.length)
    
    //09. Trabajar cuando no hay resultados de busqueda
    
    if(result.length){
        mostrarHTML(result);
    }else{
        console.log('nada')
        noResults();
    }

    // 11. Cuando no hay opciones seleccionadas por el usuario pero el usuario da clic en el boton de buscar, deberá mostrar todas
/*

    if(inputName.value == '' && inputGenre.value == 'Choose...' && inputYear.value == 'Choose...'){
        noResults();
    }else{
        mostrarHTML(result);
        boxMovies.parentElement.lastChild.remove();
    }

*/
    //11.2 Lo mismo pero con Object

    const isContent = Object.values(dataSearch).filter( e => e);

    if(isContent.length){
        mostrarHTML(result);
    }else{
        noResults();
    }
    
}

//07. Generar funciones que recibirá el filter
function filterName(movie){

    const {movieName} = dataSearch;
    if(movieName){
        return movie.movieName == movieName;
    }

    return movies;
}

function filterGenre(movie){
    const {genre} = dataSearch;
    if(genre){
        return movie.genre == genre;
    }

    return movies;
}

function filterYear(movie){
    const {year} = dataSearch;

    if(year){
        return movie.year == year;
    }

    return movies;
}

//08. Funcion que limpie los cards de resultados anteriores

function clearHTML(){
    boxMovies.innerHTML = '';

    while(boxMovies.firstChild){

        boxMovies.firstChild.remove();

    }
}

//10. Funcion cuando no hay resultados de busqueda (paso 9 p ref)

function noResults(){
    clearHTML();

    const noResults = document.createElement('div');

    noResults.classList.add('bg-danger', 'text-white', 'border', 'p-4', 'text-center');
    noResults.textContent = 'No se encontraron resultados de buqueda';

    boxMovies.parentElement.appendChild(noResults);
    
}