import readlineSync from 'readline-sync';
import getUserName from './cli.js';

export default function evenGame() {
  const userName = getUserName();
  const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;

  while (count < 3) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(number);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      return;
    }

    if (count === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
}
