const { answer, parseInput } = require('../utils');
const input = parseInput('day5');

const getStacks = (values) =>
  values.slice(0, 8).reduce((currentStacks, stack) => {
    let curr = 1;
    for (let i = 0; i <= stack.length; i += 4) {
      if (stack[i] === '[') {
        if (currentStacks[curr]) {
          currentStacks[curr].unshift(stack[i + 1]);
        } else {
          currentStacks[curr] = [stack[i + 1]];
        }
      }
      curr++;
    }
    return currentStacks;
  }, {});

const getMoves = (values) =>
  values.slice(10).reduce((currentMoves, move) => {
    return [
      ...currentMoves,
      [
        Number(move.split('move ')[1].split(' ')[0]),
        move.split('from ')[1].split(' ')[0],
        move.split('to ')[1],
      ],
    ];
  }, []);

const getTopCrates = (stacks) =>
  Object.values(stacks).reduce((result, stack) => {
    result += stack.at(-1);
    return result;
  }, '');

function answer1(values) {
  const stacks = getStacks(values);
  const moves = getMoves(values);

  for (const [move, from, to] of moves) {
    for (let i = 0; i < move; i++) {
      const crate = stacks[from].pop();
      stacks[to].push(crate);
    }
  }

  return getTopCrates(stacks);
}

function answer2(values) {
  const stacks = getStacks(values);
  const moves = getMoves(values);

  for (const [move, from, to] of moves) {
    const stack = [];
    for (let i = 0; i < move; i++) {
      const crate = stacks[from].pop();
      stack.unshift(crate);
    }
    stacks[to].push(...stack);
  }

  return getTopCrates(stacks);
}

answer([
  ['day5/part1', answer1(input)],
  ['day5/part2', answer2(input)],
]);
