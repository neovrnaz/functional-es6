const sayHello = name => console.log('sayHello' + name);
const sayHello2 = sayHello;

sayHello2("Paul")

const myFunction = true
    ? () => console.log('First option')
    : () => console.log('Second option');

const DEVELOPMENT = true

const fetchDataReal = () => {
  // Time intensive operations here
}

const fetchDataFake = () => ({
      name: 'Richard Tea',
      age: 42,
});

const fetchData = DEVELOPMENT
      ? fetchDataFake()
      : fetchDataReal();
