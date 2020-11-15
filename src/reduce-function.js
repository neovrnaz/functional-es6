const numbers = [40, 24, 13, 8, 84, 38, 58]

const sum = numbers.reduce((acc, x) => {
  console.log(`acc is ${acc}`);
  console.log(`x is ${x}`);

  return acc + x;
}, 0)

console.log(sum);
