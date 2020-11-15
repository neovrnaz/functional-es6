const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

function getRandomArbitrary(min, max) {
  return Math.random * (min - max) + min
}

const combine2And3 = func =>
  func(2, 3);

combine2And3(add); // 2 + 3
combine2And3((x, y) => x + y);
combine2And3(subtract) // 2 - 3
combine2And3(Math.max) // 3


