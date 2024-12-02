const { answer, parseInput } = require('../utils');
const input = parseInput('day1');

const getSortedIds = (values) => {
  const [leftIds, rightIds] = values.reduce(
    (acc, ids) => {
      const [left, right] = ids.split('   ');
      acc[0].push(Number(left));
      acc[1].push(Number(right));
      return acc;
    },
    [[], []],
  );

  leftIds.sort();
  rightIds.sort();

  return [leftIds, rightIds];
};

function answer1(values) {
  const [leftIds, rightIds] = getSortedIds(values);

  let totalDistance = 0;
  for (let i = 0; i < values.length; i++) {
    totalDistance += Math.abs(leftIds[i] - rightIds[i]);
  }

  return totalDistance;
}

function answer2(values) {
  const [leftIds, rightIds] = getSortedIds(values);
  const rightIdFrequency = rightIds.reduce((acc, id) => {
    acc[id] = acc[id] ? acc[id] + 1 : 1;
    return acc;
  }, {});

  const similarityScore = leftIds.reduce((score, leftId) => {
    if (rightIdFrequency[leftId]) {
      score += leftId * (rightIdFrequency[leftId] ?? 0);
    }
    return score;
  }, 0);

  return similarityScore;
}

answer([
  ['day1/part1', answer1(input)],
  ['day1/part2', answer2(input)],
]);
