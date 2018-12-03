const CLAIM_REGEX = /#(\d*)\s@\s(\d*,\d*):\s(\d*x\d*)/;

const parseClaim = (claim) => {
  const matches = CLAIM_REGEX.exec(claim);
  const id = matches[1].split(',').map(value => parseInt(value));
  const coords = matches[2].split(',').map(value => parseInt(value));
  const size = matches[3].split('x').map(value => parseInt(value));
  return {id, coords, size};
}

const input = require('fs').readFileSync('./input.txt').toString().trim();
const claims = input.split(/\n/).map(parseClaim);


const part1 = () => {
  const claimedCounts = claims.reduce((memo, {coords: [x, y], size: [w, h]}) => {
    for (let i = x; i < x + w; i++) {
      for (let j = y; j < y + h; j++) {
        const coords = [i, j].join();
        memo[coords] = memo[coords] ? memo[coords] + 1 : 1;
      }
    }
    return memo;
  }, {});

  return Object.values(claimedCounts).reduce((memo, count) => count > 1 ? ++memo : memo, 0);
}

const part2 = () => {
  // TODO
}

console.log(part1());
