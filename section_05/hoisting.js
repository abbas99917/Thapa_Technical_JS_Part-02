/*hoisting is a javascript machenism where variable and functions are declared or moved to the top of
their scop bofore code executions*/


// let newVal = 20;

// greet = () =>{
//     console.log("this is super simple dev")
// }
// console.log(newVal)
// greet()

/*lexicalScope: lexical scoping is a way of managing variable access in javascript based on the physical
structure of code */

/*key concept: the scope of varaible is determined by is positions in the source code especially where it is declared*/ 

// let a = 10;
// let b = 20;
// what will the value of b

/*Scope Chaining: cannot access children data in parent but children can access parent data */ 

let globalVariable = "i am global varaible"

function myFunctions(){
    const functionVariable = "i am function variabl"

    if(true){
        const blockvariable = "i am block variable"
        console.log(blockvariable) // i am block variable
        console.log(functionVariable) // i am function variable
        console.log(globalVariable) // i am global variable

    }
    // console.log(blockvariable) // Error: blockvariable is not defined

}
myFunctions()