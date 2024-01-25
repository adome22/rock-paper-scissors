function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw. Go again!";
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You are a winner! Rock beats scissors.";
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        return "You are a winner! Paper beats rock.";
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You are a winner! Scissors beat paper.";
    } else {
        return `You lost :( ${computerSelection} beats ${playerSelection}`;
    }
}

const playerSelection = prompt("Rock, Paper or Scissors?");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection.toLowerCase(), computerSelection));
