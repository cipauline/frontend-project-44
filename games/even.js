import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;
const correctAnswer = (num) => (isEven(num) ? 'yes' : 'no');

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  while (count < 3) {
    const num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if ((isEven(num) && answer === 'yes') || (!isEven(num) && answer === 'no')) {
      console.log('Correct!');
      count += 1;
    } else {
      const correctAnsw = correctAnswer(num);
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnsw}.'`);
      console.log(`Let's try again, ${name}!`);
      count = 0;
    }
    console.log(`Congratulations, ${name}`);
  }
};
