const { answer } = require('../utils');

const input = '234208-765869'.split('-');

function isValid(pw) {;
  pw = pw.toString();

  if (pw[1] === undefined) {
    return [false, true];
  }

  const [nextIsRepeating, nextDoesNotDecrease] = isValid(pw.slice(1));
  const isRepeating = pw[0] === pw[1] || nextIsRepeating;
  const doesNotDecrease = pw[0] >= pw[1] && nextDoesNotDecrease;

  return [isRepeating, doesNotDecrease];
}

function getPossiblePasswords([min, max]) {
  const possibilities = [];

  for (let i = Number(min); i <= Number(max); i++) {
    const [isRepeating, doesNotDecrease] = isValid(i);

    if (isRepeating && doesNotDecrease) {
      possibilities.push(i);
    }
  }

  return possibilities;
}

function getRevisedPossiblePasswords(possibilities) {
  return possibilities.filter(pw => {
    let current = '';
    let count = 0;

    for (let char of pw.toString()) {
      if (char === current) {
        count++;
      } else {
        if (count === 2) return true;
        current = char;
        count = 1;
      }
    }

    return count === 2;
  });
}

const possiblePasswords = getPossiblePasswords(input);
const revisedPossiblePasswords = getRevisedPossiblePasswords(possiblePasswords);

answer([
  ['day4/part1', possiblePasswords.length],
  ['day4/part2', revisedPossiblePasswords.length],
]);
