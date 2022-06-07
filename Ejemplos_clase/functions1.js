// declaracion de función

/*
mayor de 18: edad
adeudo en buro de credito: true/false
resultado: imprimir si es candidato a credito o no
*/

function getCredit(age, debt){
    if(age >=18){
        if(debt){
            console.log("No candidato")
        }else{
        console.log("Candidato")
        }
    }
}

getCredit(19, false);


//con arrow (son más comunes en react)

const getCredit1 = (age, debt) => {
    if(age >=18){
        if(debt){
            console.log("No candidato")
        }else{
        console.log("Candidato")
        }
    }
}