const { answer, parseInput } = require('../utils');
const input = parseInput('day4');

function answer1(values) {
  let count = 0;

  for (const value of values) {
    const [secA, secB] = value
      .split(',')
      .map((assignment) => assignment.split('-').map(Number));

    if (
      (secA[0] >= secB[0] && secA[1] <= secB[1]) ||
      (secB[0] >= secA[0] && secB[1] <= secA[1])
    ) {
      count++;
    }
  }

  return count;
}

function answer2(values) {
  let count = 0;

  for (const value of values) {
    const [secA, secB] = value.split(',').map((assignment) => {
      const [start, end] = assignment.split('-').map(Number);
      const sections = Array(end - start + 1)
        .fill(start)
        .map((val, i) => val + i);

      return new Set(sections);
    });

    for (let section of secA) {
      if (secB.has(section)) {
        count++;
        break;
      }
    }
  }

  return count;
}

answer([
  ['day4/part1', answer1(input)],
  ['day4/part2', answer2(input)],
]);
