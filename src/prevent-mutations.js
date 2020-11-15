const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// .slice with no arguments prevents mutations from other functions
console.log(numbers.slice().reverse())
console.log(numbers)
