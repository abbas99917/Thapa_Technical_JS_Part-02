// document.getElementById("btn").onclick = () =>{
// alert("welcom to js course part two")
// }

document.getElementById("btn").onclick = function(){
    alert("this is traditional technique")
}

document.getElementById("btn").addEventListener("click", ()=>{
    alert('welcome to my js course')
})