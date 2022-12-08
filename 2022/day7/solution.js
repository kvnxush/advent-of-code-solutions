const { answer, parseInput } = require('../utils');
const input = parseInput('day7');

const buildFs = (output) => {
  const fs = { '/': {} };
  let pos = [fs];

  for (let line of output) {
    const curr = pos.at(-1);

    if (line[0] === '$') {
      const [cmd, param] = line.slice(2).split(' ');
      if (cmd === 'cd') {
        if (param === '..') pos.pop();
        else pos.push(curr[param]);
      }
    } else {
      const [size, name] = line.split(' ');
      curr[name] = size === 'dir' ? {} : Number(size);
    }
  }

  return fs;
};

const getSizes = (fs) => {
  const sizes = [];

  const getDirSize = (files) => {
    let size = 0;

    for (const file in files) {
      if (Number.isInteger(files[file])) size += files[file];
      else size += getDirSize(files[file]);
    }
    sizes.push(size);

    return size;
  };
  getDirSize(fs);

  return sizes;
};

function answer1(values) {
  const fs = buildFs(values);
  const sizes = getSizes(fs);

  return sizes
    .filter((size) => size <= 100000)
    .reduce((sum, size) => sum + size, 0);
}

function answer2(values) {
  const fs = buildFs(values);
  const sizes = getSizes(fs);
  const neededSpace = 30000000 - (70000000 - sizes.at(-1));
  const dirsToDelete = sizes.filter((size) => size >= neededSpace);

  return Math.min(...dirsToDelete);
}

answer([
  ['day7/part1', answer1(input)],
  ['day7/part2', answer2(input)],
]);
