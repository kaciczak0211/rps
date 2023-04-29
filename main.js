const player = document.querySelector("#playerText");
const computer = document.querySelector("#computerText");
const result = document.querySelector("#result");
const btn = document.querySelectorAll(".choiceBtn");

let playerChoice;
let computerChoice;
let resultGame;

btn.forEach(button => button.addEventListener("click", () => {
    playerChoice = button.textContent;
    computerTurn();
    player.textContent = `Player: ${playerChoice}`;
    computer.textContent = `Computer: ${computerChoice}`;
    result.textContent = checkWinner();

}))

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computerChoice = "Rock";
        break;
      case 2:
        computerChoice = "Paper";
        break;
      case 3:
        computerChoice = "Scissors";
        break;
    }
}

function checkWinner(){
    if(playerChoice == computerChoice){
        return "Remis";
    }
    else if (computerChoice == "Rock"){
        return(playerChoice == "Paper") ? "You Win!" : "You Lose!"
    }
    else if (computerChoice == "Paper"){
        return(playerChoice == "Scissors") ? "You Lose!" : "You Win!"
    }
    else if (computerChoice == "Pcissors"){
        return(playerChoice == "Rock") ? "You Win!" : "You Lose!"
    }
}