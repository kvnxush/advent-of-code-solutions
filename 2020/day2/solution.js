const { answer, parseInput } = require('../utils');
const input = parseInput('day2');

const _parsePW = input => {
  const [policy, password] = input.split(': ');
  const [minMax, char] = policy.split(' ');
  const [min, max] = minMax.split('-');

  return {
    password,
    char,
    min: Number(min),
    max: Number(max),
  };
};

const policyRules = {
  occurence(count, pw) {
    let occurrences = 0;
    for (const char of pw.password) {
      if (char === pw.char) occurrences++;
    }
    if (occurrences >= pw.min && occurrences <= pw.max) count++;
    return count;
  },

  position(count, pw) {
    let matched = pw.password[pw.min - 1] === pw.char;
    if (pw.password[pw.max - 1] === pw.char) count = matched ? count : count + 1;
    else if (matched) count++;
    return count;
  },
};

function getValid(passwords, policyType) {
  passwords = passwords.map(_parsePW);
  const numberValid = passwords.reduce(policyRules[policyType], 0);
  return numberValid;
}

answer([
  ['day2/part1', getValid(input, 'occurence')],
  ['day2/part2', getValid(input, 'position')],
])
