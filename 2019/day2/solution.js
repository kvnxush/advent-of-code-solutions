const { answer, parseInput } = require('../utils');
const input = parseInput('day2', ',').map(Number);

const OPCODES = {
  1: (a, b) => a + b,
  2: (a, b) => a * b,
  99: 'end',
};

function intcode(ops) {
  let instruction;
  let paramA;
  let paramB;

  const positions = [
    val => instruction = OPCODES[val],
    val => paramA = ops[val],
    val => paramB = ops[val],
    val => ops[val] = instruction(paramA, paramB),
  ];

  for (let i = 0; i < ops.length; i++) {
    if (instruction === 'end') {
      return ops;
    }
    positions[i % 4](ops[i]);
  }

  return ops;
}

function restore(ops, noun, verb) {
  const newOps = [...ops];
  newOps[1] = noun;
  newOps[2] = verb;

  return newOps;
}

function findInput(input, output) {
  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      const testInput = restore(input, noun, verb);
      const [testOutput] = intcode(testInput);

      if (testOutput === output) {
        return 100 * noun + verb;
      }
    }
  }

  return -1;
}

answer([
  ['day2/part1', intcode(restore(input, 12, 2))[0]],
  ['day2/part2', findInput(input, 19690720)],
]);
