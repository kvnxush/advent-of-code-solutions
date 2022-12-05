const { answer, parseInput } = require('../utils');
const input = parseInput('day5');

const _binarySearch = ([min, max], isUpper) => {
  let mid = Math.floor((max + min) / 2);

  if (isUpper) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }

  return [min, max];
};

const _getSeat = seat => {
  const row = seat.substring(0, 7);
  const column = seat.substring(7, 10);

  let rowRange = [0, 127];
  for (const step of row) {
    rowRange = _binarySearch(rowRange, step === 'B');
  }

  let columnRange = [0, 7]
  for (const step of column) {
    columnRange = _binarySearch(columnRange, step === 'R');
  }

  return rowRange[0] * 8 + columnRange[0];
};

function highestSeat(partition) {
  return partition.reduce((max, seat) => (
    Math.max(max, _getSeat(seat))
  ), 0);
}

function getMySeat(partition) {
  const seats = partition.map(_getSeat).sort((a, b) => a - b);
  for (let i = 0; i < seats.length; i++) {
    if (seats[i + 1] - seats[i] > 1) {
      return seats[i] + 1;
    }
  }
}

answer([
  ['day5/part1', highestSeat(input)],
  ['day5/part2', getMySeat(input)],
]);
