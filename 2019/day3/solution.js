const { answer, parseInput } = require('../utils');
const input = parseInput('day3');
const paths = [input[0].split(','), input[1].split(',')];

const CENTRAL_PORT = [0, 0];

function getVisited(path) {
  const visited = [];
  let location = [...CENTRAL_PORT];

  path.forEach(instruction => {
    const direction = instruction[0];
    const distance = Number(instruction.slice(1));

    for (let i = 1; i <= distance; i++) {
      switch (direction) {
        case 'U': location[1] += 1; break;
        case 'D': location[1] -= 1; break;
        case 'L': location[0] += 1; break;
        case 'R': location[0] -= 1; break;
        default: return;
      }

      visited.push(location.toString());
    }
  })

  return visited;
}

function getIntersections(p1, p2) {
  const p2Set = new Set(p2);
  const intersections = [];

  p1.forEach(point => {
    if (p2Set.has(point)) {
      intersections.push(point);
    }
  })

  return intersections;
}

function getNearestIntersection([path1, path2]) {
  const p1Visited = getVisited(path1);
  const p2Visited = getVisited(path2);
  const intersections = getIntersections(p1Visited, p2Visited);
  let nearestDistance = Infinity;
  let nearestSteps = Infinity;

  intersections.forEach(point => {
    const [x, y] = point.split(',');

    const distance = Math.abs(x) + Math.abs(y);
    nearestDistance = Math.min(nearestDistance, distance);

    const steps = p1Visited.indexOf(point) + p2Visited.indexOf(point) + 2;
    nearestSteps = Math.min(nearestSteps, steps);
  });

  return {
    distance: nearestDistance,
    steps: nearestSteps,
  };
}

answer([
  ['day3/part1', getNearestIntersection(paths).distance],
  ['day3/part2', getNearestIntersection(paths).steps],
]);
