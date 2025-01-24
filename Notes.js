// JS notes from W3 Schools and KSU CS dept. Textbooks

// starting with some tidbits on JavaScript 
// from the CC120: Web Page Development textbook
// which can be found here: https://textbooks.cs.ksu.edu/cc120/5-js/02-basic-syntax/

/* TO START: JavaScript is quite similar to Java since Netscape was using Java during development.
/  It is an 'Interpreted' language thus requires an interpreter which executes upon an encounter. 
/  Javascript was also developed with respect to the **Selfobject-Orientation principle and scheme functionality.
/  Also, the end of an expression can either be determined with semicolons or a newline. 
/  
*/

// DATA TYPES 

// we can query the type of a value at runtime 
// with the typeof keyword as such:

typeof 3; 
typeof "Skippy";
typeof 1.5; 
typeof false; 

// notice how no main is necessary, this is because it is interpreted at run time m8
// 
// Now, for the data types themselves :  
// We have 
// - number: 
//         This includes floats, integers, NaN, and Infinity. 
//         All standard operations can be performed on any number
//          ---> (+, *, -, /)
//         These ops are safe as well as they will not throw an error. 
//         Like you can divide by 0 and you're good. 
//         The distinction between floats and ints are done internally as needed. 
// 
// - string: 
//         Strings can be declared literally using the classic single or double quotes. 
//         ES6 introduced '`' 'template literals' which have the following properties: 
//            Multiline Span, ${} - embed arbitrary JS inside (can pass objects thru also
//
//  - boolean:
//         Classic logical literals true and false. 
//         Classic operators: &&(and), ||(or), !(Not)
//
//  - undefined:  
//         A special value which maintains a value has not been set for an object.
//         
// - null:
//         While undefined operates similarly to undefined types, a null value must 
//         be explicitly supplied by the author. This implies intention, whereas undefined does not.
// - object:
//         Object types are used to store multiple values or functions similar to dictionaries.
// - symbol:
//         An identifier type, ---
// - var: '95 - 2015
//       Because JS utilizes dynamic typing during compilation, variable types are not necessary in source code.
//       This means most variables in JS  are declared with this keyword . 
// - let: 2015
//       Newer version of var introduced in ECS6, locally scoped variables rather than open. 
// - const: 2015
//         Unchangable constant variable which requires a value at declaration. 
//

// More Basic syntax :DDDDDDDD

//Type conversions:
//     JavaScript tries to use specified variables, which may require type conversion. 
//      IE: 

            "foo" + 3; // results in foo3 as it interprets the 3 as being concatenated to "foo"
            "foo" / 3; // Results in NaN
//      
//      If  using a different data type as a boolean, the validity will be interpreted as
//       such:  
//            null, undefined, 0 == false
//            All other values are true. 

// Control Flow Structures: 
// 
// you should know If, Else structure lol

// loops: 

while(/* POST CON (initially not met) */){
      // .. do the thing you want
}; 

do{
   // the thing! 
}while(/*POST CON (initially not met) */); 

// Use let for local scoping on i
for(let i = 0; i < 10; i++){ // essentially do thing while i < 10 
    // do the thing
}
// you can also loop through for .. in to traverse properties of an object
for( key in array){
   // check value o whatevs
}

for(value of array){
    // iterate through the values of an array and do something with it
}


// 
//  FUNCTIONS :DDD
// 

// Javascript uses first-class Functions. 
// This implies they can be assigned to a variable, passed as function args, 
// returned from other funcs, or even nested inside of other functions. 
// 
// This is some more functional paradigm behavior 

// to define a function you need the keyword ofc

function thing(a, b){
    return  a + b; 
}

console.log(thing(2, 4))// wow its being used :DD 

// ECS6 added a way similar to C# lambda syntax
// 
// The arrow functions are able to utilize the "this", "arguments", "super", and "new.target" keywords. 
// Arrow functions are not able to be used as constructors for a functions. 
let testFunc = (x, y) => x + y; // (..args) => { body }
console.log(testFunc(2,3)); 
// Function Arguments 
// 
//     These are stored in the arguments variable of the function, allowing 
//     for the user to iterate through the argumants with a for .. of loop. 

