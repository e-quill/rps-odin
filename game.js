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

function playRound(playerSelection, computerSelection){

  if (playerSelection == "rock" && computerSelection == "Scissors") {
    
    return "You Win! Rock beats Scissors!!";
  } else if (playerSelection == "paper" && computerSelection == "Rock"){
    
    return "You Win! Paper beats Rock!!";
  } else if (playerSelection == "scissors" && computerSelection == "Paper"){
  
    return "You Win! Scissors beats Paper!!";
  } else if (playerSelection == "rock" && computerSelection == "Paper") {
    
    return "You Lose! Paper beats Rock!!";
  } else if (playerSelection == "paper" && computerSelection == "Scissors"){
    
    return "You Lose! Scissors beats Paper!!";
  } else if (playerSelection == "scissors" && computerSelection == "Rock"){
    
    return "You Lose! Rock beats Scissors!!";
  } else {
    return `Both players chose ${computerSelection}, its a Draw!`
  }   

}

function playGame(choice){
  console.log(playRound(choice, getComputerChoice()))
  console.log("")

}

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

rock.addEventListener("click", () => playGame("rock") )
paper.addEventListener("click", () => playGame("paper") )
scissors.addEventListener("click", () => playGame("scissors") )