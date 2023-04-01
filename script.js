function getComputerChoice(){
  let computerChoiceIndex = Math.floor(Math.random()*3)
  // console.log("Computer choice index is: ", computerChoiceIndex)
  let computerChoice
  switch (computerChoiceIndex){
    case 0:
      computerChoice = "rock"
      break;
    case 1:
      computerChoice = "paper"
      break;
    case 2:
      computerChoice = "scissors"
      break;
  }
  // console.log("Computer choice is: ", computerChoice)
  return computerChoice
}
getComputerChoice()


function playRound(playerSelection, computerSelection){
  if (playerSelection.toLowerCase() === 'rock' && computerSelection === "rock"){
    return "Tie! Rock ties with Rock"
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === "paper"){
    return "You Lose! Rock loses to Paper"
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === "scissors"){
    return "You Win! Rock beats Scissors"
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === "rock"){
    return "You Win! Paper beats Rock"
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === "paper"){
    return "Tie! Paper ties with Paper"
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === "scissors"){
    return "You Lose! Paper loses to Scissors"
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === "rock"){
    return "You Lose! Scissors loses to Rock"
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === "paper"){
    return "You Win! Scissors beats Paper"
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === "scissors"){
    return "Tie! Scissors ties with Scissors"
  } 
}

const playerSelection = 'rock'
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))