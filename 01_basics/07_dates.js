let d=new Date() 
console.log(d.toString()) // Fri May 02 2025 16:40:10 GMT+0000 (Coordinated Universal Time)
console.log(d.toISOString()) // 2025-05-02T16:42:06.621Z
console.log(d.toJSON()) // 2025-05-02T16:42:06.621Z
console.log(d.toLocaleDateString()) // 5/2/2025
console.log(d.toLocaleString()) // 5/2/2025, 4:42:06 PM
console.log(d.toTimeString()) // 16:42:06 GMT+0000 (Coordinated Universal Time)
console.log(typeof(d)) //object
let t=new Date(2023,0,23)
console.log(t.toLocaleString()) // 1/23/2023, 12:00:00 AM
console.log(t.toDateString()) //Mon Jan 23 2023
let n=new Date(2023,0,23,5,3)
console.log(n.toLocaleString()) // 1/23/2023, 5:03:00 AM
let m=new Date('2025-05-02') 
console.log(m.toLocaleString()) // 5/2/2025, 12:00:00 AM
let myTimeStamp=Date.now()
console.log(myTimeStamp) // returns a value in ms like 1746204817255
console.log(m.getTime()) // which can be compared with this 1746144000000 
// eg can be used in building projects like airbnb date booking etc
console.log(Math.floor(Date.now()/1000))
let newdate= new Date()
console.log(newdate.toLocaleString('default',{
    weekday:'long'
})) // Friday
