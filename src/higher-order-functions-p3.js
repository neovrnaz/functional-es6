/**********************************
 HIGHER-ORDER functions either:
 1. Accepts a function as an argument
 2. Returns a function
 **********************************/

// (1) addEventListener accepts a function as an argument
// (It's a higher order function):
document.addEventListener("click", amazingFunction);

function amazingFunction() {
  alert("Thank you for clicking!")
}

/*=== doubleMe is NOT a higher order function. ===*/
// 1. It does not accept a function as an argument
// 2. It does not return a function as an argument
function doubleMe(x) {
  return  x * 2;
}
// document.write(doubleMe(20));

/*=== transform doubleMe into a higher order function ===*/
// createMultiplierHOF is a higher order function because
// it returns a function
// (2) Returns a function
function createMultipierHOF(multiplier) {
  return function (x) {
    return x * multiplier;
  };
}

const doubleMeHOF = createMultipierHOF(2);
const tripleMeHOF = createMultipierHOF(3);
const quadrupleMeHOF = createMultipierHOF(4);
// document.write(doubleMeHOF(10));
// document.write(tripleMeHOF(10));


/*=== Examples of higher order functions ===*/
const myColors = ['red', 'orange', 'yellow'];

// By using higher order functions, the code is now flexible
// forEach is a higher order function, because it accepts a function as an argument
myColors.forEach(saySomethingNice)
myColors.forMap()


function saySomethingNice(color) {
  document.write(`The color ${color} is a great color.<br>`);
}
