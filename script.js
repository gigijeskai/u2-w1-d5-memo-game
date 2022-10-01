 let carta1;
 let carta2;
let tutteLeCarte = document.querySelectorAll('card')


function flip(giraCarta){
 giraCarta.target.classList.add('flip')
//  ^^per ogni carta che seleziono applica uno sfondo blu
if (carta1 === undefined){
    carta1 = giraCarta.target
    } else {
        carta2 = giraCarta.target
    }
    for (let i = 0; i < tutteLeCarte.length;i++){
tutteLeCarte[i].removeAttribute('onclick')
    }    
}




 