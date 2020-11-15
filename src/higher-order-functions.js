/*
A higher order function is a function that can take another function
as an argument, or that returns a function as a result.

It's called a higher order function because because instead of
strings, numbers, or booleans, it goes higher to operate on functions.
*/

/*
Instead of including the argument checking logic inside of the divide
function like shown here, another function can be created instead

const divide = (x, y) => {
  if (y === 0) {
    console.log("Error: dividing by zero")
    return null;
  }
  return x / y;
};
*/

const divide = (x, y) => x / y;
const secondArgumentIsNotZero = func =>
    (...args) => {
      if (args[1] === 0) {
        console.log("Error: dividing by zero")
        return null;
      }
      return func(...args)
    };

const divideSafe = secondArgumentIsNotZero(divide)
console.log(divideSafe(8, 0)) // Error
console.log(divideSafe(8, 2)) // 4
