const fs = require('fs');

function parseInput(path) {
  const data = fs.readFileSync(path, 'utf8');
  return data.split('\n');
}

module.exports = parseInput;
