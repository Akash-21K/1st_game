//option to choose

const options = ["rock", "paper", "scissor"];

//computer selection
const computerPlay = function () {
  let computerChoise = options[Math.floor(Math.random() * options.length)];
  return computerChoise;
};
console.log(computerPlay());

// Player selction

const playerSelection = document.querySelectorAll("button");
playerSelection.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.id);
  });
});

if (playerSelection === computerPlay) {
  alert("It is a tie!");
} else {
  alert("computer wins");
}
