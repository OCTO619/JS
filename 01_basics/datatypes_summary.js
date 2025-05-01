// Primitive datatypes
// 7 types (call by value-copy allocated not memory address, changes made will be applied to the copy)
// : String, Number, Boolean , null , undefined, symbol, BigInt

// nON PRIMITIVE (call by reference- memory address directly allocated)
// Array, Objects, Functions

// JS -dynamically typed lang meaning type of variable determined during runtime not during compilation
// no need to explicitly declare type of variable eg. const score = false / const score = 100
 const id=Symbol('123')
 const anotherId=Symbol('123')
 console.log(id)
 console.log(anotherId)
 console.log(id===anotherId)
 const bigNumber= 3458584854355894768n

 const heros= ["ironman", "thor", "hulk"]//array
 let myObj={
    name:"ray",
    age:21, // whatevers inside the curly braces is object
 }
const myFunc=function(){
console.log("ray")
}
console.log(typeof myFunc) // function
// https://262.ecma-international.org/5.1/#sec-11.4.3
