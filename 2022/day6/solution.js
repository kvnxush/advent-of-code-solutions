const { answer, parseInput } = require('../utils');
const input = parseInput('day6', { delineator: '' });

const getChars = (values, size, i) =>
  new Set(
    Array(size)
      .fill()
      .map((_, index) => values[i + index]),
  );

function answer1(values) {
  for (let i = 0; i <= values.length; i++) {
    const chars = getChars(values, 4, i);

    if (chars.size === 4) {
      return i + 4;
    }
  }
}

function answer2(values) {
  for (let i = 0; i <= values.length; i++) {
    const chars = getChars(values, 14, i);

    if (chars.size === 14) {
      return i + 14;
    }
  }
}

answer([
  ['day6/part1', answer1(input)],
  ['day6/part2', answer2(input)],
]);
