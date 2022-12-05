const { answer, parseInput } = require('../utils');
const input = parseInput('day3');

function powerConsumption(values) {
  const bitCounts = Array.from({ length: 12 }, () => [0, 0]);
  for (let value of values) {
    for (let i = 0; i <= 11; i++) {
      bitCounts[i][value[i]]++;
    }
  }

  let gammaRate = Array(12);
  let epsilonRate = Array(12);
  for (let i = 0; i < bitCounts.length; i++) {
    const [zeros, ones] = bitCounts[i];
    gammaRate[i] = zeros > ones ? '0' : '1';
    epsilonRate[i] = zeros > ones ? '1' : '0';
  }

  return parseInt(gammaRate.join(''), 2) * parseInt(epsilonRate.join(''), 2);
}

function lifeSupportRating(values) {
  const getRating = targetBit => {
    let activeValues = [...values];

    for (let position = 0; position < 12; position++) {
      if (activeValues.length === 1) break;

      const bitCount = [0, 0];
      const sortedValues = [[], []];

      for (let value of activeValues) {
        const bit = value[position];
        bitCount[bit]++;
        sortedValues[bit].push(value);
      }

      if (bitCount[0] === bitCount[1]) {
        activeValues = sortedValues[targetBit];
      } else if (targetBit) {
        activeValues = bitCount[0] < bitCount[1] ? sortedValues[1] : sortedValues[0];
      } else {
        activeValues = bitCount[0] > bitCount[1] ? sortedValues[1] : sortedValues[0];
      }
    }

    return parseInt(activeValues[0], 2);
  };

  const oxygenGeneratorRating = getRating(1);
  const co2ScrubberRating = getRating(0);

  return oxygenGeneratorRating * co2ScrubberRating;
}

answer([
  ['day3/part1', powerConsumption(input)],
  ['day3/part2', lifeSupportRating(input)],
])