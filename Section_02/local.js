// // the localStorage objects allows you to save key/values pairs in the browser


// // // how to add data from localStorage
// // localStorage.setItem("student", "Abbas khan")

// // let arr  = ["apple","mango","banana","peach"];
// // localStorage.setItem("fruits", JSON.stringify("arr"))

// // // how to read data from localStorage

// // localStorage.getItem("")

// //////////////////////////////////////////////////////////\
// let btn1 = document.getElementById("btn1")
// let btn2 = document.getElementById("btn2")
// let btn3 = document.getElementById("btn3")


// let students = {
//     name: "ali",
//     marks: 999,
//     isPassed: true,
//     city: "peshawar",
//     FatherName: "abdul wali",

// }

// // setItem in localStorage
// const addItems=()=>{
//     localStorage.setItem("studentRecord", JSON.stringify(students))
// }


// // getItem from localStorage
// const getItems = () =>{
//     JSON.parse(localStorage.getItem(students))
//     console.log(students)
// }


// // removeItems from the lcoalStorage
// const removeItems = () =>{
//     localStorage.removeItem("students")
// }
// //
// btn1.addEventListener("click",()=>{
//     addItems()
// })


// //
// btn2.addEventListener("click",()=>{
//    getItems()
// })

// btn3.addEventListener("click", ()=>{
//     removeItems()
// })

const inputField = document.getElementById("inputfield")
const btn = document.getElementById("add")
const todoElement = document.querySelector(".todoElement")

// add todos


const getdataFromLocalStorage = () =>{
    JSON.parse(localStorage.getItem("mytodoList",))
}
 let  localTodoList  = getdataFromLocalStorage() || [];

 const addtodoDynamic = (curElem) =>{
     const div = document.createElement("div")
     div.classList.add("element")
     div.innerHTML = `<li>${curElem}</li> <button type="button" class="delBtn">Delete</button>`
     todoElement.append(div)
 }



const addTodos = (e) =>{
    e.preventDefault()
    if(inputField.value.trim()===""){
        return
    }

    const todoListValue  = inputField.value.trim();
  
    localTodoList.push(todoListValue)

  localStorage.setItem("mytodoList",JSON.stringify(localTodoList))

     const div = document.createElement("div")
     div.classList.add("element")
     div.innerHTML = `<li>${inputField.value}</li> <button type="button" class="delBtn">Delete</button>`
     todoElement.append(div)
     inputField.value = "";
}


const showtodoList=()=>{
    console.log(localTodoList)
    localTodoList.forEach((curElem)=>{
        addtodoDynamic()
    })
}
btn.addEventListener("click",(e)=>{
    addTodos(e)
})