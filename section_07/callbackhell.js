// const callbackhell = () => {
// //   setTimeout(() => {
// //     console.log("my first name is abbas");
// //   }, 1000);
// //   setTimeout(() => {
// //     console.log("my second name is khan");
// //   }, 1000);
// //   setTimeout(() => {
// //     console.log(" i live in pakistan");
// //   }, 1000);
// //   setTimeout(() => {
// //     console.log(" i am intermediat student");
// //   }, 1000);
// //   setTimeout(() => {
// //     console.log(" i am  like coding");
// //   }, 1000);
// //   setTimeout(() => {
// //     console.log(" i am frontend develper");
// //   }, 1000);
// // };

// // console.log(callbackhell());


// // Promesis in JavaScript

// // A promesis is like a placeholder fo the result  of an asynchronous operations

// // promesis ----------> pending ----------> settle
// // resove ===> we will get the value 
// // reject ===> we will get the error
// // let studentName = "Abbas"
// // const pr = new Promise((resolve, reject)=>{
// //     setTimeout(() => {
// //         reject("sorry i can't")
// //     }, 2000);
// // })
// // pr.then((res)=>{
// //  console.log(res)
// // }).catch((rej)=>{
// // console.log(rej)
// // }).finally(()=>{
// //     console.log("you are comming or not but i am comming")
// // })


// //
// let studentName  = "muhammad"
// const enrollStudent = (studentName) =>{
//     return new Promise((resolve, reject)=>{
//        setTimeout(() => {
//         const isSuccesfull = Math.random() > 0.4
//         if(isSuccesfull){
//          resolve(`Enrollment succesfull for ${studentName}`)
//         }else{
//          reject(`Enrollment failed for ${studentName} please try again`)
//         }
//      },)
//        },2000);
// }
// enrollStudent(studentName).then((res)=>{
//     console.log(res)
// }).catch((rej)=>{
//     console.log(rej)
// }).finally(()=>{
//     console.log("Enrollment process successfully done")
// })

// promesis methods

const promis1 = new Promise((resolve)=>{
   setTimeout(() => resolve("first"),2000);
})

const promis2 = new Promise((resolve,reject)=>{
    setTimeout(() =>resolve("second"), 1000 );
})
    
const promis3 = new Promise((resolve)=>{
    setTimeout(() =>resolve("third"), 3000);
})

// all method
// Promise.all([promis1,promis3,promis2]).then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// })


// allsettled method
Promise.allSettled([promis1,promis2,promis3]).then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})

// race method
Promise.race([promis1,promis2,promis3]).then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})