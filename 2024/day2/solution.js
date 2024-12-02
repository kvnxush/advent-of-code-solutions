const { answer, parseInput } = require('../utils');
const input = parseInput('day2');

const checkSafety = (levels) => {
  let direction;

  for (let i = 0; i < levels.length - 1; i++) {
    const sign = Math.sign(levels[i] - levels[i + 1]);
    const difference = Math.abs(levels[i] - levels[i + 1]);

    if (direction && direction !== sign) return false;
    if (difference < 1 || difference > 3) return false;

    direction = sign;
  }

  return true;
};

function answer1(reports) {
  return reports.filter((report) => {
    const levels = report.split(' ').map(Number);
    return checkSafety(levels);
  }).length;
}

function answer2(reports) {
  return reports.filter((report) => {
    const levels = report.split(' ').map(Number);
    return (
      checkSafety(levels) ||
      levels.some((_, index, arr) =>
        checkSafety([...arr.slice(0, index), ...arr.slice(index + 1)]),
      )
    );
  }).length;
}

answer([
  ['day2/part1', answer1(input)],
  ['day2/part2', answer2(input)],
]);
