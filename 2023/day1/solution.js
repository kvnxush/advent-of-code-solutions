const { answer, parseInput } = require('../utils');
const input = parseInput('day1');

const replaceNumbers = (str) => {
  const strToNum = {
    one: 'o1e',
    two: 't2o',
    three: 't3e',
    four: 'f4r',
    five: 'f5e',
    six: 's6x',
    seven: 's7n',
    eight: 'e8t',
    nine: 'n9e',
  };

  for (const [key, value] of Object.entries(strToNum)) {
    str = str.replace(key, value);
  }

  return str;
};

function answer1(values) {
  const calibrations = values.map((value) => {
    const numbers = value.split('').filter(Number);
    return Number(numbers.at(0) + numbers.at(-1));
  });

  return calibrations.reduce((sum, calibration) => sum + calibration, 0);
}

function answer2(values) {
  const calibrations = values.map((value) => {
    const numbers = replaceNumbers(value).split(/(\d)/).filter(Number);
    return Number(numbers.at(0) + numbers.at(-1));
  });

  return calibrations.reduce((sum, calibration) => sum + calibration, 0);
}

answer([
  ['day1/part1', answer1(input)],
  ['day1/part2', answer2(input)],
]);
