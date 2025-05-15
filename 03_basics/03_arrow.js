const user={
    username: "ray",
    price: 599,

    welcomeMessage: function(){
        console.log(`${this.username}, WELCOME TO WEBSITE`)
        console.log(this)
    }
}
// this-> current context
user.welcomeMessage()
user.username="nim"
user.welcomeMessage()
console.log(this) // {}

function one(){
    let username="ray"
    console.log(this.username) 
}
one() // undefined
// const two=function(){
//     let username="ray"
//     console.log(this.username) 
// }
// two() // undefined
const two=()=>{
    let username="ray"
    console.log(this) 
}
two() 
// explicit return 
// const addTwo=(num1, num2)=> {
//     return num1+num2
// }  

// implicit return
const addTwo=(num1, num2)=> num1+num2
console.log(addTwo(3, 4))
const myArray=[2, 3, 4, 5]
myArray.forEach(()=>{})


