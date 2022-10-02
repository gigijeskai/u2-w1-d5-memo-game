 let carta1;
 let carta2;
let tutteLeCarte = document.getElementsByClassName('card');
let carteIndovinate
function flip(giraCarta){
 giraCarta.target.classList.add('flip')

if (carta1 === undefined){
    carta1 = giraCarta.target
   
    } else {
        carta2 = giraCarta.target
    
    for (let i = 0; i < tutteLeCarte.length;i++){
tutteLeCarte[i].removeAttribute('onclick')
}

carteIndovinate = carteUguali()
if (carteIndovinate === true){
    carta1.classList.replace('flip','match')
    carta2.classList.replace('flip','match')
    } else { (carteIndovinate === false)
        carta1.classList.remove('flip')
        carta2.classList.remove('flip')
    }
    carta1 = undefined;
    carta2 = undefined;
}
}
 

 function carteUguali(carta1, carta2){
    let carteIndovinate
if(carta1 === carta2){
carteIndovinate = true
} else {
    (carta1 !== carta2)
    carteIndovinate = false
}
return carteIndovinate
 }








 