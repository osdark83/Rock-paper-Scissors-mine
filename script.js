let pScore = 0;
let cScore = 0;
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
            case 0:
            return "Rock";
            break;

            case 1:
            return "Paper";
            break;

            default:
            return "Scissors";
        }
    }
        
function displayScore() {
    let playerScore = document.querySelector("#player_score");
        playerScore.textContent = pScore;
    let computerScore = document.querySelector("#computer_score");
        computerScore.textContent = cScore;
}

function endGame() {
    const buttons = document.querySelectorAll(".choice");
        buttons.forEach(button => button.removeEventListener("click", game));
}

function winner() {
    let finalResult = document.querySelector("#final_result");
    if(pScore===5) {
        finalResult.textContent = "You win!"
        endGame();
    } else if(cScore===5) {
        finalResult.textContent= "You lose!"
        endGame();
    }   
}

function game(e) {
    let computerSelection = computerPlay();
    let playerSelection = e.target.id;
                
    let computerChoice = document.querySelector("#computer_choice");
        computerChoice.textContent = computerSelection;
    let playerChoice = document.querySelector("#player_choice");
        playerChoice.textContent = playerSelection;

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return "Draw! You both chose " + computerSelection + ".";
        } else if (playerSelection === "Rock") {
            switch (computerSelection) {
                case "Paper":
                cScore++;
                return "You lose this round!"
                break;
        
                default:
                pScore++;
                return "You win this round!"
            }
        } else if (playerSelection === "Paper") {
            switch (computerSelection) {
                case "Rock":
                pScore++;
                return "You win this round!"
                break;
        
                default:
                cScore++;
                return "You lose this round!"
            }
        } else if (playerSelection === "Scissors") {
            switch (computerSelection) {
                case "Rock":
                cScore++;
                return "You lose this round!"
                break;
        
                default:
                pScore++;
                return "You win this round!"
            }
        }
    }
                
    let result = playRound(playerSelection, computerSelection);
    let roundResult = document.querySelector("#result_display");
        roundResult.textContent = result;
    
    //RESET
    document.getElementById("reset").onclick = function() {
        location.reload();
    }

    displayScore();
    winner();
}

const buttons = document.querySelectorAll(".choice");
    buttons.forEach(button => button.addEventListener("click", game));