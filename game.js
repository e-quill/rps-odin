function getComputerChoice(){
  //generates numbers 0,1 or 2
  max = 3 
  number = Math.floor(Math.random() * max);
  
  //displays Rock, Paper of Scissors depending upon the randomly generated number
  if (number == 1){
    return "Rock"
  } else if (number == 2){
    return "Paper"
  } else {
    return "Scissors"
  }
}

function playRound(playerSelection, computerSelection){
  playerSelection.toLowerCase() == "rock" && computerSelection == "scissor" ? "You Win! Rock beats Scissors" : "Haha"
}

console.log(getComputerChoice())