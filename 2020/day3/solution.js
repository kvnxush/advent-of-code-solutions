const { answer, parseInput } = require('../utils');
const input = parseInput('day3');

function countTrees(map, right = 3, down = 1) {
  let treeCount = 0;
  let iteration = 0;

  for (let y = 0; y < map.length; y += down) {
    const x = (iteration * right) % map[0].length;
    if (map[y][x] === '#') treeCount++;
    iteration++;
  }

  return treeCount;
}

function multiplySlopes(map) {
  const instructions = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];
  return instructions.reduce((product, [right, down]) => (
    product * countTrees(map, right, down)
  ), 1);
}

answer([
  ['day3/part1', countTrees(input)],
  ['day3/part2', multiplySlopes(input)],
])
