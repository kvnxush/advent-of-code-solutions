const { answer, parseInput } = require('../utils');
const input = parseInput('day4');

const parseNumbers = (numbers) => numbers.split(' ').filter(Number).map(Number);

function answer1(cards) {
  let sum = 0;

  for (const card of cards) {
    const [cardNumber, numbers] = card.split(': ');
    const [winningNumbers, myNumbers] = numbers.split(' | ');

    const myNumbersSet = new Set(parseNumbers(myNumbers));
    const matches = parseNumbers(winningNumbers).filter((x) =>
      myNumbersSet.has(x),
    );

    sum += matches.reduce((points) => (points ? points * 2 : 1), 0);
  }

  return sum;
}

function answer2(cards) {
  const wonCards = [];

  for (const card of cards) {
    const [cardNumber, numbers] = card.split(': ');
    const [winningNumbers, myNumbers] = numbers.split(' | ');

    const myNumbersSet = new Set(parseNumbers(myNumbers));
    const matches = parseNumbers(winningNumbers).filter((x) =>
      myNumbersSet.has(x),
    );

    if (matches.length) {
      const cardIndex = Number(cardNumber.at(-1));
      wonCards[cardIndex] = wonCards[cardIndex] + 1 || 1;
    }
  }

  return wonCards.reduce((sum, card) => sum + card, 0);
}

answer([
  ['day4/part1', answer1(input)],
  ['day4/part2', answer2(input)],
]);
