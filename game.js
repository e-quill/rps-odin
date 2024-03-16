function getComputerChoice(){
  
  max = 3 
  number = Math.floor(Math.random() * max);
  
  if (number == 1){
    return "Rock"
  } else if (number == 2){
    return "Paper"
  } else {
    return "Scissors"
  }
}

function reset(){
  playerScore = 0;
  computerScore = 0;
}

function wincheck(playerScore, computerScore){
  if (playerScore == 5){
    div.innerText = `The score is ${playerScore}:${computerScore} \n Congratulations! You Win!`
    reset()
  } else if (computerScore == 5) {
    div.innerText = `The score is ${playerScore}:${computerScore} \n You lose.`
    reset()
  }
}

function playRound(playerSelection, computerSelection){

  if (playerSelection.toString() == "rock" && computerSelection == "Scissors") {
    
    playerScore++
    div.innerText = `You Win! Rock beats Scissors!! \n The score is ${playerScore}:${computerScore}`;

  } else if (playerSelection == "paper" && computerSelection == "Rock"){
    
    playerScore++
    div.innerText =  `You Win! Paper beats Rock!! \n The score is ${playerScore}:${computerScore}`;
  } else if (playerSelection == "scissors" && computerSelection == "Paper"){

    playerScore++
    div.innerText =  `You Win! Scissors beats Paper!! \n The score is ${playerScore}:${computerScore}`;
  } else if (playerSelection == "rock" && computerSelection == "Paper") {
    
    computerScore++
    div.innerText =  `You Lose! Paper beats Rock!! \n The score is ${playerScore}:${computerScore}`;
  } else if (playerSelection == "paper" && computerSelection == "Scissors"){
    
    computerScore++
    div.innerText =  `You Lose! Scissors beats Paper!! \n The score is ${playerScore}:${computerScore}`;
  } else if (playerSelection == "scissors" && computerSelection == "Rock"){
    
    computerScore++
    div.innerText =  `You Lose! Rock beats Scissors!! \n The score is ${playerScore}:${computerScore}`;
  } else {
    div.innerText = `Both players chose ${computerSelection}, its a Draw! \n The score is ${playerScore}:${computerScore}`
  }   
}

function playGame(choice){
  playRound(choice, getComputerChoice())
  wincheck(playerScore, computerScore)
}

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

rock.addEventListener("click", () => playGame("rock") )
paper.addEventListener("click", () => playGame("paper") )
scissors.addEventListener("click", () => playGame("scissors") )

const div = document.querySelector("#display")

let playerScore = 0
let computerScore = 0


