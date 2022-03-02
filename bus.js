amin= 50
console.log(amin)
amin = amin +amin
console.log(amin)
amin -= 75
console.log(amin)
amin +=45
console.log(amin)
//in this project we started to mkae a base and make a bounns points
//and change the value from amin to amin to number to number
//to train yourself to make the number to respond any effecter
function increment(){
    console.log("the button was clicked")
}
//this project was made to make buttons responsive
//directly make the counter start with 0
//in HTML we made <button onclick='increment()'> to make the button responsive but only in console >
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
//-----------how to save time------------
function countdown() {
}
countdown()
//the function has to be invoked to work
//it is to save time and train to work with function as much as posssible
function mylogger(){
    console.log(42)
}
mylogger()
//and this is a example
let lap1=34
let lap2=33
let lap3=36
function laptime(){
    let totaltime = lap1 + lap2+ lap3
    console.log(totallaptime) //totallaptime existance is only inside tge function
} //totallaptime didn't exist in global places
//----------save time-----------
let lap1=34
let lap2=33
let lap3=36
function laptime(){
    console.log(lap1 + lap2+ lap3) 
}
//this is to save time, and to show that function can get acess to outer things
//things can go from outside of the function to inside the function
//but noting go from inside the function to outside it 
//the function is a private proberty you get enter, but cant leave
let lapscompleted = 0
function incrementlap(){
    lapscompleted += lapscompleted+1
}
incrementlap()
incrementlap()
incrementlap()
console.log(incrementlap())
//the outcome is going to be three, beacuse every var is adding one 
//incrementlap() is +1 as long as it is 0
function increment(){
    console.log("clicked")
}
// <button onclick='increment()'> 
//this is a really interesting fact
//in HTML we made <button onclick='increment()'> to make the button responsive but only in console >
//so when you clik the button you will activate the function
//and from then the computer will show you clicked in console
let count=0
function increment(){
    count += 1
    console.log(count)
}
//this is actually more interesting than the perivous one
//the HTML <button onclick='increment()'> will activate the function increment()
//the function will make count 0 and then add 1  one every time you click the button
//witch is the number of the time that you clicked th button as long as count = 0
//but you have to make console.log()count inside the function because you want it to show up inside the function
let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0
function increment(){
    count += 1
    countEl.innertext = count
    console.log(count)
}
//this code's job is tho change the number based of the value on count, and change it every time that you click inside the box.
//and used .innnertext to use it as a text not other thing\
// and countEl (camel case) is the shortcut of the invoker document.getElementById("count-el")
// and we enabled the button by the invoker's representer.
function save(){
    console.log(count)
}
// this is to stop the counting from counting twice
//11:18am 15 feb, I want to sleep
// we added onclick('') in the line of HTMl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
console.log(saveEl)
function increment(){
    courn += 1
    countEl.innertext = count 
}
function save(){
    let countStr = count + " - "
    save.innertext += countStr
    console.log(count)
}
//this code was made to make the last saves and the number that they stoped on
//and they were made as 3 one to make all of the numbers they stopped on 
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
console.log(saveEl)
function increment(){
    courn += 1
    countEl.textContent = count  // also fine to but textContent here
}
function save(){
    let countStr = count + " - "
    save.textContent += countStr //is how we changed it from the normal to text content to prvide the text
    console.log(count)
}
//the problem that we are facing is that they're is no space in the after 
//.textcontect provide the text of the element  
//mozilla is n;t human readable, try to find big words
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
console.log(saveEl)
function increment(){
    count += 1
    countEl.textContent = count 
}
function save(){
    let countStr = count + " - "
    save.textContent += countStr
    console.log(count)
    countEl.textContent = 0
    count = 0
}
// the code in above is to make the main counter back to zer and to make it reload
//without having to load any other thing to count by adding 
//adding countEL.textContent = 0
//adding count = 0
//this project is done
function amin(){
    let amin = getElementById("nigga")
    conole.log("ahm")
}