function sayHello(){ // ex from Nathan Bean on function arguments in ksu CC120
    for(let name of arguments){
        console.log('Hello, ${name}')
    }
}
// this allows for dynamic arguments to be passed in a function

// returns are able to return a value, function or undefined object. 

// Function Variables

// First order functions mean functions can be assigned to variables. 

// Functional Scope: 
//
//    Basically a new scope is made for each function body. 
//    Parent scope is still accessable. 

// Block Scope: 
// 
//    The imperative paradigm classic, best thing to exist. 
//    It allows functions and control flow objects to have their own scoping. 
//    This is why 'let' exists btw



// ARRAYS :DdDdDDD!!!

// These have full browser support
//To declare in literal syntax:
let arr = [1, 2, "foo", "bar", 3.2, null, ["Fizz", "buzz"]];
// w constructr is ```new Array()``` for object
// notice the array within the array, we can do n-dim jagged arrays which is wild
arr.sort(); 
arr.splice(2, 0, "Mario", "Luigi"); 

const array2 = arr.toReversed();
console.log(array2);  
const array3 = arr.toSorted(); 
console.log(array3); 

const array4 = arr.toSpliced(2, 0, "lemon", "grapefruit"); 
console.log(array4); 
//important functions of an array
let num = arr.length; 
arr.push(11); 
// adds an item to the array 
arr.pop(); 



arr.at(2); // gets item at given index of the array
// this is alsosupported by all modern browsers as of March 2022 - w3schools

arr.concat([5,6,7]); 
// this will concatenate the passed array to the caller array.
// item type doesn't matter
const fruits = ["banana", "orange", "apple", "grape"]; 
fruits.reverse(); 
fruits.shift(); 
fruits.unshift(); 
const vals = fruits.values(); 
console.log(fruits); 
const citrus = fruits.slice(1,2); 
console.log(citrus); 
//(ES6) you can copy items within from specific source and dest indices
fruits.copyWithin(2, 0); 
fruits.copyWithin(1,0,1); // copy from 1, elements from 0-1; 

let text = fruits.constructor; 
// the returned object is the function Array() { [ native code ]}

function myfn(total, num){
    return total-num; 
}
const nums = [4, 9, 20, 49]; 
const arrrrg = nums.map(Math.sqrt); // (ES5) maps an arbitrary function to the elements of an array. 
console.log(arrrrg.reduce(myfn)); 
console.log(arrrrg.reduceRight(myfn)); 
//to traverse entries (ES6)
const list = fruits.entries(); 
// can loop through with for .. of list
// ES6 to fill an element with a value, can be targeted as well by adding range indices
 fruits.fill("Mango"); 
 fruits.fill("Kiwi", 2, 4); 
// allows for a filter to be placed on an array  (ES5)
 const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
// (ES6) creates a new array obj from anything with a length property or iterable obj. 
Array.from("abcdefg"); 

let thing = fruits.join(" and "); // returns array as string, does not change original arr. 
let keys = fruits.keys(); // returns iterator containing keys of array. (ES6)
// find methods           returns                                                js Intro
//  - indexOf(value, index)         index of first element with specified value     ES5
//  - lastIndexOf(value, index)     index of last element with a specified value    ES5          
//  - find(fn)            value of first element that passes a test                 ES6
//  - findIndex(fn)       index of the first element that passes a test             ES6
//  - findLast(fn)        value of last element that passes a test                  ES2023
//  - findLastIndex(fn)   index of the last element that passes a test              ES2023
//  - some(fn)            check if values pass test, returns true. else false       ES3

// Sub arrays             returns                                                js intro
//  - flat((opt int to target an index))              concatenated sub array elements                         supported in 2020
//  - flatMap(fn)           new flat array after mapping all array elements         supported in 2020

// iterations                     returns                                                js intro
//  - forEach(fn)                 calls function for each element                       ES5
//  - includes(value, (opt pos))  returns true if an array has a specific val,
//                                returns false if not.                                 ES7
// 