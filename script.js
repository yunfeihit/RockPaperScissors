const computerImg = document.getElementById("computer-move");
const playerImg = document.getElementById("player-move");

const computerScoreElement = document.getElementById("computer-score");
const playerScoreElement = document.getElementById("player-score");

//build a function to get coputer choice by ".random()"
function getComputerChoice() {
    let x = Math.random();
    if( x > 0.6666) {
        computerImg.src="img/rock.png";
        return "rock";}
    else if (x > 0.3333) {
        computerImg.src="img/paper.png";   
        return "paper";
    }
    else {
        computerImg.src="img/scissors.png";  
        return "scissors"
    };
}


//build a function to compare move from both side
function compareMove (humanMove, computerMove) {
    if (gameOver) return;//if score reaches 5, just return and dont add score
    if (humanMove == computerMove) {
        winner = "?"
    } else if (humanMove == "paper" && computerMove == "rock") {
        humanScore++;
        winner = "Human";
    } else if (humanMove == "paper" && computerMove == "scissors") {
        computerScore++;
        winner = "Computer";
    } else if (humanMove == "rock" && computerMove == "paper") {
        computerScore++;
        winner = "Computer";
    } else if (humanMove == "rock" && computerMove == "scissors") {
        humanScore++;
        winner = "Human";
    } else if (humanMove == "scissors" && computerMove == "paper") {
        humanScore++;
        winner = "Human";
    } else if (humanMove == "scissors" && computerMove == "rock") {
        computerScore++;
        winner = "Computer";
    }
}

//build function to define win or loose of a game(which has 5 play)
function gameJudge() {
    if (humanScore == 5 && computerScore < 5) {
        playerWin();
        gameOver = true;
    } else if (humanScore < 5 && computerScore == 5) {
        computerWin();
        gameOver = true;
    }
}

//build function of player-win
function playerWin() {
    computerScoreElement.textContent = `${computerScore}`;
    playerScoreElement.textContent = `${humanScore}`;
    document.querySelector(".win").style.visibility = "visible";
    showResetButton()
}

//build function of computer-win
function computerWin() {
    computerScoreElement.textContent = `${humanScore}`;
    playerScoreElement.textContent = `${computerScore}`;
    document.querySelector(".loose").style.visibility = "visible";   
    showResetButton()
}

//show reset button
function showResetButton() {
    document.getElementById("reset-button").style.display = "inline-block";
}

//When click reset button, initial everythin
function reset() {
    document.querySelector(".win").style.visibility = "hidden";
    document.querySelector(".loose").style.visibility = "hidden";   
    document.getElementById("reset-button").style.display = "none";
    humanScore = 0;
    computerScore = 0;
    computerScoreElement.textContent = 0;
    playerScoreElement.textContent = 0;
    computerImg.src = "";
    playerImg.src = "";
    gameOver = false;
}

document.getElementById("reset-button").addEventListener("click", reset);

//set initial score on buth side
let humanScore = 0, computerScore = 0; gameOver = false;

// get human choice and round one round at the sametime ...
document.getElementById("paper").addEventListener("click",()=> {
    let humanChoice, computerChoice;
    humanChoice="paper";
    playerImg.src = "img/paper.png";
    computerChoice = getComputerChoice();
    let winner;
    compareMove(humanChoice, computerChoice);
    computerScoreElement.textContent = computerScore;
    playerScoreElement.textContent = humanScore;
    gameJudge();
    });    
    
document.getElementById("rock").addEventListener("click",()=> {
    let humanChoice, computerChoice;
    humanChoice="rock";
    playerImg.src = "img/rock.png";
    computerChoice = getComputerChoice();
    let winner;
    compareMove(humanChoice, computerChoice);
    computerScoreElement.textContent = computerScore;
    playerScoreElement.textContent = humanScore;
    gameJudge();
});
document.getElementById("scissors").addEventListener("click",()=> {
    let humanChoice, computerChoice;
    humanChoice="scissors";
    playerImg.src = "img/scissors.png";
    computerChoice = getComputerChoice();
    let winner;
    compareMove(humanChoice, computerChoice);
    computerScoreElement.textContent = computerScore;
    playerScoreElement.textContent = humanScore;
    gameJudge();  
});


