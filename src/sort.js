const mixedNumbers = [7, 1, 8, 4, 5, 6, 2, 3, 9];

const ascending = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

const sortedNumbers = mixedNumbers.slice().sort(ascending);
console.log(sortedNumbers);
