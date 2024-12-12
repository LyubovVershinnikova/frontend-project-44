import * as utils from '../src/index.js';

const generateProgression = () => {
  const firstNumber = utils.getRandomNumber(20);
  const addition = utils.getRandomNumber(10);
  const length = 10;

  const index = utils.getRandomNumber(9);

  const result = [];
  let nextNumber = firstNumber;
  let correctAnswer = null;

  for (let i = 0; i < length; i += 1) {
    if (index === i) {
      result.push('..');
      correctAnswer = nextNumber;
    } else {
      result.push(nextNumber);
    }
    nextNumber += addition;
  }

  return [result.join(' '), correctAnswer];
};

export default function brainProgression() {
  const userName = utils.getUserName();
  const maxCount = utils.maxRound;

  console.log('What number is missing in the progression?');

  let count = 0;
  while (count < maxCount) {
    const [expression, correctAnswer] = generateProgression();

    const userAnswer = utils.getAnswer(expression);
    if (Number(userAnswer) === correctAnswer) {
      count = utils.updateCount(count);
    } else {
      utils.goodbye(userAnswer, correctAnswer, userName);
      return;
    }
  }

  if (count === maxCount) {
    utils.congrats(userName);
  }
}
