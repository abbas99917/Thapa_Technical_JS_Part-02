/** Clouser: a clouser is  created when an inner functions has access to the  variable of its outer functions even after the outer functions has finished executing */

//Closure tab banta hai jab ek inner function, apne outer function ke variables ko yaad rakhta hai — even jab outer function execute ho chuka ho.

function outer() {
  let name = "Ali";

  function inner() {
    console.log(name);
  }

  return inner;
}

const myFunc = outer();

myFunc(); // Ali
