const input = require('./input');

const sameLetters = (a, b) => {
  let letters = '';
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) letters += a[i];
  }
  return letters;
}

const result = input.reduce((memo, id, index) => {
  const idsWithOnlyOneDiff = input.slice(index + 1).map(id2 => sameLetters(id, id2)).filter(result => result.length === id.length - 1);

  if (!idsWithOnlyOneDiff.length) return memo;

  idsWithOnlyOneDiff.forEach(result => memo += result);

  return memo;
}, '');

console.log(result);
