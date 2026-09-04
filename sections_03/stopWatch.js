const rating = document.querySelector(".rating")
const start = document.getElementById("start-btn")
const stop = document.getElementById("stop-btn")
const reset = document.getElementById("reset-btn")
const getTime = document.getElementById("get-time")
const curValue = document.getElementById("curValue")
const clear = document.getElementById("clear-time")

let curTime = 0;
let intervalID;

// starttime()
const startTime = () =>{
intervalID = setInterval(() => {
    rating.innerHTML = curTime++;
 }, 1000);
}
// stoptime()
const stopTime = () =>{
    clearInterval(intervalID)
}
// reset time()

const resetTime  = () =>{
    curTime = 0;
    rating.innerHTML = curTime;
    clearInterval(intervalID)

}

// getTime()

const gettingTime = () =>{
 const newpara = document.createElement("p")
 newpara.innerText = `the stop time is ${curTime -1}`
 curValue.append(newpara)
}

// cleartime()
const clearTimes = () =>{
    curValue.innerHTML = "";
}



clear.addEventListener("click",clearTimes)
getTime.addEventListener("click",gettingTime)
reset.addEventListener("click",resetTime)
stop.addEventListener("click",stopTime)
start.addEventListener("click",startTime)