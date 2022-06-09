let currentYear = 2022;
let yearBirth = 1995;
let state = 'CDMX';
let pregnancy = true;
let weeks = 1;

let currentAge = currentYear - yearBirth;
 
//     Edos fronterizos: Baja California, Sonora, Chihuahua, Coahuila, Nuevo León y Tamaulipas

if(currentAge >=18 && state == "Baja California" || state == "Sonora" || state == "Chihuahua" || state == "Coahuila" || state == "Nuevo Leon" || state == "Tamaulipas") {

    console.log ('Your shoot must be J&J/Janssen');

}else if(pregnancy == true && weeks >= 9){
    console.log("Go to your nearest station to get you shoot");

}else if(currentAge >= 30){
    console.log("You can get your shoot asap, Please keep aware of your district instructions");

}else if(currentAge <=30 && !pregnancy){
    console.log("It is not your turn yet");

}else if(currentAge <=30 && pregnancy == true && weeks < 8){
    console.log("Get your shoot asap you get 9 weeks")

}else{
    console.log("It is not your turn yet, please keep aware of the future announcements")
    
}