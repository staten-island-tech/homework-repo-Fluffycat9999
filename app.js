/* /////HW#1
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






/* /////HW#2
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







/* /////HW#3
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