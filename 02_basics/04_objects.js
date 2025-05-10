// const hingeUser=new Object() singleton object 
// console.log(hingeUser) // {}
const hingeUser={}
hingeUser.id="123abc"
hingeUser.name="Sammy"
hingeUser.isLoggedIn=false
console.log(hingeUser)
const regularUser={
    email:"rayray2103@gmail.com",
    fullname:{
        userfullname:{
            firstame:"ray",
            lastname:"singh"
        }
    }
}
console.log(regularUser.fullname?.userfullname.lastname) // ? used for checking existence of fullname
console.log(regularUser.fullName?.userfullname) // undefined as fullName doesnt exist
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1, obj2}
// console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } 
// const obj3=Object.assign({}, obj1, obj2)
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj3={...obj1, ...obj2}
console.log(obj3)
// array of objects from database
const users=[
    {
        id:1,
        email:"rayray_2103@gmail.com"
    },
    {
        id:2,
        email:"ray_2103@gmail.com"
    },
    {
        id:3,
        email:"ra_2103@gmail.com"
    }
]
console.log(users[1].email) // ray_2103@gmail.com
console.log(Object.keys(hingeUser)) // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(hingeUser)) // [ '123abc', 'Sammy', false ]
console.log(Object.entries(hingeUser)) // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ] 
// makes it into an array of entries of key-value pairs
console.log(hingeUser.hasOwnProperty('isLoggedIn')) // true
console.log(hingeUser.hasOwnProperty('isLogged')) // false
// destructuring of object
const course ={
    coursename:'MusicwithRay',
    price:'999',
    instructor:'RaySingh'
}
//course.instructor
const{instructor}=course // instructor can now be directly output
console.log(instructor) // RaySingh 
//react
const navbar=({company})=>{

} 
navbar(company="FR")
// for json format refer https://api.github.com/users/hiteshchoudhary


