const places1=["tokyo","delhi","newyork"]
const places2=["lasvegas","nevada","boulder"]
places1.push(places2)
console.log(places1) //places1 takes in the whole new places 2 array as a single element
console.log(places1[3][1]) // nevada
const places3=places1.concat(places2) // another method: const places3=[...places1, ...places2]
console.log(places3) 
const another_array=[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const usable_array=another_array.flat(Infinity) // depth specified in brackets
console.log(usable_array)
console.log(Array.from("rayray")) // [ 'r', 'a', 'y', 'r', 'a', 'y' ]
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1, score2, score3)) //[ 100, 200, 300 ]