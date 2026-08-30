const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")

const gradient = document.querySelector(".gradient")

let rgb1 = "#000"
let rgb2 = "#fff"

// generate Hex values ///////////////////////////////////////////////
const hexValue =()=>{
    let hexCode = "0123456789abcdef"
    let colors = "#"
    for(let i = 0; i<6; i++){
    colors = colors + hexCode[Math.floor(Math.random() * 16)];
   }
   return colors
}
// hndle button two ==========================================
const HandleBtn1 = () =>{
 rgb1 = hexValue()
console.log(rgb1)
document.body.style.backgroundImage = `linear-gradient( 90deg, ${rgb1},${rgb2}`
gradient.innerHTML = `background-image = Linear-gradient to right ${rgb1},${rgb2}`
btn1.innerHTML = rgb1;


}


// handle button two =========================================
const HandleBtn2 = () =>{
rgb2 = hexValue()
btn2.innerText = rgb2;
console.log(rgb2)
document.body.style.backgroundImage = `linear-gradient(90deg, ${rgb1},${rgb2}`
gradient.innerHTML = `background-image = Linear-gradient to right ${rgb1},${rgb2}`
}


// copy text

gradient.addEventListener("click",()=>{
 navigator.clipboard.writeText(gradient.innerText)
})


// events
btn1.addEventListener("click", HandleBtn1)
btn2.addEventListener("click", HandleBtn2)