// singleton
//Object.create
// object literals
//key-value pairs : string->any type of data value
const mySym=Symbol("key1")
const Jsuser={
    name:"Rayray",
    age:21,
    location:"Delhi",
    [mySym]:"mykey1", // square brackets to recognize mySym as a symbol and not as a string
    email:"rayray2103@gmail.com",
    isLoggedIn:false,
    lastLoginDays : ["Monday", "Saturday"]
}
console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser[mySym])
Jsuser.email="rayray@chatgpt.com"
console.log(Jsuser.email)
//Object.freeze(Jsuser) // now any changes applied to Jsuser will not be made
Jsuser.greeting1=function(){
    console.log("Hello JS user")
}
Jsuser.greeting2=function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(Jsuser.greeting2())
console.log(Jsuser.greeting1) // undefined - since Jsuser object has been freezed 
