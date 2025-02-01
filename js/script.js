"use strict";
// Constants
const CHOICES = ["rock", "paper", "scissors"];
const WIN_CONDITIONS = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
};
// DOM Elements
const elChoiceButtons = document.querySelectorAll(".choice-btn");
const elResult = document.querySelector(".result");
const elUserScore = document.querySelector(".user-score");
const elComputerScore = document.querySelector(".computer-score");
// Game State Variables
let userScore = 0;
let computerScore = 0;
function getComputerChoice() {
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
function displayWinner(winner) {
    elResult.textContent = `${winner.toUpperCase()}`;
}
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return;
    }
    if (WIN_CONDITIONS[humanChoice] === computerChoice) {
        userScore++;
        changeUserScore();
        if (userScore === 5) {
            displayWinner("USER");
        }
    }
    else {
        computerScore++;
        changeComputerScore();
        if (computerScore === 5) {
            displayWinner("COMPUTER");
        }
    }
}
elChoiceButtons.forEach((choiceButton) => {
    choiceButton.addEventListener("click", (event) => {
        const target = event.target;
        const humanChoice = target.value;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});
