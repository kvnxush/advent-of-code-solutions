const { answer, parseInput } = require('../utils');
const input = parseInput('day3');

const items = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const getScore = (dupes) =>
  dupes
    .map((item) => items.indexOf(item) + 1)
    .reduce((sum, priority) => sum + priority, 0);

function answer1(values) {
  const dupes = [];

  for (const value of values) {
    const items = value.split('');
    const half = items.length / 2;
    const sackA = new Set(items.slice(0, half));
    const sackB = new Set(items.slice(half));

    sackA.forEach((item) => {
      if (sackB.has(item)) {
        dupes.push(item);
      }
    });
  }

  return getScore(dupes);
}

function answer2(values) {
  const dupes = [];

  for (let i = 0; i < values.length; i += 3) {
    const groupA = new Set(values[i].split(''));
    const groupB = new Set(values[i + 1].split(''));
    const groupC = new Set(values[i + 2].split(''));
    const dupesAB = new Set();

    groupA.forEach((item) => {
      if (groupB.has(item)) {
        dupesAB.add(item);
      }
    });

    groupC.forEach((item) => {
      if (dupesAB.has(item)) {
        dupes.push(item);
      }
    });
  }

  return getScore(dupes);
}

answer([
  ['day3/part1', answer1(input)],
  ['day3/part2', answer2(input)],
]);
