import * as utils from './index.js';

const generateExpression = () => {
  const firstOperand = utils.getRandomNumber(100);
  const secondOperand = utils.getRandomNumber(100);

  const operands = ['+', '-', '*'];

  const index = utils.getRandomNumber(3);

  const operand = operands[index];

  let correctAnswer;
  const expression = `${firstOperand} ${operand} ${secondOperand}`;
  switch (operand) {
    case operands[0]:
      correctAnswer = utils.sum(firstOperand, secondOperand);
      break;
    case operands[1]:
      correctAnswer = utils.subtract(firstOperand, secondOperand);
      break;
    case operands[2]:
      correctAnswer = utils.multiply(firstOperand, secondOperand);
      break;
    default:
      break;
  }

  return [expression, correctAnswer];
};

export default function brainCalc() {
  const userName = utils.getUserName();
  const maxCount = 3;

  let count = 0;
  while (count < maxCount) {
    const [expression, correctAnswer] = generateExpression();

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
