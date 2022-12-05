const { answer, parseInput } = require('../utils');
const input = parseInput('day8');

function getValue(ops) {
  const history = new Set()
  let currOpIndex = 0;
  let currVal = 0;

  while (currOpIndex >= 0) {
    if (currOpIndex === ops.length) return [currVal, true];
    if (currOpIndex > ops.length) return [currVal, false];
    if (history.has(currOpIndex)) return [currVal, false];

    history.add(currOpIndex);

    const operations = {
      acc: val => {
        currVal += val;
        currOpIndex++;
      },
      jmp: val => currOpIndex += val,
      nop: () => currOpIndex++,
    };

    const [op, value] = ops[currOpIndex].split(' ');
    operations[op](Number(value));
  }

  return [currVal, false];
}

function fixProgram(ops) {
  for (let i = 0; i < ops.length; i++) {
    const opsClone = [...ops];
    const [op, value] = opsClone[i].split(' ');

    if (op === 'nop') opsClone[i] = `jmp ${value}`;
    else if (op === 'jmp') opsClone[i] = `nop ${value}`;

    const [val, isCorrect] = getValue(opsClone);
    if (isCorrect) return val;
  }
}

answer([
  ['day8/part1', getValue(input)[0]],
  ['day8/part2', fixProgram(input)],
]);
