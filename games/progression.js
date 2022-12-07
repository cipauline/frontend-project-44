import {
  sayHi,
  printRule,
  process,
} from '../src/index.js';

const getNum = () => Math.floor(Math.random() * 10) + 1;

const correctAnsw = (qst) => {
  const arr = qst.split(' ');
  const a = arr.indexOf('..');
  const b = arr[a - 1];
  const c = arr[a + 1];
  const x = (c - b) / 2;
  return parseInt(b, 10) + x;
};

const isRight = (qst, answer) => {
  const res = correctAnsw(qst);
  const answ = parseInt(answer, 10);
  return res === answ;
};

const makeQst = () => {
  const a = getNum();
  const b = getNum();
  const c = getNum();
  const arr = [a, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let acc = a;
  for (let i = 1; i < arr.length; i += 1) {
    arr[i] = acc + b;
    acc += b;
  }
  arr[c] = '..';
  return arr.join(' ');
};

export default () => {
  const name = sayHi();
  printRule('What number is missing in the progression?');
  process(makeQst, isRight, correctAnsw, name);
};
