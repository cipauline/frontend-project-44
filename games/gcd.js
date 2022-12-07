import {
  sayHi,
  makeNum,
  printRule,
  process,
} from '../src/index.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const correctAnsw = (qst) => {
  const a = parseInt(qst, 10);
  const b = +qst.split('').slice(2, qst.length).join('');
  return gcd(a, b);
};

const isRight = (qst, answer) => {
  const res = correctAnsw(qst);
  const answ = parseInt(answer, 10);
  return res === answ;
};

const makeQst = () => {
  const a = makeNum();
  const b = makeNum();
  return `${a} ${b}`;
};

export default () => {
  const name = sayHi();
  printRule('Find the greatest common divisor of given numbers.');
  process(makeQst, isRight, correctAnsw, name);
};
