import * as utils from '../src/index.js';

const NOD = (x, y) => {
  if (y > x) {
    return NOD(y, x);
  }
  if (!y) {
    return x;
  }
  return NOD(y, x % y);
};

export default function brainGCD() {
  const userName = utils.getUserName();
  const maxCount = utils.maxRound;

  console.log('Find the greatest common divisor of given numbers.');

  let count = 0;

  while (count < maxCount) {
    const firstOperand = utils.getRandomNumber(100);
    const secondOperand = utils.getRandomNumber(100);
    const userAnswer = utils.getAnswer(`${firstOperand} ${secondOperand}`);
    const correctAnswer = NOD(firstOperand, secondOperand);

    if (Number(userAnswer) === correctAnswer) {
      count = utils.updateCount(count);
    } else {
      utils.goodbye(userAnswer, correctAnswer, userName);
      return;
    }

    if (count === maxCount) {
      utils.congrats(userName);
    }
  }
}
