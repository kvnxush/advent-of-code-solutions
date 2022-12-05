const { answer, parseInput } = require('../utils');
const input = parseInput('day5', ',').map(Number);

const MODES = [
  (val, ops) => ops[val],
  val => val,
];

const OPCODES = {
  1: (a, b) => a + b,
  2: (a, b) => a * b,
  3: a => a,
  4: a => console.log('output:', a),
  99: 'end',
};

const parseInstruction = instruction => ({
  opcode: Number(instruction.slice(-2)),
  modes: instruction.slice(0, -2).split('').reverse(),
})

function intcode(ops, input) {
  // inital state
  let currOp = input ? OPCODES[3] : null;
  let currModes = input ? [0] : [];
  let currParams = input ? [input] : [];
  let position = input ? 1: 0;

  for (let i = 0; i < ops.length; i++) {
    if (currOp === 'end') {
      return ops;
    }

    const val = ops[i];

    if (!currOp) {
      // handle first instruction
      const { opcode, modes } = parseInstruction(val.toString());

      currModes = modes;
      currOp = OPCODES[opcode];
    } else if (position < currModes.length) {
      // handle parameters
      const param = MODES[currModes[position]](val, ops);

      currParams.push(param);
      position++;
    } else {
      // handle output
      const output = currOp(...currParams);
      ops[val] = output;
      // reset state
      currOp = null;
      currModes = [];
      currParams = [];
      position = 0;
    }
  }

  return ops;
}

function runDiagnostic(ops) {
  intcode(ops, 1);
}

answer([
  ['day5/part1', runDiagnostic(input)],
  ['day5/part2', null],
]);
