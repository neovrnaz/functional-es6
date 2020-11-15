const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const isEven = x => x % 2 === 0;

const evenNumbers = numbers.filter(isEven);

const words = [
    'hello',
    'goodbye',
    'the',
    'antarctica'
]

const createLengthTest = minLength =>
        word => word.length > minLength;

// Before
// const isLongerThanFive = word => word.length > 5;
// After
const isLongerThanFive = createLengthTest(5)
const longWords = words.filter(createLengthTest(5));
console.log(longWords)


// This can be simplified using filter
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers.push(numbers[i]);
//   }
// }

