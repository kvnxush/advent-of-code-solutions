const { answer, parseInput } = require('../utils');
const input = parseInput('day1');

const getFuel = mass => Math.floor(mass / 3) - 2;

function getTotalFuel(fuel, totalRequiredFuel = 0) {
  if (fuel <= 0) {
    return totalRequiredFuel;
  }

  const totalFuel = totalRequiredFuel + fuel;
  return getTotalFuel(getFuel(fuel), totalFuel);
}

function getRequiredFuel(moduleMasses, trueAmount = false) {
  return moduleMasses.reduce((sum, mass) => {
    const fuel = trueAmount
      ? getTotalFuel(getFuel(mass))
      : getFuel(mass);

    return sum + fuel;
  }, 0);
}

answer([
  ['day1/part1', getRequiredFuel(input)],
  ['day1/part2', getRequiredFuel(input, true)],
])
