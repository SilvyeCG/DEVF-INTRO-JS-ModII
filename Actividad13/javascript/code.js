const formSearch = document.querySelector('#form-search');
const inputSearch = document.querySelector('#inputSearch');
const inputSelection = document.querySelector('#nav-item');
const allItems = document.querySelector('#allItems');
const dressItems = document.querySelector('#Dresses');
const casualItems = document.querySelector('#Casual');
const babyItems = document.querySelector('#Babies');
const makeupItems = document.querySelector('#makeup');
const boxItems = document.querySelector('#box-images');

const dataSearch = {
    category: '',
    image: '',
    model: '',
    price: ''
}

document.addEventListener('DOMContentLoaded', () =>{
    showShop();
});

function showShop(){
    articles.forEach(article => {
        const {image, model, price} =article;
        const cardArticle = document.createElement('div');
        cardArticle.classList.add('col' ,  'mb-3');
        cardArticle.innerHTML = `
            <div class="card">
            <div class="w-50">
                <img src="${image}" class="img-fluid object-fit" alt="">
            </div>
            <div class="card-body">
                <p class="card-text text-center mb-1">${model}</p>
                <p class="card-text text-center mb-1">${price}</p>
            </div>
        </div>
        `

        boxItems.appendChild(cardArticle);
    });
}

function allArticles(){

    allItems.addEventListener('click', () => {
        showShop();
        
        });
    
}

function showDresses(){
    dressItems.addEventListener('click', () => {
        //console.log('hi2');
        articles.forEach(article =>{
            if(article.category == 'Dresses'){ 
                console.log(true);
                clearBox();
                
                    const {image, model, price } = article; 
                    const cardResult = document.createElement('div');
                    cardResult.classList.add('col' ,  'mb-3');
                    cardResult.innerHTML = `
                        <div class="card">
                        <div class="w-50">
                           <img src="${image}" class="img-fluid object-fit" alt="">
                        </div>
                        <div class="card-body">
                            <p class="card-text text-center mb-1">${model}</p>
                            <p class="card-text text-center mb-1">${price}</p>
                        </div>
                    </div>
                `
                boxItems.appendChild(cardResult); 
                
            }
        })

    });
}

function showCasual(){
    casualItems.addEventListener('click', () => {
        //console.log('hi2');
        articles.forEach(article =>{
            if(article.category == 'Casual'){ 
                console.log(true);
                clearBox();
                
                    const {image, model, price } = article; 
                    const cardResult = document.createElement('div');
                    cardResult.classList.add('col' ,  'mb-3');
                    cardResult.innerHTML = `
                        <div class="card">
                        <div class="w-50">
                           <img src="${image}" class="img-fluid object-fit" alt="">
                        </div>
                        <div class="card-body">
                            <p class="card-text text-center mb-1">${model}</p>
                            <p class="card-text text-center mb-1">${price}</p>
                        </div>
                    </div>
                `
                boxItems.appendChild(cardResult); 
                
            }
        })

    });
}

function showBabies(){
    babyItems.addEventListener('click', () => {
        //console.log('hi2');
        articles.forEach(article =>{
            if(article.category == 'Babies'){ 
                console.log(true);
                clearBox();
                
                    const {image, model, price } = article; 
                    const cardResult = document.createElement('div');
                    cardResult.classList.add('col' ,  'mb-3');
                    cardResult.innerHTML = `
                        <div class="card">
                        <div class="w-50">
                           <img src="${image}" class="img-fluid object-fit" alt="">
                        </div>
                        <div class="card-body">
                            <p class="card-text text-center mb-1">${model}</p>
                            <p class="card-text text-center mb-1">${price}</p>
                        </div>
                    </div>
                `
                boxItems.appendChild(cardResult); 
                
            }
        })

    });
}

function clearBox(){
    boxItems.innerHTML = '';
}