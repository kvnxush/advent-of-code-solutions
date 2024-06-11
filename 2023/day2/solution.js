const { answer, parseInput } = require('../utils');
const input = parseInput('day2');

const getMaxCounts = (sets) => {
  const maxCounts = { red: 0, green: 0, blue: 0 };

  for (const set of sets.split('; ')) {
    const turns = set.split(', ');

    for (const turn of turns) {
      const [count, color] = turn.split(' ');
      maxCounts[color] = Math.max(maxCounts[color], Number(count));
    }
  }

  return maxCounts;
};

function answer1(games) {
  const BAG = { red: 12, green: 13, blue: 14 };
  let result = 0;

  for (const gameEntry of games) {
    const [game, setsEntry] = gameEntry.split(': ');
    const maxCounts = getMaxCounts(setsEntry);
    const isPossible = Object.entries(maxCounts).every(
      ([color, count]) => count <= BAG[color],
    );

    if (isPossible) {
      result += Number(game.slice(4));
    }
  }

  return result;
}

function answer2(games) {
  let result = 0;

  for (const gameEntry of games) {
    const maxCounts = getMaxCounts(gameEntry.split(': ')[1]);
    const [red, green, blue] = Object.values(maxCounts);
    result += red * green * blue;
  }

  return result;
}

answer([
  ['day2/part1', answer1(input)],
  ['day2/part2', answer2(input)],
]);
