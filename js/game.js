const ROCK = 1
const SCISSORS = 2
const PAPER = 3
const rockHuman = document.getElementById("rock")
const paperHuman = document.getElementById("paper")
const scissorsHuman = document.getElementById("scissors")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    return Math.floor(Math.random() * 3 + 1);
}

function getHumanChoice(){

rockHuman.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
})
paperHuman.addEventListener("click", () => {
    console.log("paper")
     playRound("paper", getComputerChoice())
})

scissorsHuman.addEventListener("click", () => {
    console.log("scissors")
    playRound("scissors", getComputerChoice())
})

}

function showComputerAnswer(choice) {

    if (choice === ROCK){
        console.log("rock");
    }

    else if (choice === PAPER){
        console.log("paper");
    }

    else if (choice === SCISSORS){
        console.log("scissors");
    }
}

function showHumanAnswer(choice) {

    if (choice === "rock"){
        console.log("rock");
    }

    else if (choice === "paper"){
        console.log("paper");
    }

    else if (choice === "scissors"){
        console.log("scissors");
    
    }
}

function playRound(humanChoice, computerChoice){

    showHumanAnswer(humanChoice)
    showComputerAnswer(computerChoice);
    displayWinner(humanChoice, computerChoice)

}

function displayWinner(humanChoice, computerChoice){

    if (
        (humanChoice === "rock" && computerChoice === ROCK) || 
        (humanChoice === "scissors" && computerChoice === SCISSORS) ||
        (humanChoice === "paper" && computerChoice === PAPER)
    )
    {
        console.log("no winner")
        console.log("HUMAN:" + " " + humanScore + " " + "ROBOT:" + " " + computerScore)
    }

    else if(
        (humanChoice === "rock" && computerChoice === PAPER) || 
        (humanChoice === "scissors" && computerChoice === ROCK) ||
        (humanChoice === "paper" && computerChoice === SCISSORS)
    )
    {
        console.log("loser")
        computerScore += 1
        console.log("HUMAN:" + " " + humanScore + " " + "ROBOT:" + " " + computerScore)
    }

    else if(
        (humanChoice === "paper" && computerChoice === ROCK) || 
        (humanChoice === "rock" && computerChoice === SCISSORS) ||
        (humanChoice === "scissors" && computerChoice === PAPER)
    )
    {
        console.log("you are smarter than robot")
        humanScore += 1
        console.log("HUMAN:" + " " + humanScore + " " + "ROBOT:" + " " + computerScore)
    }

}

function playGame() {
    
    getHumanChoice()

}

playGame()
