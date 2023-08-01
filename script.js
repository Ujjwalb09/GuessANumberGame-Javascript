'use strict';

//logic to generate the random number
let randomNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').value = randomNumber;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

console.log(randomNumber);
let score = 20;
let highScore = 0;
//Applying event listner on check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //value that we are taking in the input

  //if input is empty or zero
  if (!guess) {
    displayMessage('No Number! Please input a number and try again');
  }

  if (score > 1) {
    //when the guess is wrong
    if (guess !== randomNumber && guess !== 0) {
      displayMessage(
        guess > randomNumber ? 'Number too large 🙁' : 'Number too small 🙁'
      );
      score--;
      document.querySelector('.score').textContent = score;

      //when the guess is correct
    } else if (guess === randomNumber) {
      displayMessage('Congratulations, you guessed the right number 🥇');
      //changing background color to green when player wins the game
      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';

      document.querySelector('.number').textContent = randomNumber;

      //setting the highscore as current score when guess is correct
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
  } else {
    displayMessage('You lost the game 😭');

    document.querySelector('.score').textContent = 0;
  }
});

//applying event listner on again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').value = randomNumber;

  randomNumber = document.querySelector('.number').value;
  console.log(randomNumber);

  document.querySelector('body').style.backgroundColor = '#000000';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = '';

  document.querySelector('.number').textContent = '?';

  displayMessage('Start guessing the number 😉');

  document.querySelector('.score').textContent = score;
});
