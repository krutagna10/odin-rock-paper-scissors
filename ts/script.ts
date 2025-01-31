type Choice = "rock" | "paper" | "scissors";
const choices: Choice[] = ["rock", "paper", "scissors"];
const MAX_ROUNDS = 5;

function getComputerChoice(): Choice {
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}

function getHumanChoice() {
  let userInput = prompt("Enter your choice (Rock, Paper, Scissors)");
  return userInput;
}

function playRound(humanChoice: Choice, computerChoice: Choice) {
  let conditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (humanChoice === computerChoice) {
    tieScore++;
    console.log("The game is draw");
  } else {
    if (conditions[humanChoice] === computerChoice) {
      humanScore++;
      console.log(`You win ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose ${computerChoice} beats ${humanChoice}`);
    }
  }
}

// function playGame() {
//   for (let i = 0; i < MAX_ROUNDS; i++) {

//     playRound(humanSelection, computerSelection);
//   }

//   console.log({ tieScore, humanScore, computerScore });
// }

let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
let humanSelection = getHumanChoice()?.toLowerCase() as Choice;
let computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
