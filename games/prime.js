import {
  sayHi,
  printRule,
  makeNum,
  process,
} from '../src/index.js';

const correctAnsw = (qst) => {
  let acc = 0;
  for (let i = 1; i < qst; i += 1) {
    if (qst % i === 0) {
      acc += 1;
    }
  }
  return acc === 1 ? 'yes' : 'no';
};

const isRight = (qst, answer) => {
  const res = correctAnsw(qst);
  return res === answer;
};

const makeQst = () => makeNum();

export default () => {
  const name = sayHi();
  printRule('Answer "yes" if given number is prime. Otherwise answer "no".');
  process(makeQst, isRight, correctAnsw, name);
};
