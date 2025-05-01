const name="ray"
const count=50
console.log(name+count+"value")
console.log(`Hello my name is ${name} and my age is ${count}`) // better syntax- string interpolation
const game = new String("va-lo")
console.log(game[0])
console.log(game.__proto__)
console.log(game.length) //4 for 'valo'
console.log(game.toUpperCase()) //VALO
console.log(game.charAt('2')) // l
console.log(game.indexOf('o')) //3
const newString=game.substring(3,5) // lo  (starting index, ending index) where endindex not included
console.log(newString)
const anotherString=game.slice(-2,4) //  output:l (starts from the end if index is negative) here its second last char
// works only if end> start if start>=end output=empty string 
console.log(anotherString)
const string1=" ray  "
console.log(string1)
console.log(string1.trim()) // trims starting and ending empty spaces
const url="https://ray.com/ishita%20singh"
console.log(url.replace('%20','-'))
console.log(url.includes('ray')) // true
console.log(game.split("-"))
console.log(game.blink()) // returns <blink>va-lo</blank>
console.log(game.at(-1)) // returns last character of string i.e. o
console.log(`I play ${game.repeat(3)}`)
