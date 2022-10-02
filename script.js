 let carta1;
 let carta2;
let tutteLeCarte = document.getElementsByClassName('card');


function flip(giraCarta){
 giraCarta.target.classList.add('flip')

if (carta1 === undefined){
    carta1 = giraCarta.target
   
    } else {
        carta2 = giraCarta.target
    
    for (let i = 0; i < tutteLeCarte.length;i++){
tutteLeCarte[i].removeAttribute('onclick')
}    

 let carteUguali = confrontaCarte()
if (carteUguali === true){
carta1.classList.replace('flip','match')
carta2.classList.replace('flip','match')
} else {
    carta1.classList.remove('flip')
    carta2.classList.remove('flip')
}
}
}
function  confrontaCarte(){
    let carteselezionate = [carta1,carta2];
    return carteselezionate
}




 