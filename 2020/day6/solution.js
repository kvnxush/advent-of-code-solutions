const { answer, parseInput } = require('../utils');
const input = parseInput('day6');

function anyAnsweredYes(groups) {
  let totalAnsweredYes = 0;
  let yesQuestions = new Set();

  for (let group of groups) {
    if (!group) {
      totalAnsweredYes += yesQuestions.size;
      yesQuestions = new Set();
    } else {
      for (let question of group) {
        yesQuestions.add(question);
      }
    }
  }

  return totalAnsweredYes + yesQuestions.size;
}

const _getUninamousYes = (questions, groupSize) => {
  return Object.values(questions).reduce((total, count) => (
    count === groupSize ? total + 1 : total
  ), 0);
};

function allAnsweredYes(groups) {
  let groupSize = 0;
  let totalAnsweredYes = 0;
  let yesQuestions = {};

  for (let group of groups) {
    if (!group) {
      totalAnsweredYes += _getUninamousYes(yesQuestions, groupSize);
      yesQuestions = {};
      groupSize = 0;
    } else {
      for (let question of group) {
        yesQuestions[question] = yesQuestions[question] + 1 || 1;
      }
      groupSize++;
    }
  }

  return totalAnsweredYes + _getUninamousYes(yesQuestions, groupSize);
}

answer([
  ['day6/part1', anyAnsweredYes(input)],
  ['day6/part2', allAnsweredYes(input)],
])
