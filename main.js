const options = ["rock", "paper", "siccisor"];

let computerPlay = options[Math.floor(Math.random() * options.length)];
console.log(`Computer chose:`, computerPlay);

do {
  playerPlay = prompt(
    `Chose your option: Rock, Paper, Siccisor`
  ).toLocaleLowerCase();
  if (
    playerPlay !== "rock" &&
    playerPlay !== "paper" &&
    playerPlay !== "siccisor"
  ) {
    alert(`Invalid Selection! Try again from Rock, Paper, Siccisor`);
  }
} while (
  playerPlay !== "rock" &&
  playerPlay !== "paper" &&
  playerPlay !== "siccisor"
);
alert(`Good Job! You chose: ${playerPlay}`);

console.log(`Player chose:`, playerPlay);

if (computerPlay === playerPlay) {
  console.log(`It's a tie`);
} else if (
  (computerPlay === "rock" && playerPlay === "siccisor") ||
  (computerPlay === "paper" && playerPlay === "rock") ||
  (computerPlay === "siccisor" && playerPlay === "paper")
) {
  console.log(`Computer wins`);
} else {
  console.log(`Player wins`);
}
