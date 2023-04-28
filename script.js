// Randomly generate a computer's choice as 0->rock 1->paper 2->scissor
function getComputerChoice() {
    return parseInt((Math.random()*10)%3);
}

// Prompt player to enter his choice and returns it
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

// Returns the weapon name as string based on the given choice
function getWeaponName(choice) {
    if(choice == 0) return "Rock";
    if(choice == 1) return "Paper";
    if(choice == 2) return "Scissor";
}

// Global variabls to keep track of scores
let computerScore = 0;
let playerScore = 0;

// Returns Scorecard as string
function getScoreCard(){
    return `Player: ${playerScore} Computer: ${computerScore}`;
}

// Simulates one round of game
function playRound(computerSelection, playerSelection) {
    let resultMessage = "";
    if(computerSelection == playerSelection){
        resultMessage = `You both chose ${getWeaponName(computerSelection)}`;
    }
    else if((playerSelection == 0 && computerSelection == 2) || (playerSelection == 1 && computerSelection == 0) || (playerSelection == 2 && computerSelection == 1)){
        resultMessage = `${getWeaponName(playerSelection)} beats ${getWeaponName(computerSelection)}`;
        playerScore++;
    }
    else {
        resultMessage = `${getWeaponName(computerSelection)} beats ${getWeaponName(playerSelection)}`;
        computerScore++;
    }
    return resultMessage;
}

// Get choice from computer and player. Play rounds. Show result at the end.
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