import _ from 'lodash';
import readlineSync from 'readline-sync';

export function getUserName() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export function getRandomNumber(max) {
  return Math.floor(Math.random() * max - 1) + 1;
}

export function sum(firstOperand, secondOperand) {
  return _.sum([firstOperand, secondOperand]);
}

export function multiply(firstOperand, secondOperand) {
  return _.multiply(firstOperand, secondOperand);
}

export function subtract(firstOperand, secondOperand) {
  return _.subtract(firstOperand, secondOperand);
}

export function updateCount(count) {
  console.log('Correct!');
  const newCount = count + 1;
  return newCount;
}

export function getAnswer(expression) {
  console.log(`Question: ${expression}`);

  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
}

export function goodbye(userAnswer, correctAnswer, userName) {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
}

export function congrats(userName) {
  console.log(`Congratulations, ${userName}!`);
}

export const maxRound = 3;
