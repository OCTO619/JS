const score=new Number(100)
console.log(score)
console.log(typeof(score))
console.log(score.toString().length)
console.log(typeof(score)) //object
console.log(score.toFixed(2)) // 100.00
const num=29.667
console.log(num.toPrecision(2)) // 30 if num=123.89 and toPrecision(3) then output=124
const num2=1000000
console.log(num2.toLocaleString()) // 1,000,000 us standard 
console.log(num2.toLocaleString('en-IN')) // 10,00,000


console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6)) //5
console.log(Math.ceil(4.6)) // 5
console.log(Math.floor(4.6)) // 4
console.log(Math.min(2,-4,7,5,9)) // -4
console.log(Math.random()) // random random value from 0 to 1
console.log((Math.random()*10) +1) // returns random value from 1 to 10 including decimals
console.log(Math.floor(Math.random()*10) +1) // returns random rounded off(floor) value from 1 to 10 (excluding decimals)
const min =10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min) // returns random value from 10 to 20

