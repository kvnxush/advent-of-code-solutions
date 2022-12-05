const { answer, parseInput } = require('../utils');
const input = parseInput('day4', { delineator: '\n\n' });

function answer1([draws, ...boards]) {
  draws = draws.split(',');

}

function answer2(values) {
}

answer([
  ['day4/part1', answer1(input)],
  ['day4/part2', answer2(input)],
])