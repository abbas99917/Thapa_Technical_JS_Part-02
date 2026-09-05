// const student = {
//     name: "ali",
//     id: 45,
//     isPassed: true,
//     greet: function (){
//         console.log("welcome to world best course")
//     },
//     marks: 999,
// }


// student.bloodGroup = "B+"
// console.log(student.greet())
// console.log(student)
// console.log(student["name"])    

// we can add dynamic key in object

// let idtype = "studentID";

// const std = {
//     [idtype]: "a1123234",
//     name: "umar",
//     isPassed: true,
//     marks: 990,
//     greet: function (){
//         console.log(`Hy, My ${idtype} is  ${std[idtype]} and my name is ${std.name}`)
//     }
// }
// std.greet()

// object.assign(): is use to copy properties from one are more source object to a target object

let obj = {name: "ali", id: 5,}
console.log(obj)
let newObj = Object.assign({},obj)
// newObj.name = "umar"
console.log(newObj)