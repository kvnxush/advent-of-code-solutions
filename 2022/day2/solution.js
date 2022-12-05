const { answer, parseInput } = require('../utils');
const input = parseInput('day2');

const points = {
  rock: 1,
  paper: 2,
  scissors: 3,
  lose: 0,
  draw: 3,
  win: 6,
};

function answer1(values) {
  return values.reduce((total, move) => {
    const [moveA, moveB] = move.split(' ').map((move) => {
      if (['A', 'X'].includes(move)) return 'rock';
      if (['B', 'Y'].includes(move)) return 'paper';
      return 'scissors';
    });

    let score = points[moveB];
    if ([1, -2].includes(points[moveB] - points[moveA])) {
      score += points.win;
    } else if (moveA === moveB) {
      score += points.draw;
    }

    return total + score;
  }, 0);
}

function answer2(values) {
  return values.reduce((total, turn) => {
    const [move, result] = turn.split(' ').map(
      (value) =>
        ({
          A: 'rock',
          B: 'paper',
          C: 'scissors',
          X: 'lose',
          Y: 'draw',
          Z: 'win',
        }[value]),
    );

    let score = points[result];
    if (result === 'win') {
      score += move === 'scissors' ? 1 : points[move] + 1;
    } else if (result === 'lose') {
      score += move === 'rock' ? 3 : points[move] - 1;
    } else {
      score += points[move];
    }

    return total + score;
  }, 0);
}

answer([
  ['day2/part1', answer1(input)],
  ['day2/part2', answer2(input)],
]);
