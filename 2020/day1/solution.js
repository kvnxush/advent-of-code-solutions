const { answer, parseInput } = require('../utils');
const input = parseInput('day1', { parseAs: Number });

function twoSum(values, target = 2020) {
  const set = new Set(values);

  for (const valA of set) {
    set.delete(valA);
    const valB = target - valA;

    if (set.has(valB)) {
      return valA * valB;
    }
  }

  return -1;
}

function threeSum(values, target = 2020) {
  values.sort((a, b) => a - b);
  const set = new Set(values);

  for (let i = 0; i < values.length - 2; i++) {
    let left = i + 1;
    let right = values.length - 1;

    while (left < right) {
      const sum = values[i] + values[left] + values[right];

      if (sum === target) {
        return values[i] * values[left] * values[right];
      }

      if (sum > target) right--;
      else left++;
    }
  }

  return -1;
}

answer([
  ['day1/part1', twoSum(input)],
  ['day1/part2', threeSum(input)],
])
