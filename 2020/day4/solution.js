const { answer, parseInput } = require('../utils');
const input = parseInput('day4');

const _validate = (passport, strict) => {
  const required = {
    byr: val => /^19[2-9][0-9]|200[0-2]$/.test(val),
    iyr: val => /^201[0-9]|2020$/.test(val),
    eyr: val => /^202[0-9]|2030$/.test(val),
    hgt: val => /^1[5-8][0-9]cm|19[0-3]cm|59in|6[0-9]in|7[0-6]in$/.test(val),
    hcl: val => /^#[0-9a-f]{6}$/.test(val),
    ecl: val => /^amb|blu|brn|gry|grn|hzl|oth$/.test(val),
    pid: val => /^[0-9]{9}$/.test(val),
  };

  for (const field in required) {
    const isValid = strict ? required[field](passport.get(field)) : passport.has(field);
    if (!isValid) return 0;
  }

  return 1;
};

function validPassports(fields, strict = false) {
  let validPassportCount = 0;
  let passport = new Map();

  for (let field of fields) {
    if (!field) {
      validPassportCount += _validate(passport, strict);
      passport = new Map();
    } else {
      field.split(' ').forEach(f => {
        const [key, value] = f.split(':');
        passport.set(key, value);
      });
    }
  }

  return validPassportCount + _validate(passport, strict);
}

answer([
  ['day4/part1', validPassports(input)],
  ['day4/part2', validPassports(input, true)],
])
