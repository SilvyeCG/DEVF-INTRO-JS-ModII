const botones = document.querySelector('#buttons');
const screen = document.querySelector('#image');
const title = document.querySelector('#title');
const parrafo = document.querySelector('#paragraph');

botones.addEventListener('click', (e) => {
    
    menu.forEach(plato => {

        if(plato.id == e.target.textContent){
            screen.src = plato.imagen;
            title.textContent = plato.titulo;
            parrafo.textContent = plato.Descripción;
            
        }
    })


    // menu.forEach( plato => {
    //     if(plato.id == e.target.textContent){
    //         screen.src = plato.imagen;
    //         title.textContent = plato.titulo;
    //         parrafo.textContent = plato.Descripción;
    //     }
    // })
}); 
