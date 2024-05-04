'use strict';

/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Hey Boo';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 24;

console.log(document.querySelector('.guess').value);*/
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When player does not enter any value
  if (!guess && score > 1) {
    document.querySelector('.message').textContent = 'No number!';
  }
  // when player guesses correct value
  else if (guess === secretNumber && score > 1) {
    document.querySelector('.message').textContent = 'Correct guess!';
    score++;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // when player guesses a number other than secret number
  else if (guess !== secretNumber && score > 1) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? 'Too High!' : 'Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
  }

  // When player fails to guess correct number in 20 attempts
  else {
    document.querySelector('.message').textContent = 'You lost the game!';
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.guess').value = null;
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
