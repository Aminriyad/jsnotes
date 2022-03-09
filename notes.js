var myarray =[18,64, 99]
myarray[1] = 45;
var myarray = [18,64,99]
myarray[0] = 45;
console.log(myarray)
//changing an item in a list 
var myarray = [[1,2],[4,3]]
var mydata = myarray[1][1]
console.log(mydata)
//pick an item in a list by location
var ourarray = ['amin', 'j', 'cat']
ourarray.push("happy", "alli");
console.log(ourarray)
//use .puh to add an item at the end of the list
var ourarray=[1,2,3]
var removefromourarray = ourarray.pop()
console.log(ourarray)
//use .pop to delete the last item in a list 
var ourarray = [1,2,3]
var removed = ourarray.shift();
console.log(ourarray)
// using .shift to delete the first item in a list
var ourarray = [1,2,3]
var removed = ourarray.unshift("niggaz");
console.log(ourarray)
//using .unshift to add and array to the the begging of the list
function ourfunction(a,b){
    console.log(a-b)
}
ourfunction(10,5);
function ourfunction(a,b){
    console.log(a-b)
}
ourfunction(15,5);
//using barometers to play with numbers
// if you dont but the var keyword it'll be global even if is was inside a function 
var outerwear ="T-shirt";
function myoutfit(){
    var outerwear ="sweater"
    return outerwear;
} 
console.log(myoutfit())
console.log(outerwear)
// you can have a local and global viraiable with the same name and they will both work based on who's using them 
function anyothernumbers(num) {
    return num/10;
}
console.log(anyothernumbers(90))
// you can play with number using functions
var sum = 0;
function addthree(){
    sum += 3;
}
function addfive(){
    sum += 5;
}
// any undefind value will return as undefined 
var changed = 0 
function change(num){ 
return(num + 5)/3;
}
changed = change(10);
    var processed = 0;
    function processARG(num) {
        return (num+3) /5;
    }
    processed = processARG(7);
    console.log(processed)
    //more playing with numbers and I like it to be honest
    function ourtrueorfalse(isittrue){
        if(isittrue){
            return "yea, it's true "
        }
        return "no, it's not true" 
    }
    function trueorfalse(wasthattrue){
        if (wasthattrue){
        return "yes, it's true"
        }
        return "no that's false"
    }
    console.log(trueorfalse(true))
    //how to deal with true and false functions
    function testequal(val) {
        if (val == 12){
            return "Equal"
        }
        return "not Equal";    
    }
    console.log(testequal(12))
    // how to deal with functions and make sure that they will deal with numbers.
    // "===" is a strict with no equality conversion
    // "==" is not strict and with equality conversions which means no differace between string and a normal number.
    function teststricts(val) {
        if ( val == 7){
            return "equal"
        }
        return "not equal";
    }
    console.log(teststricts(10));
    // more playing with numbers
    function compareequality(a,b){
        if (a == b ){
            return "equal";
        }
        return "not equal";
    }
    console.log(compareequality(10, "10"))
    // it didn't care and if it was a string because of the conversions in ==
    function testnotequal(val) {
        if (val != 99){
            return "not equal";
        }
        return "equal";
    }
