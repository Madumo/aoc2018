const input = require('./input');

let frequencies = [];
let currentFrequency = 0;
let i = 0;

do {
  if (i === input.length) i = 0;
  frequencies.push(currentFrequency);
  currentFrequency += input[i];
  ++i;
} while(frequencies.indexOf(currentFrequency) === -1)

console.log(currentFrequency);
