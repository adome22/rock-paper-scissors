const game = () => {
    let numOfGames = parseInt(prompt("How many games? "));
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    function playRound() {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorsBtn = document.querySelector('.scissors');
        const playerOptions = [rockBtn, paperBtn, scissorsBtn];
        const computerOptions = ['rock', 'paper', 'scissors'];
        const restart = document.querySelector('.restart');

        restart.style.display = 'none';

        playerOptions.forEach(option => {
            option.addEventListener('click', function () {
                const moveChoice = document.querySelector('.move');
                const movesLeft = document.querySelector('.movesleft');
                const result = document.querySelector('.result');
                moves++;
                movesLeft.innerText = `Moves Left: ${numOfGames - moves}`;
 

                const choiceNumber = Math.floor(Math.random() * computerOptions.length);
                const computerChoice = computerOptions[choiceNumber];
 
                winner(this.innerText, computerChoice)
                
                if (moves == numOfGames) {
                    playerOptions.forEach(option => {
                        option.style.display = 'none';
                    });
                    
                    result.style.display = 'none';

                    moveChoice.style.display = 'none';
                    
                    restart.style.display = 'flex'
                    restart.innerText = 'Restart';
                    restart.addEventListener('click', () => {
                        window.location.reload();
                    })
                    if (playerScore > computerScore) {
                        movesLeft.textContent = "You are Winner!"
                        
                    }
                    else if (playerScore < computerScore) {
                        movesLeft.textContent = "Computer won. Better luck next time!"  
                    }
                    else {
                        movesLeft.textContent = "Draw";
                    }
                } 
            })
        })
    }

    const winner = (playerSelection, computerSelection) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();

        if (playerSelection === computerSelection) {
            result.textContent = "It's a draw!";
        }
        if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')) {
                playerScore++;
                result.textContent = "Player Wins!";
                playerScoreBoard.textContent = playerScore;
        }
        if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
            (computerSelection === 'paper' && playerSelection === 'rock') ||
            (computerSelection === 'scissors' && playerSelection === 'paper')) {
                computerScore++;
                result.textContent = "Computer Wins!";
                computerScoreBoard.textContent = computerScore;
        }
    }
    playRound();
}
game();