console.log(testnotequal(99))
// it showed equal because of the val equality to 99 
function testgreaterthan(val) {
    if(val > 1000){
    return "more than a thosand";
    }
    if(val < 1000){
        return "less than a thosand";
        }
    return "the number is equal to a 1000";
}
console.log(testgreaterthan(1000))
//playing with greater than function and it is great so far
//samething work with the less than opeator 
function testlogicaland(val) {
    if(val<= 50 && val ){

    }
    
}
function testlogical(val) {
    if (val <= 50 && val >= 25){
        return "yes"
    }
    return "no";
}
console.log(testlogical(40))
//using the && into the logical idea
function testlogicalor(val) {
    if (val < 10|| val > 20){
    return "right";
    }
    return "inside";
}
console.log(testlogicalor(15))
// how to use the || or or condition in functions
function testelse(val) {
    if (val > 5){
        return "bigger than 5";
    } else {
        return "5 or smaller"
    }
}
console.log(testelse())
//how to make any 'else' statement and that you dont have to write the condition again just the expected result
function testelseif(val) {
    if (val > 10){
        return "greater than 10";
    } else if (val < 5){
        return "smaller than 5";
    } else {
        return "between 5 and 10";
    }
   
}
console.log(testelseif(10))
// how to use the 'else if' to save time in the conditions and make them clearer to the next person.
// the order matter cuz the first right condition wil go on, and it doesn't even check the rest of the orders.
function testsize(num) {
    if (num < 5){
        return "tiny";
    }else if (num < 10){
        return "small";
    } else if ( num < 15){
        return "medium";
    }else if (num < 20){
        return "large";
    } else if (num >= 20){
        return "huge";
    }
}
console.log(testsize(5))
// this is how to chain in JS  and make mutiple conditions and based on that it works
var names = ["amin","ali","alex","nigga"]
function golfscore(alex, strokes) {
    if (strokes == 1){
        return names[0]
    }else if (strokes <= alex - 2){
        return names[0]
    } else if (strokes == alex - 1){
        return names[1]
    }
   
}
console.log(golfscore(5,4))
//how ot make a gulf in a shape of X,Y
function caseinswitch(val) {
    var answer ="";
    switch(val){
        case 1:
            answer ="alpha";
            break;
        case 2:
        answer ="beta";
        break;
        case 3:
        answer ="gamma";
        break;
        case 4:
        answer ="delta";
        break;
        }
    return answer;

}
console.log(caseinswitch())
//how to make a switch and how to make a chain and based on that you can do it
function switchofstuff(val) {
    var answer ="";
    switch(val){
        case "a":
        answer ="apple";
        break;
        case "b":
        answer ="bird";
        break;
        case "c":
        answer ="cat";
        break;
        case "d":
        answer ="dog";
        break;
        }
    return answer;
}
console.log(switchofstuff("a"))
//more playing with it and keep working
function sequentialsizes(val) {
    var answer ="";
    switch(val){
            case 1:
            case 2:
            case 3:
            answer ="low";
            break;
            case 4:
            case 5:
            case 6:
            answer ="mid";
            break;  
            case 7:
            case 8:
            case 9:
            answer ="high";
            break;   
                }
                return answer;
}
console.log(sequentialsizes(5))
//how to use multiple case statments.
function chaintoswitch(val) {
    var answer ="";
    switch(val){
    case "bob":
        answer ="marley"
        break; 
    case 42:
        answer ="the answer";
        break; 
    case 1:
        answer ="there is no #1"
        break; 
    case 99:
        answer ="missed me by this much";
        break; 
    case 7:
        answer ="ate nine";
        break; 
    
                } 
return answer;
}

//replacing if else chains to switch chain to make it more readable
function isless(a,b) {
    return a< b;
    }
console.log(isless(10,15))
//returning boolean values (also known as ture or false value) from fuctions,
//just use return and JS is going to proof or deny the fact that you're trying to intruce (only by using return) 
function abtest(a,b) {
    if(a < 0 || b < 0 ){
        return undefined;
    }if(a > 0 || b > 0 ){
        return "harder daddy";
    }
return "nigg";
}
console.log(abtest(-2,2));
//return early pattern from functions
var count = 0;
function cc(card){
    switch(card){
    case 2:
        case 3:
            case 4:
                case 5:
                    case 6:
                        count++;
                        break;
                        case 2:
                            case 2:
                                case 2:
    }
    
    
    
    return "change me ";
}

