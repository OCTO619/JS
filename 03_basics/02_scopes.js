// let a=10
// const b=20
// var c=30

// console.log(a)
// console.log(b)
// console.log(c)
if (true){
    let a=10
    const b=20  
    var c=30 
}
// console.log(a) // error
// console.log(b) // error
// console.log(c) // 30 block scope shouldnt be avialble outside the block 

function one(){
    const username="ray"
    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website) // error: website is not defined 
    two()
}
one()
// child function can access variables of parent function but not vice-versa

// Hoisting

console.log(addone(5)) // 6
function addone(num){
    return num+1
}

console.log(addTwo(5)) // error
const addTwo=function(num){
    return num+2
}
