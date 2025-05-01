// primitive -stack
// non primitive -heap
let myName="ray"
let anothername=myName
anothername="nimit"
console.log(anothername)
console.log(myName)
let user1={
    email: "ray123@gmail.com",
    upi:"6374@pthdfc"
}
let user2=user1
user2.email="nimki@yahoo.com"
user2.upi="nimmi@pnb"

console.log(user1)
console.log(user2) // returns nimki one in both cases since its call by reference, original value also gets changed