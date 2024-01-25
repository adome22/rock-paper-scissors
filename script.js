// Loop for 5 games.
for (let count = 0; count < 5; count++) {

    // Randomly chooses the computer choice for rock, paper and scissors.
    function getComputerChoice() {
        const choice = ["rock", "paper", "scissors"];
        return choice[Math.floor(Math.random() * choice.length)];
    }

    // Get user input.
    const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

    // ComputerChoice to constant.
    const computerSelection = getComputerChoice();

    // Logic of the game.
    function game(playerSelection, computerSelection) {
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
    // Making a variable for the results.
    let result = game(playerSelection, computerSelection);

    // Result of each round.
    console.log(result);
}