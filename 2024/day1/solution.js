const { answer, parseInput } = require('../utils');
const input = parseInput('day1');

const getSortedIds = (ids) => {
  const [leftIds, rightIds] = ids.reduce(
    (acc, ids) => {
      const [left, right] = ids.split('   ').map(Number);
      acc[0].push(left);
      acc[1].push(right);
      return acc;
    },
    [[], []],
  );

  leftIds.sort();
  rightIds.sort();

  return [leftIds, rightIds];
};

function answer1(ids) {
  const [leftIds, rightIds] = getSortedIds(ids);

  let totalDistance = 0;
  for (let i = 0; i < ids.length; i++) {
    totalDistance += Math.abs(leftIds[i] - rightIds[i]);
  }

  return totalDistance;
}

function answer2(ids) {
  const [leftIds, rightIds] = getSortedIds(ids);
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