//card counter
var count = 0;
function cc(card){
    switch(card.type){
        case 2:
            case 3:
                case 4:
                    case 5:
                        case 6:
                            count++;
                        break;
                        case 10:
                            case "J":
                                case "Q":
                                    case "K":
                                        case "A":
                                            count--;
                                            break;
                                    }

    var holdbet = 'hold'
    if (count > 0){
        holbet = 'bet'
    }
    return count + " " +  holdbet;
}
cc(2); cc('k'); cc(10); cc('k');cc('A');
console.log(cc(4))
//cards game I've no idea how it woks but will come back to it later
var ourdog={
    "name": "camper", // name is a proberty, camper is a value
    "legs": 4,        // legs is a proberty, 4 is a value
    "tails": 1,       // tails is a proberty, 1 is a value
    "friends": ["none!"] // friends is a proberty, none! is a value
};
var mydog = {
    "name": "amino",
    "legs": 3,
    "tails": 2,
    'friends':[]// an this is how wwe created our own object
}
//build js objects
var testojb = {
"hat": "ballcap",
"shirt": "jersey",
"shoes": "cleats"
};
var hatvalue = testobj.hat // and this how to make any object linked to an object inside an object
var shirtvalue = testobj.shirt; // ex; here var shirtvalue = "jersey"
// access a proberty in an object
var testobj = {
    "an entree" : "BURGER",
    "my side" : "VEGGIES",
    "the drink " : "WATER",
};
var entreevalue = testobj["an entree"];
var drinkvalue = testobj['the drink'] //ad thi sis how to link thme to equal differed proberties
//accessing object proberties  with barket notation
var testobj = {
    12:"amin",
    16:"jack",
    19:"stop",
};
var characternumber = 16;
var player = tesetobj[16]; // same list to lessons
//this is how to acccesing object proberties through variables
var ourdog ={
    "name": "camper",
    "legs": "4",
    "tails": "1",
    "friends": ["none!"]
};
ourdog.name ="happy camper"; // in this line we managed to change the name of our dog
                            // form camper ro happy camper by selecting the object and then the branch
                            // and we are only talking about (ourdog) object
var mydog ={
    "name": "coder",
    "legs": "4",
    "tails": "1",
    "friends": ["unworthy!"]
};
mydog.name="happy coder"; // and by using this object my dog name went from coder to happy coder
//updating object proberties
var mydog ={
    "name": "coder",
    "legs": "4",
    "tails": "1",
    "friends": ["unworthy!"]
};
    mydog.bark = "bow-bow " // using (.(the proberty's name) is how we'll and any new properties to the object)
    mydog["bark"]="woof!" // and this is another way to add proberties to objects
