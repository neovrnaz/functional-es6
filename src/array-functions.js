const double = x => x * 2;
const addOne = x => x + 1;
const subtractOne = x => x - 1;
const triple = x => x * 3;
const addFive = x => x + 5;

let myNumber = 1;

// Instead of having hundreds of lines like we see here...
const doubled = double(myNumber)
const minusOne = subtractOne(myNumber)

// we can instead define an array with all of the functions like this:
const functionsArray = [double, addFive, addOne, subtractOne, triple, addFive]
const addAndDouble = [addOne, double]
const addAndSqrt = [addOne, addOne, addOne, Math.sqrt]

addAndDouble.forEach(func => myNumber = func(myNumber));
console.log(myNumber);
