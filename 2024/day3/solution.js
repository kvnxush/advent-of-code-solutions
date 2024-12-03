const { answer, parseInput } = require('../utils');
const input = parseInput('day3');

function answer1(instructions) {
  const instruction = instructions.reduce((acc, x) => acc + x, '');
  const regex = /mul\((\d+),(\d+)\)/g;

  let acc = 0;

  for (const [_, x, y] of instruction.matchAll(regex)) {
    acc += x * y;
  }

  return acc;
}

function answer2(instructions) {
  const instruction = instructions.reduce((acc, x) => acc + x, '');
  const regex = /mul\((\d+),(\d+)\)|don't\(\)|do\(\)/g;

  let acc = 0;
  let enabled = true;

  for (const [command, x, y] of instruction.matchAll(regex)) {
    switch (command) {
      case 'do()':
        enabled = true;
        continue;
      case "don't()":
        enabled = false;
        continue;
    }

    if (enabled) {
      acc += x * y;
    }
  }

  return acc;
}

answer([
  ['day3/part1', answer1(input)],
  ['day3/part2', answer2(input)],
]);
