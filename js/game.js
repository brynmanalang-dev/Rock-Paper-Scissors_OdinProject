const ROCK = 1
const SCISSORS = 2
const PAPER = 3
const rockHuman = document.getElementById("rock")
const paperHuman = document.getElementById("paper")
const scissorsHuman = document.getElementById("scissors")
const humanImg = document.getElementById("humanHand")
const computerImg = document.getElementById("computerHand")
const displayHumanScore = document.getElementById("humanScore")
const displayComputerScore = document.getElementById("computerScore")
const endScreen = document.getElementById("endScreen")
const status = document.getElementById("status")
const humanHand = document.getElementById("humanHand")
const computerHand = document.getElementById("computerHand")
const clickSound = new Audio("../sfx/mc-click.wav")
const roundSound = new Audio("../sfx/whoosh.wav")
const winRoundSound = new Audio("../sfx/win.mp3")
const loseroundSound = new Audio("../sfx/loseturn.mp3")
const loseGameSound = new Audio("../sfx/lose.mp3")
const winGameSound = new Audio("../sfx/winGame.mp3")
const drawSound = new Audio("../sfx/draw.mp3")
const bgMusic = new Audio("../sfx/bgMusic.mp3")

let humanScore = 0;
let computerScore = 0;
let rounds = 1;

function getComputerChoice() {
     return Math.floor(Math.random() * 3 + 1);
}

function getHumanChoice(){

rockHuman.addEventListener("click", () => {
    clickSound.play();
    option.classList.remove("show");
    instruction.classList.remove("show");
    humanHand.classList.remove("animateHuman")
    computerHand.classList.remove("animateComputer")
    setTimeout(() => {
    playRound("rock", getComputerChoice())
    humanImg.src="../img/rockhandhuman.png"
    },
    1000);

})
paperHuman.addEventListener("click", () => {
    clickSound.play();
    option.classList.remove("show");
    instruction.classList.remove("show");
    humanHand.classList.remove("animateHuman")
    computerHand.classList.remove("animateComputer")
    setTimeout(() => {
    playRound("paper", getComputerChoice())
    humanImg.src="../img/paperhandhuman.png"
    },
    1000);

})

scissorsHuman.addEventListener("click", () => {
    clickSound.play();
    option.classList.remove("show");
    instruction.classList.remove("show");
    humanHand.classList.remove("animateHuman")
    computerHand.classList.remove("animateComputer")
    setTimeout(() => {
    playRound("scissors", getComputerChoice())
     humanImg.src="../img/scissorshandhuman.png"
    },
    1000);
})

}

function playRound(humanChoice, computerChoice){

    if(
        computerChoice === ROCK
    ){
        computerImg.src="../img/rockhand.png"
    }
    else if(
        computerChoice === PAPER
    ){
        computerImg.src="../img/paperhand.png"
    }
    else if(
        computerChoice === SCISSORS
    ){
        computerImg.src="../img/scissorshand.png"
    }
    displayWinner(humanChoice, computerChoice)
}

function displayWinner(humanChoice, computerChoice){

    if (
        (humanChoice === "rock" && computerChoice === ROCK) || 
        (humanChoice === "scissors" && computerChoice === SCISSORS) ||
        (humanChoice === "paper" && computerChoice === PAPER)
    )
    {
        drawSound.play()
    }

    else if(
        (humanChoice === "rock" && computerChoice === PAPER) || 
        (humanChoice === "scissors" && computerChoice === ROCK) ||
        (humanChoice === "paper" && computerChoice === SCISSORS)
    )
    {
        computerScore += 1
        displayComputerScore.textContent= computerScore
        loseroundSound.play()
    }

    else if(
        (humanChoice === "paper" && computerChoice === ROCK) || 
        (humanChoice === "rock" && computerChoice === SCISSORS) ||
        (humanChoice === "scissors" && computerChoice === PAPER)
    )
    {
        humanScore += 1
        displayHumanScore.textContent= humanScore
        winRoundSound.play()
    }
    setTimeout(() => {
        checkScores()  
    }, 1000);
}

function playGame() {
    round.classList.remove("hide")
    round.textContent= "ROUND" + " " + rounds;
    humanHand.classList.add("animateHuman")
    computerHand.classList.add("animateComputer")
    computerImg.src="../img/rockhand.png"
    humanHand.src="../img/rockhandhuman.png"
    roundSound.play()
}


function checkScores(){
    if (humanScore >= 5) {
        status.textContent= "🎉 WINNER 🎉"
        endScreen.classList.add("show")
        endScreen.style.backgroundColor="rgba(0, 255, 47, 0.256)"
        option.classList.add("hide")
        round.classList.add("hide")
        humanHand.classList.remove("animateHuman")
        computerHand.classList.remove("animateComputer")
        winGameSound.play()
        return;
    }

    if (computerScore >= 5) {
        status.textContent= "👎 YOU LOSE"
        endScreen.classList.add("show")
        endScreen.style.backgroundColor="rgba(255, 0, 0, 0.26)"
        option.classList.add("hide")
        round.classList.add("hide")
        humanHand.classList.remove("animateHuman")
        computerHand.classList.remove("animateComputer")
        loseGameSound.play()
        return;
    }

    rounds += 1
    playGame()
}
getHumanChoice()
playGame()
bgMusic.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
bgMusic.play();