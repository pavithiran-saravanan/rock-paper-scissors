//Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. 

function getComputerChoice() {
    return parseInt((Math.random()*10)%3);
}

function getPlayerChoice(roundNumber) {
    let choice = prompt(`Round ${roundNumber}: Choose Your Weapon (Rock, Paper, Scissor)`);
    if(choice != null){
        choice = choice.toLocaleLowerCase().trim();
        if(choice == "rock") return 0;
        if(choice == "paper") return 1;
        if(choice == "scissor") return 2;
    }
    alert("You didn't make a valid choice. Quitting game...");
    return 3;
}

function getObjectName(choice) {
    if(choice == 0) return "Rock";
    if(choice == 1) return "Paper";
    if(choice == 2) return "Scissor";
}

let computerScore = 0;
let playerScore = 0;

function getScoreCard(){
    return `Player: ${playerScore} Computer: ${computerScore}`;
}

function playRound(computerSelection, playerSelection) {
    let resultMessage = "";
    if(computerSelection == playerSelection){
        resultMessage = `You both chose ${getObjectName(computerSelection)}`;
    }
    else if((playerSelection == 0 && computerSelection == 2) || (playerSelection == 1 && computerSelection == 0) || (playerSelection == 2 && computerSelection == 1)){
        resultMessage = `${getObjectName(playerSelection)} beats ${getObjectName(computerSelection)}`;
        playerScore++;
    }
    else {
        resultMessage = `${getObjectName(computerSelection)} beats ${getObjectName(playerSelection)}`;
        computerScore++;
    }
    return resultMessage;
}

function game(){
    for(let i = 0; i < 5; i++){
        let playerChoice = getPlayerChoice(i+1);
        if(playerChoice == 3) return;
        let computerChoice = getComputerChoice();
        alert(playRound(computerChoice, playerChoice) + '. \n' + getScoreCard());
    }
    if(playerScore > computerScore) 
        alert(`Congratulations! You Won.` + '. \n' + getScoreCard());
    else if(computerScore > playerScore)
        alert(`You Lose. Better Luck Next Time.` + '. \n' + getScoreCard())
    else
        alert(`Game Ended In A Tie. Better Luck Next Time.` + '. \n' + getScoreCard())
}

game();