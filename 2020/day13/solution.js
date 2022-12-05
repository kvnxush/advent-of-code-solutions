const { answer, parseInput } = require('../utils');
const input = parseInput('day13');

function foo(vals) {
  console.log(vals);
}

answer([
  ['day13/part1', foo(input)],
  ['day13/part2', null],
]);
