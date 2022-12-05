const { answer, parseInput } = require('../utils');
const input = parseInput('day11');

function foo(vals) {
  console.log(vals);
}

answer([
  ['day11/part1', foo(input)],
  ['day11/part2', null],
]);
