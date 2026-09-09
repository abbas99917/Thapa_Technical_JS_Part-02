// Event Propagations
// event propagations refers to the process of how event propagate or travel throughout the DOM hierarchy

// in javascript there are two phase of event propagations
// 01-- Capturing Phase & 02-- Bubbling Phase

// 01-- Capturing Phase
// the event start from the root of the DOM and goes down to the target elements

// 02-- Bubbling Phase
// the event start from the bulling  target elements and bubble up to the root of the DOM.


// Bubbling Phase
// const targetElem = (e) =>{
// let target = e.target
// btn.removeChild(target)

// }
// let btn = document.querySelector(".buttons")
// btn.addEventListener("click",targetElem)

// Capturing Phase

const targetElem = (e) =>{
console.log(e.target)
// btn.removeChild(target)

}

 let btn = document.querySelector(".buttons")
btn.addEventListener("click",targetElem,true)