const { answer, parseInput } = require('../utils');
const input = parseInput('day7');

const _parseLine = description => {
  const [keyColor, contains] = description.split(' bags contain ');
  const bags = contains.split(', ').map((bag) => {
    const [count, ...color] = bag.split(' ');

    return {
      count: Number(count) || 0,
      color: color.join(' ').split(' bag')[0],
    };
  });

  return { color: keyColor, contains: bags };
};

const _generateGraph = bags => {
  return bags.reduce((map, bag) => {
    const { color, contains } = _parseLine(bag);
    map[color] = map[color] ? [...map[color], ...contains] : contains;
    return map;
  }, {});
};

function containsBag(bags, color = 'shiny gold') {
  const graph = _generateGraph(bags);
  const colorsContainingBag = new Set();

  (function colorIn(matchColor) {
    for (const bagColor in graph) {
      graph[bagColor].forEach(bag => {
        if (matchColor === bag.color) {
          colorsContainingBag.add(bagColor);
          colorIn(bagColor);
        }
      })
    };
  }(color));

  return colorsContainingBag.size;
}

function totalBags(bags) {
  const graph = _generateGraph(bags);
  const bagsContained = color => {
    if (color === 'other') return 0;
    return graph[color].reduce((total, bag) => {
      total += bag.count + (bag.count * bagsContained(bag.color));
      return total;
    }, 0)
  };

  return bagsContained('shiny gold');
}

answer([
  ['day7/part1', containsBag(input)],
  ['day7/part2', totalBags(input)],
]);
