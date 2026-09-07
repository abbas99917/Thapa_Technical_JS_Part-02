// ES 18

// REST Operators with object

// const students = {
//     name: "muhammad",
//     age: 30,
//     isPassed: true
// }

// const {age, ...others} = students

// console.log(others)
// console.log(age)

// object and spread operators

// let obj1 = {a: 10, b: 20, c: 30}
// let obj2 = {c: 50, d: 60}
// const newObj = {...obj1 , ...obj2}
// console.log(newObj)

let arr = [9,10,44,2,56,123,111,105]
// arr.sort((a,b)=> a-b);
arr.sort((a,b)=> b-a);
console.log(arr)