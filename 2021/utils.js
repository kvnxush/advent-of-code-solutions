const fs = require('fs');
const path = require('path');

module.exports = {
  answer(submissions) {
    submissions.forEach(([problem, solution]) => {
      console.log(`${problem}:`, solution);
    });
  },

  parseInput(day, { delineator = '\n', parseAs = String } = {}) {
    const location = path.join(__dirname, `${day}/input.txt`);
    const input = fs.readFileSync(location);
    const parsedInput = input.toString().split(delineator);

    return parsedInput.map(parseAs);
  }
};

/* new day template
const { answer, parseInput } = require('../utils');
const input = parseInput('day1', { parseAs: Number });

function answer1(values) {
}

function answer2(values) {
}

answer([
  ['day1/part1', answer1(input)],
  ['day1/part2', answer2(input)],
])
*/
