let secretNumber = Math.trunc(Math.random()*20) + 1;
let highscore = 0;
let score = 20;
const displayMessage = function (message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
  let guess = Number(document.querySelector('.guess').value)
  if (!guess){
    displayMessage('No Number here!');
  } else if (guess === secretNumber) {
    displayMessage('Your number is right!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (highscore < score) {
      document.querySelector('.highscore').textContent = score;
    }

  } else if (guess !== secretNumber) {
    displayMessage(guess < secretNumber ? 'To Low!' : 'To Hight');
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('End Game!');
      document.querySelector('.score').textContent = 0;
    }
    
  }
})
// Again! button
document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  secretNumber = Math.trunc(Math.random()*20) + 1;
  document.querySelector('body').style.backgroundColor = 'black';
  displayMessage('Starting guessing ...')
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
})