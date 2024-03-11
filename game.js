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

  if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") {
    return "You Win! Rock beats Scissors!!";
  } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock"){
    return "You Win! Paper beats Rock!!";
  } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper"){
    return "You Win! Scissors beats Paper!!";
  } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
    return "You Lose! Paper beats Rock!!";
  } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors"){
    return "You Lose! Scissors beats Paper!!";
  } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock"){
    return "You Lose! Rock beats Scissors!!";
  }else {
    return "Its a Draw!"
  }   

}

// const playerSelection = "PAPER";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));