//and this is how to add and new proberties to a new object
var mydog ={
    "name": "coder",
    "legs": "4",
    "tails": "1",
    "friends": ["unworthy!"]
};
delete mydog.legs; // only use the keyword (delete) and from that you can delete any probertey
//how to delete a probertuy form an object?
function phoneticlookup(val) {
    var result=""
    var lookup = {
        "kenya":"denver",
        "germany" :"berlin",
        "UK" : "london",
        "ireland" : "conor mcgregor "
    };
    result =lookup[val];
    return result;
}; // I think this is really importnt one
console.log(phoneticlookup("kenya"));
//how to use objects as a look up, and use it instead of a switch (because it's more readable )?
var obj = {
    "gift": "pony",
    "pet" :"kitten",
    "bet" : "sleigh"
};
function checkobj(checkprop) {
    if (obj.hasOwnProperty(checkprop)) {
        return obj[checkprop];
    } else {return "not found"
}
} // I think this is an important topic
console.log(checkobj("gift"))
// How to test a object for a probertey, make sure that it has a proberey?
// or how to check if an object has a specific probertey?
var mymusics = [
    {
        "artist" : " billy joel",
        "title": "piano man",
        "release_year" : 1973,
        "formats":[
            "CD",
            "8t",
            "LP"
        ],
        "gold" : "true"
    },
    {
        "artist" : "carner",
        "title" : " cereal man",
        "release_year" : 2003,
        "formats" :[
            "youtube video"
        ]
    }
];
// ********************* RETURN TO THIS LATER.*******************************
// how to manipulating complex objects?
var mystorage = {
    car : {
        "inside":{
            "glove box" : "maps",
            "passenger seat" : "crumbs",
        },
            "outside" :{
                "trunk" : "jack"
            }  
        }
}; // I really like this.
var gloveboxcontent = mystorage.car.inside["glove box"];
console.log(gloveboxcontent)
//Accessing nested objects
var myplants = [
    {
        type:"flowers",
        list:[
            "rose",
            "tulip",
            "dandelion"
        ]
    },
{
    type : "trees",
    list : [  
    "fir",
    "pine",
    "birch"
]
}// **********COME BACK TO IT LATER***********
];
var secondtree = myplants[1].list[1];// we can use bracket elemnt with list cuz it's an array
// how to accessing nested arrays?\
var collection = {
    "2546" :{
        "album":" slippery when wet",
        "artist" : "bon jovi",
        "tarcks":[
            "let it rock"
            ,"you give love a bad name"
        ]
    },
"2468":{
    "album" : "1999",
    "artist": "prince",
    "tracks":[
        "1999",
        "Little red corvette"
    ]
},
"1245":{
    "artist": " robert plamer",
    "tarcks":[]
},
"5439":{
    "album":"ABBA Gold"
}
};
//var collectionCopy = json.parse(JSON.stringify(collection))
function updatedrecords(id, prop, value){
    if (value ===""){
        delete collection[id][prop]
    }  else if (prop ==="tracks"){
        collection[id][prop] = collection[id][prop] || []; // if it exist it works otherwise it will not show
        collection[id][prop].push(value);
    } else {
        collection[id][prop]= value;
    }
    return collection;
}
console.log(updatedrecords(5439, "artist", " ABBA"));
//record collection
var myarray =[];
var i =0;
while (1 < 5){
    myarray(i);
    i++;
}
console.log(myarray); // how to count till infinity 
//iterate with while loops 
var ourarray =[];
for (var i=0; i<5; i++){ //i=0 is the initilaization and it happenbefore any thing else, ,
    ourarray.push(i);   //i<5 in the condition if false it break.
}                       // is what happining if the condition is true 
var array =[];
for (var i=1; i<6;i++){
    array.push(i);
}
console.log(array)// worked 
//iterrate for loops
var births =[];
for (var i=0;i<10000000;i+=10000){
    births.push(i);
}
console.log(births);
//iterate odd numbers with a for loop
var kids =[];
for (var i=10; i> 0; i-=2){ // i-0 is the key for counting back and 2 means dereasing back to 2 every time
    kids.push(i);v 
}
console.log(kids);
//counting backwords in a loop
var wcs = [4, 5, 4, 2]
var total = 0;
for (var i=0;i < wcs.length;i++){total += wcs[i];}
console.log(total); // so in SW this is how to make js count the numbers in the array
//iterate throuh an array with a for loop
var 
//nesting for loopsv
myarray =[]
for ( var i=9; i>0; i-=2){
    myarray.push(i);
}
console.log(myarray)
// done working
var ourarr =[1,2,3,5]
var ourtotal=0; // .lenght is the number objects insine the array
for(var i=0;i <ourarr.length;i++){ // < mean what less an equal at the same time  
    ourtotal += ourarr[i];
}
console.log(ourtotal);
console.log(i)
// done workinng on
var myarr =[2,3,4,5,6];
var total = 0;
for (var i=0; i< myarr.length; i++){
total += myarr[i];
}
console.log(total);
// done
function multiplayall(arr){
    var product = 1;
    for (var i =0 ; i < arr.length; i ++){
    for (var j=0; j<arr[i].lenght; j++){
        product *= arr[i][j];
    }
    }
return product;
}
var product = multiplayall([[1,2],[3,4],[5,6,7]]);

console.log(product);// come back to it again
// done this is the turniing point for us an
var myarray =[];
var i = 10;
do {
    myarray.push(i);
    i++;
}while (i<5) // while means in the limit of the next condition.
console.log(i, myarray); //if false stop the process, if right do it again that why it is a loop
                        // the condotion was false so that why it did it once and this once was
                        //i++ or 11 or 10+1
