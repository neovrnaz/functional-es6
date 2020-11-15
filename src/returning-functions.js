const createPrinter = () => () => console.log('Hello')
// Both of these operate in the same way
const createPrinter2 = () => {
  return function() {
    console.log('Hello')
  }
}
console.log(createPrinter)


// Instead of repeating code here...
const double = x => x * 2;
const triple = x => x * 3;
const quadruple = x => x * 4;
// A first class function could be made to create these variations:

const createMultiplier = y => x => x * y;

const double2 = createMultiplier(2);
const triple2 = createMultiplier(3);
const quadruple2 = createMultiplier(4);

double(3)
