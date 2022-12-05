const { answer, parseInput } = require('../utils');
const input = parseInput('day10');

function foo(vals) {
  console.log(vals);
}

answer([
  ['day10/part1', foo(input)],
  ['day10/part2', null],
]);
