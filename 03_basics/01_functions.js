function sayMyName(){
    console.log("r")
    console.log("a")
    console.log("y")
}
//sayMyName()
// function addTwoNumbers(number1, number2){
//     console.log(number1+number2)
// }
addTwoNumbers(3, 4) // 7
addTwoNumbers(3, "4") // 34
// const result=addTwoNumbers(3, 5)
// console.log("Result: ", result) // Result: undefined
function addTwoNumbers(number1, number2){
    // let result=number1+number2
    // return result
    // console.log("ray") // anything written after returning doesnt get executed
    return number1+number2
}
const result=addTwoNumbers(3, 5)
console.log("Result: ", result) // Result: 8
function loginUserMessage(username){
    if(username===undefined){ // or if(!username)
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("ray"))
console.log(loginUserMessage()) // please enter a username

function calculateCartPrice(...num1){ // ... -> rest operator
    return num1
}
console.log(calculateCartPrice(200, 400, 500))
const user={
    username:"ray",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)
const myArray=[ 200, 300, 400]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray))
