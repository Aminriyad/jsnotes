player ={
    name: "AMIN",
    chips: "85"
}
cards=[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("description")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + ": $" + player.chips

console.log(cards )
function getRandomCard() {
    let randomNumer = Math.floor(Math.random()*13 ) + 1
    if (randomNumer > 10) {
    return 10
    } else if (randomNumer===1) {
    return 11
    } else {
    return randomNumer}
}
function renderGame () {
    cardsEl. textContent = "Cards: "
    "Cards: " + cards [0] + " " + cards [1]
    sumEl. textContent = "Sum: " + sum
    if (sum <= 20) {
    message = "Do you want to draw a new card?"
    } else if (sum === 1) {
    message = "You've got Blackjack!"
    hasBlackJack = true
    } else {
    message = "You're out of the game!"
    isAlive = false
    }
    messageEl.textContent = message
}
function startGame(){
    isAlive  = true
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    card =[firstcard , secondcard]
    sum = firstcard +  secondcard 
    renderGame()
}
function newCard(){
    if(isAlive===true && hasblacKjacK === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()} 
}