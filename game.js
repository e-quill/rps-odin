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
    playerScore++
    return "You Win! Rock beats Scissors!!";
  } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock"){
    playerScore++
    return "You Win! Paper beats Rock!!";
  } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper"){
    playerScore++
    return "You Win! Scissors beats Paper!!";
  } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
    computerScore++
    return "You Lose! Paper beats Rock!!";
  } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors"){
    computerScore++
    return "You Lose! Scissors beats Paper!!";
  } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock"){
    computerScore++
    return "You Lose! Rock beats Scissors!!";
  }else {
    return `Both players chose ${computerSelection}, its a Draw!`
  }   

}

function playGame(){
  round = 1;
  playerScore = 0;
  computerScore = 0;

  for (i = 0; i < 5; i++, round++){
    choice = prompt("Rock, Paper or Scissors?")
    console.log(`Round ${round}`)
    console.log(playRound(choice, getComputerChoice()))
  }

  console.log("")

  console.log(`The final score is ${playerScore}:${computerScore}`)
  if (playerScore > computerScore){
    console.log("You have won!")
  } else if (playerScore < computerScore) {
    console.log("You have lost, better luck next time.")
  } else {
    console.log("Both of you were equally matched, its a draw.")
  }
}

playGame()