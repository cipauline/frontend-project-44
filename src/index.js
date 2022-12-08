import readlineSync from 'readline-sync';

const sayHi = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const makeNum = () => Math.floor(Math.random() * 100);

const getAnswer = () => readlineSync.question('Your answer: ');

const printRule = (rule) => {
  console.log(rule);
};

const printQuestion = (qstn) => {
  const quest = `Question: ${qstn}`;
  console.log(quest);
};

const congratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const process = (makeQst, isRight, correctAnsw, name) => {
  let count = 0;
  while (count < 3) {
    const qst = makeQst();
    printQuestion(qst);
    const answer = getAnswer();
    if (isRight(qst, answer)) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnsw(qst)}'.`);
      console.log(`Let's try again, ${name}!`);
      // count = 0;
      return 0;
    }
  }
  return congratulations(name);
};

export {
  sayHi,
  makeNum,
  getAnswer,
  printRule,
  printQuestion,
  process,
};
