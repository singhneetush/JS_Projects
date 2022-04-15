//generating random number
let randomNumber = Math.floor(Math.random() * 100) + 1;

//declaring variables

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

let guessCount = 1; //set 1 , used to keep the track of chances left for the user
let resetButton; //declared to be displayed when the game is over
guessField.focus(); //helps to shipt the focus to the input field everytime submit button is clicked



//declaring a function , that will probably control the entire functioning of the game

//===================================================
//arrow function
//function name = () => {};
//===================================================

checkGuess = () => {
  /*Number constructor is an inbuilt javascript function that creates a Number object
    let a  = Number("123") //b===123 is true*/

  const userGuess = Number(guessField.value);
  //userGuess sets its current value to the value entered in the guessField , i.e, in the input box
  //this is just to make sure that the value that is being input is a number , and we r not changing this number so its declared with a const keyword

  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses : ';
  }
  guesses.textContent += userGuess + ' ';
  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations ! You got it right ! ';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = ' ';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = 'Woahh ! Well Played . Game Over!!!';
    lowOrHi.textContent = ' ';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low.';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high.';
    }
  }
  guessCount++;
  guessField.value = ' ';
  guessField.focus(); //.focus gives focus to an element
};

guessCount === 1;

//calling checkGuess when the submit button is triggered
//using event listener click
guessSubmit.addEventListener('click', checkGuess);

//defining the funtion when the game is over

setGameOver = () => {
  guessField.disable = true; //.disable prevents the user to input more text into the DOM element
  guessSubmit.disable = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start New Game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
};

resetGame = () => {
  guessCount = 1;
  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disable = false;
  guessSubmit.disable = false;
  guessField.value = ' ';
  guessField.focus();
  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
};
