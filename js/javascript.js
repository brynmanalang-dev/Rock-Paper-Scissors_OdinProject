function getComputerChoice(max) {

    return Math.floor(Math.random() * max + 1);
}

function getHumanChoice(){
    
    return prompt(" 1 Rock 2 Paper 3 Scissors?")
}

function showAnswer(choice) {

    if (choice === 1){
        console.log("rock");
    }

    else if (choice === 2){
        console.log("paper");
    }

    else if (choice === 3){
        console.log("scissors");
    }
}

let computerChoice = getComputerChoice(3);
let humanChoice = getHumanChoice()

showAnswer(computerChoice)