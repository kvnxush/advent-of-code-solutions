const { answer, parseInput } = require('../utils');
const input = parseInput('day2');

function position(instructions) {
  let x = 0;
  let y = 0;

  const applyInstruction = {
    forward: value => x += value,
    down: value => y += value,
    up: value => y -= value,
  };

  for (let instruction of instructions) {
    const [direction, amount] = instruction.split(' ');
    applyInstruction[direction](Number(amount));
  }

  return x * y;
}

function positionV2(instructions) {
  let x = 0;
  let y = 0;
  let aim = 0;

  const applyInstruction = {
    forward: value => {
      x += value;
      y += aim * value;
    },
    down: value => aim += value,
    up: value => aim -= value,
  };

  for (let instruction of instructions) {
    const [direction, amount] = instruction.split(' ');
    applyInstruction[direction](Number(amount));
  }

  return x * y;
}

answer([
  ['day2/part1', position(input)],
  ['day2/part2', positionV2(input)],
])
