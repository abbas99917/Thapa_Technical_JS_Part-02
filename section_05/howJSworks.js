// synchronous
// execute code line by line

// let func2  = () =>{
//     console.log("second functions")
// }

// let func1 = () =>{
//     console.log("first functions")
//     func2()
//     console.log("end")
// }
// func1()

// asynchronous

let getConsole1 = () =>{
    setTimeout(()=>{
           console.log("this is first functions")
    },2000)
}
let getconsole2 = () =>{
    console.log("this is second functionss")
}
getConsole1()
getconsole2()

