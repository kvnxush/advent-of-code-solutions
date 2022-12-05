const { answer, parseInput } = require('../utils');
const input = parseInput('day9', { parseAs: Number });

function _twoSum(values, target) {
  const set = new Set(values);

  for (const valA of set) {
    set.delete(valA);
    const valB = target - valA;

    if (set.has(valB)) {
      return true;
    }
  }

  return target;
}

function getInvalidNumber(nums, preamble = 25) {
  for (let max = preamble; max <= nums.length - preamble; max++) {
    const min = max - preamble;
    const value = _twoSum(nums.slice(min, max), nums[max])
    if (typeof value === 'number') {
      return value;
    }
  }
}

function getEncryptionWeakness(nums, target) {
  const result = [];
  let sum = 0;

  for (const num of nums) {
    result.push(num);
    sum += num;

    while (sum > target) {
      sum -= result.shift();
    }

    if (sum === target) {
      result.sort((a, b) => a - b);
      return result[0] + result[result.length - 1];
    }
  }
}

answer([
  ['day9/part1', getInvalidNumber(input)],
  ['day9/part2', getEncryptionWeakness(input, 1309761972)],
]);