//DONE
var informations =[
    {
        "cairo": "egypt",
        "bejin":"china",
        "london": "UK"
    },
    {
        "red":"rojo",
        "blue": "azul",
        "black":"negro"
    },
    {
        "messi":"10",
        "neymar":"11",
        "cristiano":"7"
    },
    {
        "big":"huge",
        "small":"tiny",
        "medium":[ "mid","middle"]
    }
];
function lookupprofile(name, prop){
    for (var i=0;i<informations.length;i++){
        if (informations[i].firstname === name){
            return  informations[i][prop]
        }
    return "no such contact"}
}
console.log(lookupprofile("huge","medium"))
// return to it later it is calles profile lookup
function randomfunction() {
    return math.random();}//math.random function is to find a number between 0,1
                         // it could be a zero but couldnot be a one
//generate random fractions
var randomnumberbetween19 = Math.floor(Math.random()*20); /* making math.random create a number and then times it by 20,
is going to make a number between 0-19 and then the math.floor is going to round it to the closest whole number.*/
function randomwholenumber(){//math.floor round it to the nearest whole number
    return Math.random();//Math.random should have a capital M
}
console.log(randomwholenumber());
//Done working in
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);// just keep thi s formila/
}
console.log(randomRange(5, 15));
//generate a random whole number within a range
// done working in
function converttointeger(str) {
    return pareseInt(str);
}
converttointeger("56");
//using the parseInt function
//pareseInt function take a string and retrun it as a integer
// "56" ---> 56
function converttointeger(str){
    return parseInt(str, 2)//using to means that number is made from only two numbers
                          // so the computer knows that this is a binary number
}
converttointeger("10011")
//done
function checkequal(a, b) {
    if (a===b){
        return true;
    }else {
        return false;
    }
}
checkequal(1, 2)
//using the condition (ternary) operator
function checkequal(a, b) {
    return a === b  ? true : false; // questtion mark make you return what the condition made you,
}                                   // but you can just write  return a===b; and that is enought
checkequal(1, 2)
//done
function checksign(num) {
    return num > 0 ? "positave" : num < 0 ? "negative" : "zero"
}
console.log(checksign(-10))
//use multiple conditional (ternary) operators
//done

