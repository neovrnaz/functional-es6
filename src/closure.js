ifMultipleAddS = (noun, count) => {
  if (count > 1) {
    noun = noun + 's'
  }
  return noun;
}

// When call makeCounter and pass it a noun, you can put a string,
// and then the function you get back is configured to the noun you specify
function makeCounter(noun) {
  let count = 0;
  return function() {
    count += 1;
    return count + ' ' + ifMultipleAddS(noun, count);
  }
}

const birdCounter = makeCounter('bird');
console.log(birdCounter());
console.log(birdCounter());

const fishCounter = makeCounter('fish');
console.log(fishCounter());
console.log(fishCounter());
