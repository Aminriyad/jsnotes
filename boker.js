var firstCard = 2
var lastCard =1
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
    cardsEL.innerHTML ="cards: " + firstCard +" "+ lastCard// link it to a var and make in change by fuction and then .innerhtml
    sumEL.innerHTML = "sum: 14"
if (sum <21){
        B = prompt("what is your name ")
        if (B != null){
            sumEL.innerHTML = "hello "+ ""+ B + " how are you today?"
        }
    }else if (sum ===21){
    massage = (" you won")
} else if (sum>21){
    massage = (" you are out of the game")
    alive = false; // make sure that the loser is not alive
}
description.textContent= massage}// using text content specify that we mean only text content
function newcard(){
    let card = 64
    sum+= card;
    startgame();
}
