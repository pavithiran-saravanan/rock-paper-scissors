// Randomly generate a computer's choice as 0->rock 1->paper 2->scissor
function getComputerChoice() {
    return parseInt((Math.random()*10)%3);
}

// Returns the weapon name as string based on the given choice
function getWeaponName(choice) {
    if(choice == 0) return "Rock";
    if(choice == 1) return "Paper";
    if(choice == 2) return "Scissors";
}

// Global variabls to keep track of scores
let computerScore = 0;
let playerScore = 0;

function updateScoreCard(){
    playerRunningScore.textContent = playerScore;
    computerRunningScore.textContent = computerScore;
}

function resetScoreCard(){
    playerRunningScore.textContent = 0;
    computerRunningScore.textContent = 0;
}

// Simulates one round of game
function playRound(computerSelection, playerSelection) {
    let resultMessage = "";
    if(computerSelection == playerSelection){
        resultMessage = `You both chose ${getWeaponName(computerSelection)}`;
    }
    else if((playerSelection == 0 && computerSelection == 2) || (playerSelection == 1 && computerSelection == 0) || (playerSelection == 2 && computerSelection == 1)){
        if(playerSelection == 2) resultMessage = `${getWeaponName(playerSelection)} beat ${getWeaponName(computerSelection)}`
        else resultMessage = `${getWeaponName(playerSelection)} beats ${getWeaponName(computerSelection)}`;
        playerScore++;
        updateScoreCard();
    }
    else {
        // resultMessage = `${getWeaponName(computerSelection)} beats ${getWeaponName(playerSelection)}`;
        resultMessage = `${getWeaponName(playerSelection)} is beaten by ${getWeaponName(computerSelection)}`;
        computerScore++;
        updateScoreCard();
    }
    return resultMessage;
}

// Output text references
const roundResult = document.querySelector('.round-result');
const winner = document.querySelector('.winner');
const again = document.querySelector('.again');
const buttons = document.querySelectorAll('.select');

const playerRunningScore = document.querySelector('.player-running-score');
const computerRunningScore = document.querySelector('.computer-running-score');

// AnnounceWinnenr
function announceWinner(){
    if(playerScore > computerScore) winner.textContent = "You Won";
    else winner.textContent = "Computer Won";
}

// PlayAgain
function playAgain(){
    buttons.forEach((button) => {
        button.classList.remove('hidden');
    })
    again.classList.add('hidden');
    playerScore = 0;
    computerScore = 0;
    resetScoreCard();
    roundResult.textContent = 'Choose Your Weapon';
    winner.textContent = '';
}

// Adding evenlistener to player selection buttons
buttons.forEach((button) => {
    // For each of the button add a event listener click that calls playRound function with correct playerSelection
    const selection = button.getAttribute('id');
    let playerSelection;
    if(selection == 'rock-btn') playerSelection = 0;
    if(selection == 'paper-btn') playerSelection = 1;
    if(selection == 'scissor-btn') playerSelection = 2;

    button.addEventListener('click', (e) => {
        roundResult.textContent = playRound(getComputerChoice(), playerSelection);
        if(computerScore == 5 || playerScore == 5){
            announceWinner();
            roundResult.textContent = '';
            again.classList.remove('hidden');
            buttons.forEach((button) => {
                button.classList.add('hidden');
            })
            return;
        }
    });
})

// Add evenlistener to again button
again.addEventListener('click', (e)=>{
    playAgain();
})