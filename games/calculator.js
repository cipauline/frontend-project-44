import {
  sayHi,
  makeNum,
  printRule,
  process,
} from '../src/index.js';

const getSym = () => {
  const symbolArr = ['+', '-', '*'];
  const x = Math.floor(Math.random() * symbolArr.length);
  const sym = symbolArr[x];
  return sym;
};

const correctAnsw = (qst) => {
  let num = 0;
  const a = parseInt(qst, 10);
  const b = +qst.split('').slice(4, qst.length).join('');
  if (qst.includes('+')) {
    num = a + b;
  } else if (qst.includes('-')) {
    num = a - b;
  } else if (qst.includes('*')) {
    num = a * b;
  }
  return num;
};

const isRight = (qst, answer) => {
  const res = correctAnsw(qst);
  const answ = parseInt(answer, 10);
  return res === answ;
};

const makeQst = () => {
  const a = makeNum();
  const b = makeNum();
  const sym = getSym();
  return `${a} ${sym} ${b}`;
};

export default () => {
  const name = sayHi();
  printRule('What is the result of the expression?');
  process(makeQst, isRight, correctAnsw, name);
};
