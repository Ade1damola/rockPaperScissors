let gamerScore = 0;
let computerScore = 0;
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const roundMessageParagraph = document.getElementById('round-message');
const gameOverMessageParagraph = document.getElementById('game-over-message');
const gameButtons = document.querySelectorAll('button');

function updateScores() {
    playerScoreSpan.textContent = gamerScore;
    computerScoreSpan.textContent = computerScore;
}

function displayMessage(message) {
    roundMessageParagraph.textContent = message;
}

function displayGameOver(message) {
    gameOverMessageParagraph.textContent = message;
    gameButtons.forEach(button => button.disabled = true); // Disable buttons
}

function playRound(gamerChoice) {
    const choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[random];

    let message = `Player: ${gamerChoice}, Computer: ${computerChoice}. `;

    if (gamerChoice === computerChoice) {
        message += "It's a tie!";
    } else if (
        (gamerChoice === "rock" && computerChoice === "scissors") ||
        (gamerChoice === "paper" && computerChoice === "rock") ||
        (gamerChoice === "scissors" && computerChoice === "paper")
    ) {
        message += "Player wins this round!";
        gamerScore++;
    } else {
        message += "Computer wins this round!";
        computerScore++;
    }

    displayMessage(message);
    updateScores();

    if (gamerScore === 5) {
        displayGameOver("You win the game!");
    } else if (computerScore === 5) {
        displayGameOver("Computer wins the game!");
    }
}

// Initial score display
updateScores();

// let gamerScore = 0;
// let computerScore = 0;
// function rockPaperScissors() {

//     if (gamerScore === 5) {
//         console.log("You win the game!");
//         return;
//     } else if (computerScore === 5) {
//         console.log("Computer wins the game!");
//         return;
//     }

//     const gamerChoice = prompt("Pick rock, paper, or scissors")?.toLowerCase();

//     const choices = ["rock", "paper", "scissors"];
//     let random = Math.floor(Math.random() * choices.length);
//     let computerChoice = choices[random];

//     if (gamerChoice == "rock" || gamerChoice == "paper" || gamerChoice == "scissors") {
//         if (gamerChoice === computerChoice) {
//             console.log("Player:", gamerChoice, ", Computer:", computerChoice);
//             console.log("It's a tie!");
//             console.log("Scores - Player:", gamerScore, ", Computer:", computerScore);
//             rockPaperScissors();
//         } else if (gamerChoice === "rock" && computerChoice === "scissors" || gamerChoice === "paper" && computerChoice === "rock" || gamerChoice === "scissors" && computerChoice === "paper") {
//             console.log("Player:", gamerChoice, ", Computer:", computerChoice);
//             console.log("Player wins!");
//             gamerScore++;
//             console.log("Scores - Player:", gamerScore, ", Computer:", computerScore);
//             rockPaperScissors();
//         } else {
//             console.log("Player:", gamerChoice, ", Computer:", computerChoice);
//             console.log("Computer wins!");
//             computerScore++;
//             console.log("Scores - Player:", gamerScore, ", Computer:", computerScore);
//             rockPaperScissors();
//         }

//     } else {
//         console.log("Enter the options: rock, paper, or scissors")
//         rockPaperScissors();
//     }

// }

// rockPaperScissors()
