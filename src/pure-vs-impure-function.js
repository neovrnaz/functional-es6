/**********************************
 PURE functions
 1. Given the same input will always return the same output
 2. Have no side effects (Only access the data that is passed to it).
**********************************/

let str = 'Some String';

let f_pure = function(_input) {
  let _output = _input.toUpperCase();
  return _output
}

let f_impure = function(_input) {
  let _output = _input.toLowerCase();
  str = _output;
  return _output
}

// If you print out f_impure function, then a side effect is
// created because you're accessing the str variable outside of the scope
let out = f_pure(str);
console.log(out, str);
