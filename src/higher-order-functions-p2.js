const higherOrderFunction = func => {
  console.log("I come from a higher order function");
  if (func) {
    func();
  }
}

const saySomething = () => {
  console.log("hello there");
}

// higherOrderFunction(saySomething());
//
// saySomething(() => console.log("This is an anonymous function"));

const multiplier = (factor) => {
  return x => x * factor;
}

const double = multiplier(2);
const triple = multiplier(3);
