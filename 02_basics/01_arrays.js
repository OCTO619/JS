 const myArr=[0,1,2,3,4,5,true,"ray"]
console.log(myArr[0])
const myHeros=["thor","hulk","ironman","blackwidow"]
const newArr= new Array(1,2,3,4)
// array methods
myArr.push(6)
console.log(myArr)
myArr.pop()
myArr.unshift(0)
myArr.shift()
console.log(myArr.includes(9)) // false
console.log(myArr.indexOf(9)) // -1
const NewArr=myArr.join()
console.log(NewArr) // 0,1,2,3,4,5,true,ray
console.log(myArr)
console.log(typeof(NewArr)) // string
// slice splice
console.log("A ", myArr)
const myn1=myArr.slice(1,3) // starting from index 1 not including 3 
console.log(myn1) //output:[1,2]
console.log("B ", myArr)
const myn2=myArr.splice(1,3) // only difference from slice- it includes 3 
console.log(myn2) //output:[1,2,3]
console.log("C ",myArr) //[0, 4, 5, true, 'ray'] 
//splice modifies original array too
// original array remains the same in slice operation