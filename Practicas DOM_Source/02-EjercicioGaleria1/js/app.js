// variables

const title = document.querySelector('#paragraph');
const screen = document.querySelector('#bigImage');
const containerMiniaturas = document.querySelector('#imgsContainer');

//e es un parametro que va a escuchar, es un apuntador
containerMiniaturas.addEventListener('click', (e) => {  
    if(e.target.src){//src hace referencia a la imagen
        
        screen.src = e.target.src;
        title.textContent = e.target.name; //name hace referencia a la propiedad imagen
    } 
    
});