//differences between the var and let keywords
/* people use let over var because ket is not going to allow you to use the
same variable twicw and it'll give you a  note*/
// an dvar ian going globaly an dlocally if inside a fraction.  
//compare scopes of the var and let keywords
function printmany(str) {
    "use strict";
    var sentence = str + "is cool!"
    sentence = str + "is amazing!"
    for (var i=0; i<str.length; i+=2){
        console.log(sentence);
    }
};
printManyTimes("freecodecamp");
//how to declare read-only variable with the const keyword\
//consot is ucangeable and use it if you are sure that you'll not change it again and mostle you will
const s=[5, 7, 2];
function editinplace() {
    "use strict";
    s[0]=2;
    s[1]=5;
    s[2]=7;
}
editinplace();
console.log(s)
//mutate an arry declared with const
//you cant change a const linking but you can change the array that it is linked to.
function freezeObj(){
    "use strict";
    const MATH_CONSTANTS = {
    PI: 3.14
    };
    object.freeze(MATH_CONSTANTS)/*usiung object.freeze is going to block every thing that you want 
    and is going to make it unchangeable and in the same way it can change const*/
    try {
    MATH_CONSTANTS.PI= 99;
    } catch(ex){
    console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);
//prevent object mutation
magic = () =>new Date();
/*----------is the same thing as this----------*/
var magic = function() {
    return new date();
};
//using arrow function to write concise anonymous functions 
var myconcat = function(arr1, arr2){
    return arr1.concat(arr2)}
//we converted the above to an arrow function
var myconcat2 = (arr1, arr2) => arr1.concat(arr2);
console.log(myconcat([1,2],[3,4,5]))
//write arraw function with parameters
const realnumberarray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squarelist = (arr)=>{
    const squaredinteger = arr.filter(num =>number.isInteger(num)&&num>0).map(x => x * x ),
    return squaredinteger}
const squaredinteger = squarelist(realnumberarray);
console.log(squaredinteger); //come back to it LATER
//write higher orders arrow functions 
const increment = (function(){
    return function increment(number, value = 1) {
        return number + value; 
    };
})();
console.log(increment(5.2));
console.log(increment(5)); 
//writing higher order arrow functions
const sum = (function(){
    return function sum(x, y, z){
        const args = [x,y,z];
        return args.reduce((a,b) => a+b, 0);
    };
})();
console.log(sum(1,2,3));
// the above is the same as the one in the buttom
const sum = (function(){
    return function sum(...args){
        return args.reduce((a,b) => a+b, 0);
    };
})();// and here we can have any number of arguments
console.log(sum(1,2,3));
//the rest operator with function parameters, help create a function with a multiable number of arguments
const arr1 =["JAN","FEB","MAR","APR","MAY"];
let arr2 ;
(function(){
    arr2 = arr1;
    arr1[0] = "potato"
})();
console.log(arr2)
//use the spread operator to evaluate arrays in-place
var voxel = {x: 3.6, y: 7.4, z:6.54};/* this is the perfect way to store things and to store any things from any thing*/
var x = voxel.x // x= 3.6
var y = voxel.y // y = 7.4
var z  = voxel.z // z= 6.54

const {x:a,y:b,z:c} = voxel; // this is the quicker way to assin things form an object into a variable
const AVG_TEMPERATURE ={
    today : 77.5,
    tomorrow : 789
};
function gettemp0ftmrw(avgtemperatures){
    "use strict";
    const{ tomorrow: temp0ftomorrow }= avgtemperatures;
    return temp0ftomorrow
}
//use destructuring assignment to assign variables from objects
// come back to this later --------------------------------------------really man you need this----------------------------------------------------------------
const LOCAL_FORECAST = {
    today : {min :72, max:83},
    tomorrow: {min: 73.3, max:84.6}
};
function getmaxoftmrw(forecast){
    "usestrict";
    const {tomorrow ={max : maxofrtomorrow }}= forecast; //we need curly braces bacause it is nested
    
    return maxoftomorrow;
}
console.log(getmaxoftmrw(LOCALFORECAST));
//destruction assignment with nested objects
//come back to it later --------------------------------------------really man you need this----------------------------------------------------------------
const [z,x,,y]=[1,2,3,4,5,6];
console.log(z,x,y);// we'll see 1 2 4
let a = 8, b=6;
(() => {
    "use strict";
    [a, b]=[b, a]
})();
console.log(a)// so we make b = a and a = b
console.log(b)
//use destructuring assignment to assign variables form arrays, to assign variables form arrays
const source = [1,2,3,4,5,6,7,8,9,10];
function removefirsttwo(list) {
    const [ , , ...arr] = list// making 2 comas and ask them to do nothing for the first and the second elemant, but everything else in the arr variable 
    return arr;}
const arr = removefirsttwo(source);
console.log(arr);
console.log(source);
// the return is going to be a 3-10 in arr and 1-10 in the second because be banned every things else
const stats ={
    max: 56.78,
    standard_deviation: 4.34,
    median : 34.54,
    mode : 23.87,
    min : -0.75,
    average : 35.85
};
const half =(function(){
    return function half({max , min}){
        return (max + min)/ 2.0;
    };
})();
console.log(stats);
console.log(half(stats));
//use destructuring assignment to pass an object as a function's parameters 
// use with API calls and you can filter it to make what you want 
const person ={
    name :"zodic hadbro", 
    age : 56
}
const greeting = `hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greeting) /* any thing inside a c.brethses is java script*/
const result ={
    success: ["max-length","no-amd","prefer-arrow-functions"],
    failure:["no-var","var-on-top","linebreak"],
    skipped:["id-blacklist","no-up-keys"]
};
function makelist(arr){
    const resultdisplayarray = [];
    for (let i =0;i<arr.length;i++){
        resultdisplayarray.push(`<li class="test-warning">${arr[i]}</li>`)
    }
    return resultdisplayarray;
}
/*
makelist(result.failure) should return:
[`<li class="test-warning">no-var</li>`,
`<li class="test-warning">var-on-top</li>`,
`<li class="test-warning">linebreak</li>`]
 */
const resultdisplayarray = makelist(result.failure);
console.log(resultdisplayarray)
//create strings using template leterals 
//making creating complex strings easier
//you make them with you front and back teck``
// ---------working------but---come-back-to-it-later-----------------------------------------------
const createperson =(name, age, gender) =>{
    return{// this is an object
        name: name,
        age: age,
        gender: gender
    };
};
console.log(createperson("zodic hasbro", 56, "male"))
//----make it to----------------------------------------------------------------
const createperson =(name, age, gender) => ({name, age ,gender})
console.log(createperson("zodic hasbro", 56, "male"))
//write concise object literal declarations using simple fields  
                                                   
const bicycle ={
    gear: 2,
    setgear:function(newgear){
        "use strict";
        this.gear = newgear;
    }
};
bicycle.setgear(3);
console.log(bicycle.gear)
//-----make to----------------------------------------------------------------\
const bicycle ={
    gear: 2,
    setgear(newgear){
        "use strict";
        this.gear = newgear;
    }
};
bicycle.setgear(3);
console.log(bicycle.gear)
//write concose declarations functions 
class spaceshuttle {        
constructor(targetplanet){
    this.targetplanet = targetplanet;
}
}
var zeus = new spacehuttle('jupiter');
console.log(zeus.targetplanet)
//use class syntax to define a constructor function 
//------doing the same for the vegtable class---------------------
function makeclass(){
    class vegetable{
        constructor(name){
            this.name = name;
        }
    }
    return vegetable;
}
const vegetable = makeclass();
const carrot = new vegetable('carrot');
console.log(carrot.name);
//--------------------get back to it later---------------------
//done working in item in it
class book{
    constructor(author){
        this._author = author;
    }
    get writer(){
        return this._author;
    }
    set writer(updatedpauthor){
        this._author = updatedauthor;
    }
}
function makeclass(){
    class thermostat{
    constructor(temp){
        this._temp = 5/9*( temp - 32 )
    }
    get temperature(){
        return this._temp;
    }
    set temperature(updatedtemp){
        this._temp = updatedtemp;
    }
    }
    return thermostat;
}
const thermostat = makeclass();
const thermos =new thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp : thermos.temperature ;
// done working on 
//use getters and setters to control access to an object
// class object youu want to obtain vakues form the object and set  a value from a property from the object
// get an dset function
// get the value form the objects provate variieble without the user gettign access to the pricvate variable
// the private variable is this_.author 
//----------------------------defentely get back to it later-----------------------------------------------
import{capitalizestring} from "./string_function"
const cap = capitalizestring("hello!");
console.log(cap);
//---------------in the export side--------------------------------
export const capitaliizestring = str => str.toupperCase()
//understand the differeances between import and require
//now we use import and export the file and importserten function an dserten variable
const capitalizestring = (string) => {
    return string.charAt(0).touppercase() + string.slice (1); // this is going to capitralize only the first letter in the string 
}
export {capitalizestring};

export const foo = "bar";
export const bar = "foo";
//how to use exportto refuse a code block  
import * as capitalizestrings from "capitalizestrings";//start by import *as
//hoe to use * to import everything from a file, to import every thing from a file
export default function substract(x,y) {return x - y;}//fall back often use if you wenat to export only one thing from the file 
//create an export fallback with export default 
import subtract from "math_functions"; //only use a c.brakets if they are not default export 
subtract(7,4);
//import a default export
//-------------------------finally done-----------------------------------------------------------------------------------------