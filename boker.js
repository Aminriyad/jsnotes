var firstCard = 2
var lastCard = 1
var sum = firstCard + lastCard;
var alive = true;
var massage = ("")
let description = document.getElementById("description") /*what ever happen to description happen to the text in html, not html
bacause we are using it in document.getElementById("") function*/
sumEL = document.querySelector("#sum-el") // we can use classes .sum-el
console.log(description)
cardsEL = document.querySelector("#cards-el")
function startgame(){
    rendergame()
}
function rendergame() {
    cardsEL.innerHTML ="cards: " + firstCard +" and  "+ lastCard// link it to a var and make in change by fuction and then .innerhtml
    sumEL.innerHTML = "sum: " + sum
if (sum <21){
    massage = (" you are still in the game")
    alive = true;
    }else if (sum ===21){
    massage = (" you won")
} else if (sum>21){
    massage = (" you are out of the game")
    alive = false; // make sure that the loser is not alive
}
description.textContent= massage}// using text content specify that we mean only text content
function newcard(){
    let card = Math.floor(Math.random() * 10)
    sum+= card;
    cardsEL.innerHTML = card // link it to a var and make in change by fuction and then .innerhtml
    sumEL.innerHTML = "sum: " + sum
    startgame()
} 