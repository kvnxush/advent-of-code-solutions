const { answer, parseInput } = require('../utils');
const input = parseInput('day1', { parseAs: Number });

const getTotalCalories = (food) =>
  food
    .reduce(
      (totals, item) => {
        if (item) {
          totals[totals.length - 1] += item;
        } else {
          totals.push(item);
        }
        return totals;
      },
      [0],
    )
    .sort((a, b) => b - a);

function answer1(food) {
  return getTotalCalories(food)[0];
}

function answer2(food) {
  const [first, second, third] = getTotalCalories(food);
  return first + second + third;
}

answer([
  ['day1/part1', answer1(input)],
  ['day1/part2', answer2(input)],
]);
