const { answer, parseInput } = require('../utils');
const input = parseInput('day6');

function getDepth(child, directOrbits, count = 0) {
  if (!child) return count;
  return getDepth(directOrbits[child], directOrbits, ++count);
}

function getOrbits(orbits) {
  const directOrbits = {};
  const orbitChildren = {};

  orbits.forEach(orbit => {
    const [parent, child] = orbit.split(')');

    directOrbits[child] = parent;
    orbitChildren[parent] = orbitChildren[parent]
      ? [...orbitChildren[parent], child]
      : [child];
  });

  let count = 0;

  for (let parent in orbitChildren) {
    orbitChildren[parent].forEach(child => {
      count += getDepth(child, directOrbits);
    })
  }

  return count - orbits.length;
}

function getTransfers(input) {
  // TODO
}

answer([
  ['day5/part1', getOrbits(input)],
  ['day5/part2', getTransfers(input)],
]);
