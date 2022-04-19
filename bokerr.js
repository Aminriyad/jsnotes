sumEL = document.querySelector("#sum-el") 
cardsEL = document.querySelector("#cards-el")
massage = document.querySelector("#description")
card1 =Math.floor(Math.random() * 15)
card2 = Math.floor(Math.random() * 15)
card = card1 + card2
function rendergame(){
    cardsEL.innerHTML= "cards: " + card1 + " and " + card2
    sumEL.innerHTML= "sum: " + card
    if(card<21){
        massage.innerHTML="you are still in you lucky game."
    }else if(card===21){
        massage.innerHTML="YOU won BRO"
    }else if(card>21){
        massage.innerHTML="your out bro"
    }

}