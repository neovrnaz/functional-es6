// 1. Functions can be assigned to variables
// 2. Functions can be passed as arguments to other functions
// 3. Functions can be returned from other functions

// Examples

// 1. Functions can be assigned to variables
const sayHello = () => 'hello';
console.log(sayHello());

// 2. Functions can be passed as arguments to other functions
const sayHelloToPerson = (greeter, person) => {
  return greeter() + ' ' + person;
}
console.log(sayHelloToPerson(sayHello, 'jack'))

// 3. Functions can be returned from other functions
const greeterMaker = greeting => {
  return person => {
    return greeting + person;
  }
}
const sayHiToPerson = greeterMaker("Hi")
const sayHola = greeterMaker("Hola")
console.log(sayHiToPerson("jane"))
console.log(sayHola("bob"))
