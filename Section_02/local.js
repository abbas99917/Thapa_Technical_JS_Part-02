// the localStorage objects allows you to save key/values pairs in the browser


// // how to add data from localStorage
// localStorage.setItem("student", "Abbas khan")

// let arr  = ["apple","mango","banana","peach"];
// localStorage.setItem("fruits", JSON.stringify("arr"))

// // how to read data from localStorage

// localStorage.getItem("")

//////////////////////////////////////////////////////////\
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")


let students = {
    name: "ali",
    marks: 999,
    isPassed: true,
    city: "peshawar",
    FatherName: "abdul wali",

}

// setItem in localStorage
const addItems=()=>{
    localStorage.setItem("studentRecord", JSON.stringify(students))
}


// getItem from localStorage
const getItems = () =>{
    JSON.parse(localStorage.getItem(students))
    console.log(students)
}


// removeItems from the lcoalStorage
const removeItems = () =>{
    localStorage.removeItem("students")
}
//
btn1.addEventListener("click",()=>{
    addItems()
})


//
btn2.addEventListener("click",()=>{
   getItems()
})

btn3.addEventListener("click", ()=>{
    removeItems()
})

