let dinero = 5000;
let dato = '';


// Más de 10,000 cliente gold
// Más de 5,000 cliente platinum
//Más de 1,000 cliente standard
//Menos de 100 no cliente

if(dinero >=10,000){
    console.log('Cliente Gold');

}else if(dinero >=5000){
    console.log('Cliente Platinum');
}else if(dinero >=1000){
    console.log('Cliente Standard');
}else{
    console.log('No es posible aperturar una cuenta.');
}
