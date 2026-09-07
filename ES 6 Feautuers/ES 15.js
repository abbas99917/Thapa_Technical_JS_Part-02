//========================================
    // Destructuring - Modern JavaScript
//========================================

// Destructuring is a javascript experession that make it possible to unpack value from arrays, or properties from object, into distinct variable. that is we can extract data from arrays and object and assign them to variables.

// const number = [10,20,30]
// const first = number[0] // traditional way


// destructuring
// const [first,second,third] = number;
// console.log(first);

// ignoring values

// const [, , third] = number;
// console.log(third)


// swapping the values
// let a = 10;
// let b = 20;
// [a,b] = [b,a] // swaopping values (destructuring)
// console.log(a,b) // a: 20, b: 10

//* Desturucting objects

// const user = {
//     name: "ali",
//     age: 30
// }

// const {name,age}  = user;
// console.log(`my name is ${name} and my age is ${age}`)

//&%**  Spread operators

// copying array

// let arr  = [1,2,3,4]
// let newarr = [...arr]
// console.log(newarr)

//concenating arrays // combining arrays

// let arr2 = [5,6,7,8]
 
// let arr3 = [...arr, ...arr2]
// console.log(arr3)

// adding element to existing array

// const fruits = ["banana","peach","orange","grapes"]
// fruits.push(...["apple","mango"])
// console.log(fruits)


// traditional way
// const country = "pakistan"
// console.log(country.split(""))

// new way to doing it

// console.log([...country])


// traditional way


const sums =(a,b,c,d,e ) =>{
    return a+b+c+d+e;

}

console.log(sums(1,2,3,4,5))
// Rest parametors
// unique way
const sum = (...numbers) =>{

    console.log(typeof numbers)
return numbers.reduce((accum,curVal)=> (accum = accum + curVal))}

console.log(sum(1,2,3,4,5))