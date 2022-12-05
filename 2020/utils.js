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
