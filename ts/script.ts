// Type
type Choice = "rock" | "paper" | "scissors";

// Constants
const CHOICES: Choice[] = ["rock", "paper", "scissors"];
const WIN_CONDITIONS = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

// DOM Elements

const elChoiceButtons = document.querySelectorAll(
  ".choice-btn",
) as NodeListOf<HTMLButtonElement>;
const elResult = document.querySelector(".result") as HTMLParagraphElement;
const elUserScore = document.querySelector(".user-score") as HTMLElement;
const elComputerScore = document.querySelector(
  ".computer-score",
) as HTMLElement;

// Game State Variables
let userScore = 0;
let computerScore = 0;

function getComputerChoice(): Choice {
  const random = Math.floor(Math.random() * 3);
  return CHOICES[random];
}

function getHumanChoice() {
  let userInput = prompt("Enter your choice (Rock, Paper, Scissors)");
  return userInput;
}

function changeUserScore() {
  elUserScore.textContent = `${userScore}`;
}

function changeComputerScore() {
  elComputerScore.textContent = `${computerScore}`;
}

function displayWinner(winner: string) {
  elResult.textContent = `${winner.toUpperCase()}`;
}

function playRound(humanChoice: Choice, computerChoice: Choice) {
  if (humanChoice === computerChoice) {
    return;
  }

  if (WIN_CONDITIONS[humanChoice] === computerChoice) {
    userScore++;
    changeUserScore();
    if (userScore === 5) {
      displayWinner("USER");
    }
  } else {
    computerScore++;
    changeComputerScore();
    if (computerScore === 5) {
      displayWinner("COMPUTER");
    }
  }
}

elChoiceButtons.forEach((choiceButton) => {
  choiceButton.addEventListener("click", (event) => {
    const target = event.target as HTMLButtonElement;
    const humanChoice = target.value as Choice;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});
