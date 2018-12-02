const input = require('./input');

const result = input.reduce((memo, id) => {
  const letterCount = {};

  for (let i = 0; i < id.length; i++) {
    let letter = id[i];
    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter] += 1;
    }
  }

  const hasTwo = Object.values(letterCount).some((value) => value === 2);
  const hasThree = Object.values(letterCount).some((value) => value === 3);

  if (hasTwo) memo[2] += 1;
  if (hasThree) memo[3] += 1;

  return memo;
}, {2: 0, 3: 0})

const checksum = result[2] * result[3];

console.log(checksum);
