const { answer, parseInput } = require('../utils');
const input = parseInput('day12');

function foo(vals) {
  console.log(vals);
}

answer([
  ['day12/part1', foo(input)],
  ['day12/part2', null],
]);
