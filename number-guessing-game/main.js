let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
console.log(guesses);
const lastResult = document.querySelector('.lastResult');
console.log(lastResult);
const lowOrHi = document.querySelector('.lowOrHi');
console.log(lowOrHi);


const guessSubmit = document.querySelector('.guessSubmit');
console.log(guessSubmit);
const guessField = document.querySelector('.guessField');
console.log(guessField);

let guessCount = 1;
let resetButton;
