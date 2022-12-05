const { answer, parseInput } = require('../utils');
const input = parseInput('day1', { parseAs: Number });

function depthIncreases(depths) {
  let increases = 0;
  for (let i = 1; i < depths.length; i++) {
    if (depths[i] > depths[i - 1]) increases++;
  }
  return increases;
}

function depthIncreasesInWindow(depths) {
  let increases = 0;
  let previousSum = depths[0] + depths[1] + depths[2];
  for (let i = 2; i < depths.length - 1; i++) {
    const currentSum = depths[i - 1] + depths[i] + depths[i + 1];
    if (currentSum > previousSum) increases++;
    previousSum = currentSum;
  }
  return increases;
}

answer([
  ['day1/part1', depthIncreases(input)],
  ['day1/part2', depthIncreasesInWindow(input)],
])
