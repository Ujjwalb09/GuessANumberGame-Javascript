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

document.querySelector('.number').value = Math.trunc(Math.random() * 20 + 1);

let randomNumber = document.querySelector('.number').value;

console.log(randomNumber);

//Applying event listner on check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //value that we are taking in the input

  if (guess > randomNumber && guess !== 0) {
    document.querySelector('.message').textContent = 'Number too large';

    //decreasing the score on every incorrect answer
    document.querySelector('.score').textContent =
      document.querySelector('.score').textContent - 1;
  } else if (guess < randomNumber && guess !== 0) {
    document.querySelector('.message').textContent = 'Number too small';

    //decreasing the score on every incorrect answer
    document.querySelector('.score').textContent =
      document.querySelector('.score').textContent - 1;
  } else if (guess == randomNumber) {
    document.querySelector('.message').textContent =
      'Congratulations, you guessed the right number';

    document.querySelector('.number').textContent = randomNumber;
    //setting the highscore as current score when guess is correct

    if (
      document.querySelector('.score').textContent >
      document.querySelector('.highscore').textContent
    ) {
      document.querySelector('.highscore').textContent =
        document.querySelector('.score').textContent;
    }
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

  document.querySelector('.guess').value = 0;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = '20';
});
