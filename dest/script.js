"use strict";
const choices = ["rock", "paper", "scissors"];
const MAX_ROUNDS = 5;
function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}
function getHumanChoice() {
    let userInput = prompt("Enter your choice (Rock, Paper, Scissors)");
    return userInput;
}
function playRound(humanChoice, computerChoice) {
    let conditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    };
    if (humanChoice === computerChoice) {
        tieScore++;
        console.log("The game is draw");
    }
    else {
        if (conditions[humanChoice] === computerChoice) {
            humanScore++;
            console.log(`You win ${humanChoice} beats ${computerChoice}`);
        }
        else {
            computerScore++;
            console.log(`You lose ${computerChoice} beats ${humanChoice}`);
        }
    }
}
function playGame() {
    var _a;
    for (let i = 0; i < MAX_ROUNDS; i++) {
        let humanSelection = (_a = getHumanChoice()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log({ tieScore, humanScore, computerScore });
}
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
playGame();
