const products = [
  {
    name: 'laptop',
    price: 3887,
    count: 5
  }, {
    name: 'desktop',
    price: 2434,
    count: 3
  }, {
    name: 'phone',
    price: 1337,
    count: 4
  }
];

// This is the old way of looping through the numbers array
// const doubledNumbers = [];
// for (let i = 0; i < numbers.length; i++){
//   doubledNumbers(numbers[i] * 2);
// }

// This way is much clearer and maintainable
const double = x => x * 2;
const totalProductsValue = products.map(item => ({
  name: item.name,
  totalValue: item.price * item.count
}));


console.log(totalProductsValue);
