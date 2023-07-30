'use strict';

/*
console.log(document.querySelector('.message').textContent);

//manipulating DOM notes of .message element
document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//logic to generate the random number

let randomNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').value = randomNumber;

console.log(randomNumber);
let score = 20;
let highScore = 0;
//Applying event listner on check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //value that we are taking in the input

  if (score > 1) {
    //when guess is greater than number
    if (guess > randomNumber && guess !== 0) {
      document.querySelector('.message').textContent = 'Number too large';

      //decreasing the score on every incorrect answer
      score--;
      document.querySelector('.score').textContent = score;

      //when guess is less than number
    } else if (guess < randomNumber && guess !== 0) {
      document.querySelector('.message').textContent = 'Number too small';

      //decreasing the score on every incorrect answer
      score--;
      document.querySelector('.score').textContent = score;

      //when player wins the game
    } else if (guess === randomNumber) {
      document.querySelector('.message').textContent =
        'Congratulations, you guessed the right number';

      //changing background color to green when player wins the game
      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';

      document.querySelector('.number').textContent = randomNumber;

      //setting the highscore as current score when guess is correct
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = score;
      }
    }
  } else {
    document.querySelector('.message').textContent = 'You lost the game 😭';

    document.querySelector('.score').textContent = 0;
  }

  //if input is empty or zero
  if (!guess) {
    document.querySelector('.message').textContent =
      'No Number! Please input a number and try again';
  }
});

//applying event listner on again button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').value = Math.trunc(Math.random() * 20 + 1);

  randomNumber = document.querySelector('.number').value;
  console.log(randomNumber);

  document.querySelector('body').style.backgroundColor = '#000000';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = '';

  document.querySelector('.number').textContent = '?';

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = '20';

  score = 20;
});
