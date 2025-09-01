let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "scissors";
  } else {
    return "paper";
  }
}

function getHumanChoice() {
  const humanChoice = prompt("Choose").toLowerCase();
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("its a tie");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++; // увеличиваем счет человека
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++; // увеличиваем счет компьютера
  }
}

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());

if (humanScore > computerScore) {
  console.log(`Game is over! You won! ${humanScore} - ${computerScore}`);
} else if (humanScore < computerScore) {
  console.log(`Game is over! You lost! ${humanScore} - ${computerScore}`);
} else {
  console.log("It is a tie!");
}
