import readlineSync from 'readline-sync';

export function sayHello() {
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
}

export default sayHello;
