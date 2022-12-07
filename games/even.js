import {
  sayHi,
  makeNum,
  printRule,
  process,
} from '../src/index.js';

const isEven = (num) => num % 2 === 0;
const correctAnswer = (num) => (isEven(num) ? 'yes' : 'no');
const correctAnsw = (qst) => correctAnswer(qst);
const makeQst = () => makeNum();
const isRight = (num, answer) => {
  const bool = (isEven(num) && answer === 'yes') || (!isEven(num) && answer === 'no');
  return bool;
};

export default () => {
  const name = sayHi();
  printRule('Answer "yes" if the number is even, otherwise answer "no".');
  process(makeQst, isRight, correctAnsw, name);
};
