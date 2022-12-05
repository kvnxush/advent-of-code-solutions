const path = require('path');
const parseInput = require(path.join(__dirname, '../util'));
const data = parseInput(path.join(__dirname, 'data.txt'));

function part1(freqChanges) {
  return freqChanges.reduce(
    (result, freqChange) => result + Number(freqChange)
  , 0);
}

function part2(freqChanges) {
  const runningResult = [0];

  while (true) {
    for (let i = 0; i <= freqChanges.length; i++) {
      const lastResult = runningResult[runningResult.length - 1] || 0;
      const newResult =  lastResult + Number(freqChanges[i]);

      if (runningResult.includes(newResult)) {
        return newResult;
      }

      runningResult.push(newResult);
    }
    console.log(runningResult);
  }
}

console.log(
  part1(data),
  part2(data)
);
