// A side effect refers simply to the modification of some state

const square = (number) => number ** 2;

// Deterministic function - Always returns the same value for a particular input
const surfaceAreaCalculator = radius => 4 * 3.14 * square(radius);

// Non deterministic function - Won't always return the same value
Math.random();      // 0.6822304980945362
Math.random();      // 0.34656303876811245
Math.random();      // 0.44983037125501646

// surfaceAreaCalculator doesn't have any side effects
const areaOfFifty = surfaceAreaCalculator(50);

// console.log has the side effect of printing something onto the screen
// The things that functions return have nothing to do with the outside world
console.log("Hello")      // prints "Hello", but returns undefined

// The fewer side effects a function has, the better
