
// localStorage
// current date and time
// new Date(): create a date object representing the current date and time.

// const newDate = new Date()
// console.log(newDate)

// setTimeout()
// setInterval()
// clearInterval()


// setTimeOut
// setTimeout(()=>{
//     console.log("this is my car")
// },5000)

// setInterval()

// let clearInterVal = setInterval(()=>{
//     console.log("hello world")
// },2000)
// clearInterval(clearInterVal)



const curTime = () =>{
    let time = new Date().toLocaleTimeString();
    console.log(time)
    document.querySelector(".clock").innerHTML = time;
  
}
setInterval(() => {
    curTime()
    
}, 1000);