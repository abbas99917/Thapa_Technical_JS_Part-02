// callback Functions
// a callback function is a functions passed as an argument to another functions and is executed after completiion of a task

// function processUserInput(name,callback){
//     console.log("receive input:" + name)
//     callback(name)
// }
// functions is to be used callback
// function getUser(name){
//     console.log(`hello! ${name}`)

// }
// processUserInput("umair",getUser)

/*      HIGHER ORDER: 
HIGHER ORDER functions aisy functions hoty hain jo ham kisi dusry functions mai as a argument pass karain ya kisi function ko return karain   */ 

// Example:
// Higher order functions
function greet(name){
    console.log(`hello! ${name}`)
   
}
function processUser(callback){
 callback("ali")
}

processUser(greet)
// Yahan processUser ek Higher-Order Function hai kyun ke ye ek function (greet) ko argument ke taur par receive kar raha hai.

// 2. Callback kya hota hai?
// Jo function hum kisi doosre function ko argument ke taur par pass karte hain, usay callback function kehte hain.

processUser(greet) // this is callback funtions



