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
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  if (playerSelection === 'rock' && computerSelection === "rock"){
    // return "Tie! Rock ties with Rock"
    return 0
  } else if (playerSelection === 'rock' && computerSelection === "paper"){
    // return "You Lose! Rock loses to Paper"
    return -1
  } else if (playerSelection === 'rock' && computerSelection === "scissors"){
    // return "You Win! Rock beats Scissors"
    return 1
  } else if (playerSelection === 'paper' && computerSelection === "rock"){
    // return "You Win! Paper beats Rock"
    return 1
  } else if (playerSelection === 'paper' && computerSelection === "paper"){
    // return "Tie! Paper ties with Paper"
    return 0
  } else if (playerSelection === 'paper' && computerSelection === "scissors"){
    // return "You Lose! Paper loses to Scissors"
    return -1
  } else if (playerSelection === 'scissors' && computerSelection === "rock"){
    // return "You Lose! Scissors loses to Rock"
    return -1
  } else if (playerSelection === 'scissors' && computerSelection === "paper"){
    // return "You Win! Scissors beats Paper"
    return 1
  } else if (playerSelection === 'scissors' && computerSelection === "scissors"){
    // return "Tie! Scissors ties with Scissors"
    return 0
  } 
}


function game(){
  let gameCount = 0
  let playerScore = 0
  let computerScore = 0

  while (gameCount < 5){
    console.log(`Round ${gameCount + 1}`)
    let playerSelection
  
    while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors'){
      playerSelection = prompt("Enter 'rock', 'paper', or 'scissors': ").toLowerCase()
    }
    console.log(`Player selection: ${playerSelection}`)
  
    const computerSelection = getComputerChoice()
    console.log(`Computer selection: ${computerSelection}`)
    
    let gameResult = playRound(playerSelection, computerSelection)
    if (gameResult === 1) {
      playerScore++
      console.log(`You win round ${gameCount + 1}`)
    } else if (gameResult === -1){
      computerScore++
      console.log(`You lose round ${gameCount + 1}`)
    } else {
      console.log(`You tied round ${gameCount + 1}`)
    }
    gameCount++

    console.log(`Current scores: player score = ${playerScore}, computer score = ${computerScore}`)

    console.log('\n')
  }
  console.log(`Final scores: player score = ${playerScore}, computer score = ${computerScore}`)
}
game()