import * as utils from '../src/index.js';

export default function evenGame() {
  const userName = utils.getUserName();
  const maxCount = utils.maxRound;
  const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;

  while (count < maxCount) {
    const number = utils.getRandomNumber(100);
    const userAnswer = utils.getAnswer(number);
    const correctAnswer = isEven(number);

    if (userAnswer === correctAnswer) {
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
