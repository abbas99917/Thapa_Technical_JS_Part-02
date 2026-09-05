// this object

// let obj = {
//     name: "ali",
//     id: 5,
//     greet: function(){
//         console.log(this) // this key word refer to the same object (obj)
//     }
// }
// // obj.greet()
// let obj ={
//     name: "ali",
//     id: 6,
//     greet: () =>{
//         console.log(this)
//     }
// }

// obj.greet()

// accessing object keys

let products = {
    productName: "laptop",
    quantity: 12,
    Price: 55555,
    color: "silver",
}

// object.keys() to access product keys
// let key = Object.keys(products)
// console.log(key)

// // object.values(): to access product values
// let values = Object.values(products)
// console.log(values)

// object.entries();
// let entreis = Object.entries(products)
// console.log(entreis)

// intervie questions

let target = {a:1,b:2}
let source = {b:3,c:4}

let mergobject = Object.assign({},target,source)
console.log(mergobject)