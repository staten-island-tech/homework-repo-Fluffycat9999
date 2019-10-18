/* /////HW#1 - Type conversion in JS
let x = 2 + '2'; 
console.log(x); //shows 22 converts the string to a number

let x = 2 + 2 + '2'; 
console.log(x); //shows 42 adds the numbers in left to right order and then adds the string and makes it a number

let x = 2 + true; 
console.log(x); //shows 3 true=1 boolean converts to a number

let x = 2 +  true + '2'; 
console.log(x); //shows 32 converts boolean(true) to a number and adds it to 2 then converts the string to a number

let x = true + '2'; 
console.log(x); //shows true2 easier to convert boolean to string

let x = Number('2'); 
console.log(x); //shows 2 purposely trying to change string to number

let x = Number('Hello'); 
console.log(x); //shows NaN Not a Number

let x = Number('Hello'); 
console.log(typeof(x)); //shows number

let x = Boolean(1);
console.log(x); // shows true, all the non-zero numbers are true while 0 is false

let x = Boolean('Hello');
console.log(x); // shows true, only empty space, undefined and null gets false

let x = '';
if((x !== undefined) || ( x !== null) || ( x !== 0)) {

} // !== not equal to

if(x){

} // examine not undefined or empty string

if([]){

} // objects converted to boolean is always true */






/* /////HW#2- Switch statements
const color = 'red';

switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

let day;

switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;            
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`); */

//Ternary Operator and Switch Statements
/* let firstName = 'John';
let age = 18;

age >= 18 ? console.log(`${firstName} drinks beer.`) : console.log(`${firstName} drinks juice.`);

let drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

let firstName = 'Sarah';
let age = 17;

switch(true){
    case age < 13:
      console.log(`${firstName} is a young lady`);
      break;
    case age >= 13 && age < 20:
        console.log(`${firstName} is a teenager`);
        break;
    case age >= 20 && age < 30:
        console.log(`${firstName} is a young women`);
        break;
    default:
        console.log('She a boomer'); 
} */







/* /////HW#3 - Functions
//Function declarations

function greet(firstName = 'John', lastName ='Doe'){
    //if(typeof firstName === 'undefined'){firstName = 'John'}
    //if(typeof lastName === 'undefined'){lastName = 'Doe'}
    //console.log('Hello');
    return `Hello ${firstName} ${lastName}`;
}

//console.log(greet());

//Function expressions

const square = function(x){
    return x*x;
};

//console.log(square(8));

///Immediately invokable function expressions - IIFEs
/* (function(){
    console.log('IIFE Ran...');
})(); 

(function(name){
    console.log(`Hello ${name}`);
})('Brad'); 

//Property methods
const todo = {
    add: function(){
        console.log('Add todo..')
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}
todo.delete = function(){
    console.log('Delete todo...')
}

todo.add();
todo.edit(22);
todo.delete(); */





/* /////Array Practice
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];


    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's, use console.table to display the results
const oldInventors = inventors.filter(function({year}){
    return year >= 1500 && year <1600;
});
console.table(oldInventors);

    // Array.prototype.map()
    // 2. Give us an array of the inventor first and last names
    //console.table the results
const names = inventors.map(function({first, last}){
    return {first, last};
})
console.table(names); */




/* /////HW#4 - Block Scope with let const
//Global Scope
var a = 1;
let b = 2;
const c = 3;

function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope: ', a, b, c);
}
test(); */

/*if(true){ /// Block scope inside curly brackets
    var a = 4; //changes the global scope
    let b = 5;
    const c = 6;
    console.log('If Scope: ', a, b, c);
}

for(let a = 0; a < 10; a++){
    console.log(`Loop: ${a}`);
}
console.log('Global Scope: ', a, b, c); */
//let and const have a block level scope, var has a function scope




/////HW #6 MATH METHODS
/* const num1 = 100;
const num2 = 50;
let val;

//Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2; 
val = num1 / num2;
val = num1 % num2;

//Math object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 33, 4,1,55 ,6,3,-2);
val = Math.max(2, 33, 4,1,55 ,6,3,-2);
val = Math.random();
val = Math.floor(Math.random() * 20 + 1);

console.log(val); */



/////HW #7 SPREAD OPERATOR and SPREAD
/*... lets you take everything in an array without having to copy everything over, your can also push something into it*/
/* const features = ['something here', 'blah'];
const specialty = ['more stuff', 'blah'];
const stuff = [...features, 'something', ...specialty]; */

/* const heading = document.querySelector('.jump');
heading.innerHTML = sparanWrap(heading.textContent);


function sparanWrap(word){
    return [...word].map(letter => `<span>${letter}</span>`).join('');
} */ // this goes into the html







/////HW #8 ARRAY/OBJECT DESTRUCTURING
/* const alphabet = ['A', 'B', 'C','D','E', 'F'];
const numbers = ['1', '2','3','4','5','6'];

/* const a = alphabet[0];
const b = alphabet[1]; */
/*const [a,,c, ... rest] = alphabet;

const newArray = [...alphabet,...numbers];

console.log(a);
//console.log(b);
console.log(c);
console.log(rest);
console.log(newArray); */

/* function sumAndMultiply(a,b){
    return [a+b, a*b, a/b];
}

const [sum, multiply, division = 'No division'] = sumAndMultiply(2,3);
//console.log(array);
console.log(sum);
console.log(multiply);
console.log(division); */

const personOne = {
    name: 'Kyle',
    age: 24,
    address: {
        city: 'Someshere',
        state:'One at them'
    }
}

const personTwo= {
    //name: 'Sally',
    age: 32,
    favoriteFood: 'Watermelon',
    /* address:{
        city: "Somewhere else",
        state: "Another one of them"
    } */
}

/* const {name:firstName, age, favoriteFood = 'rice'} = personTwo

console.log(firstName);
console.log(age);
console.log(favoriteFood); */

/* const {name:firstName,... rest} = personTwo

console.log(firstName);
console.log(rest); */

/* const {name:firstName,address: {city}} = personTwo

console.log(firstName);
console.log(city); */

/* const personThree = {...personOne, ...personTwo};
console.log(personThree); */

function printUser({name, age, favoriteFood = 'Watermelon'}){
    console.log(`Name is: ${name}. Age is ${age}. Food is ${favoriteFood}`);
}
printUser(personOne);