const options = ["rock", "paper", "sic"];

//computer selection
const computerPlay = function () {
  let computerChoise = options[Math.floor(Math.random() * options.length)];
  return computerChoise;
};
console.log(computerPlay());
