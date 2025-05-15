// Immediately Invoked Function Expressions (IIFE) 
// to immediately execute function and prevent global scope pollution
// function code(){
//     console.log(`DB CONNECTED`)
// }
// code()
(function code(){ // named iife
    console.log(`DB CONNECTED`)
})(); // (function definition)(for execution)
// semicolon needed here
(()=>{
    console.log(`DB CONNECTED 2`)
})();
((name)=>{
    console.log(`DB CONNECTED TO ${name}`)
})('ray')


