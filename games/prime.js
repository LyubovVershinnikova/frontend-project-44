import * as utils from '../src/index.js';

const isPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if(num % i === 0) return false;
  }
  return num > 1;
}

export default function brainPrime() {
  const userName = utils.getUserName();
  const maxCount = utils.maxRound;

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let count = 0;
  while (count < maxCount) {
    const number = utils.getRandomNumber(100);
    const userAnswer = utils.getAnswer(number);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

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