/*
var: globally scoped,
let: block scoped, values can be reassigned
const: block scoped, values can not be reassigned

primitive data types in js:
Strings, Boolean, Numbers, Null, Undefined, Symbol


const name = "Poatan";
const age = 40;
const isChampion = true;
const titleDefences = null;
const retirement = undefined;
let ducks;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isChampion);
console.log(typeof titleDefences); // Null is not really an object
console.log(typeof retirement);
console.log(typeof ducks);


let fighter = "Gaethje";
let champStatus = "Not a champ";
//String Concatenation
console.log('The UFC fighter ' + fighter + ' is ' + champStatus);
//Template string
console.log(`The UFC fighter ${fighter} is ${champStatus}`);


//Some useful string methods/properties

const s = "Hello World!";

console.log(s.length); //The length property is used to find the length of a string
console.log(s.toUpperCase()); //The toUpperCase method is used to turn the string into all upper case characters
console.log(s.toLowerCase()); //This method is used to turn the string to all lowercase letters.
console.log(s.substring(0,5)); //The substring method is used to create substrings out of strings. It takes in two indexe's as parameters
const c = s.split(''); //The split method uses a delimeter to split the string. And returns an array.
console.log(c);


//Arrays

const arr1 = new Array('hello', 1, 'wow', 'javascript', 2); //We can create an array using a constructor
const arr2 = ['meeting', 'akxr', 3, 'fruits', 22]; //Or just simply by using square brackets

//Arrays in javascript are kind of similar to lists in python.
//even though I am using a const with the array i can still modify it but I can't reassign it 

//some useful array methods

arr2.push('amitesh'); //the push method is used to push or insert items into the array but at the very back
arr2.unshift('haha'); //the unshift method is used to push elements at the very start of the array.

arr2.pop(); //pops the last element from the array
console.log(arr2);

console.log(arr2.indexOf('amitesh'));


//Objects are similar to python dictionaries 

const fighter = {
    firstName: "Alex",
    lastName: "Periera",
    gotoName: "Poatan",
    height: "6'2",
    weight: 205,
    fightingOutOf: "Sao Paulo, Brazil",
    gym: "Chute Box",
    record : ["Izzy", "Ankalaev", "Jiri", "Hill", "Khalil", "Jan", "Strickland"]
}

console.log(fighter.firstName); //We can access the values inside an object using the '.' dot operator
console.log(fighter.record);


//loops

for(let i = 0; i < 10; i ++) {
    console.log(i);
}
let i = 0;
while(i < 10) {
    console.log(i);
    i++;
}

const arr = [3, 4, 5 ,3 ,4, 5];
//For of loops 
for(let value of arr) {
    console.log(value);
}

//higher - order loops 
// forEach, map, filter
arr.forEach(function(value){
    console.log(value);
})

//map and filter return an array

*/
