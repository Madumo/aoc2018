const input = require('./input');

const result = input.reduce((memo, current) => {
  return memo + current;
}, 0)

console.log(result);
