let gameCount = 0
let playerScore = 0
let computerScore = 0
let ties = 0

const SCORE_TO_WIN = 5

const results = document.querySelector('#results')
const round = document.querySelector('#round')
const playerChoice = document.querySelector('#playerChoice')
const computerChoice = document.querySelector('#computerChoice')
const roundOutcome = document.querySelector('#roundOutcome')
const roundWinner = document.querySelector('#roundWinner')
const currentScores = document.querySelector('#currentScores')
const result = document.querySelector('#result')

const btns = document.querySelectorAll('button')
btns.forEach(btn => {
  btn.addEventListener('click', event => {
    const playerSelection = event.target.id.toUpperCase()
    const computerSelection = getComputerChoice()
    const gameResult = playRound(playerSelection, computerSelection)

    round.textContent = `ROUND ${gameCount + 1}`
    playerChoice.textContent = `Player selection = ${playerSelection}`
    computerChoice.textContent = `Computer selection = ${computerSelection}`
    console.log(`%c${round.textContent}`, "font-weight: bold")
    console.log(playerChoice.textContent)
    console.log(computerChoice.textContent)

    if (gameResult === 1) {
      playerScore++
      roundOutcome.textContent = `${playerSelection} beats ${computerSelection}`
      roundWinner.textContent = `You won round ${gameCount + 1}`
      console.log(roundOutcome.textContent)
      console.log(`%c${roundWinner.textContent}`, "font-weight: bold; font-style: italic; color: green")
    } else if (gameResult === -1){
      computerScore++
      roundOutcome.textContent = `${playerSelection} loses to ${computerSelection}`
      roundWinner.textContent = `You lost round ${gameCount + 1}`
      console.log(roundOutcome.textContent)
      console.log(`%c${roundWinner.textContent}`, "font-weight: bold; font-style: italic; color: red")
    } else {
      ties++
      roundOutcome.textContent = `${playerSelection} ties with ${computerSelection}`
      roundWinner.textContent = `You tied round ${gameCount + 1}`
      console.log(roundOutcome.textContent)
      console.log(`%c${roundWinner.textContent}`, "font-weight: bold; font-style: italic")
    }
    gameCount++

    currentScores.textContent = `Current scores: player score = ${playerScore}, computer score = ${computerScore}, ties = ${ties}, games played = ${gameCount}`
    console.log(`Current scores: player score = ${playerScore}, computer score = ${computerScore}, ties = ${ties}, games played = ${gameCount}`)
    console.log('\n')

    if (playerScore === SCORE_TO_WIN || computerScore === SCORE_TO_WIN){
      console.log("%cFINAL SCORES", "font-weight: bold")
      console.table({"Player score":playerScore, "Computer score": computerScore, "Tied games": ties, "Games played": gameCount})
      currentScores.textContent = `Final scores: player score = ${playerScore}, computer score = ${computerScore}, ties = ${ties}, games played = ${gameCount}`
    }
  })
}) 


function getComputerChoice(){
  let computerChoiceIndex = Math.floor(Math.random()*3)
  let computerChoice
  switch (computerChoiceIndex){
    case 0:
      computerChoice = "ROCK"
      break;
    case 1:
      computerChoice = "PAPER"
      break;
    case 2:
      computerChoice = "SCISSORS"
      break;
  }
  return computerChoice
}


function playRound(playerSelection, computerSelection){
  playerSelection = playerSelection.toUpperCase()
  computerSelection = computerSelection.toUpperCase()

  switch (true){
    // cases where player beats computer
    case playerSelection === 'ROCK' && computerSelection === "SCISSORS":
    case playerSelection === 'PAPER' && computerSelection === "ROCK":
    case playerSelection === 'SCISSORS' && computerSelection === "PAPER":
      return 1;
    // cases where player ties with computer
    case playerSelection === 'ROCK' && computerSelection === "ROCK":
    case playerSelection === 'PAPER' && computerSelection === "PAPER":
    case playerSelection === 'SCISSORS' && computerSelection === "SCISSORS":
      return 0; 
    // cases where player loses to computer
    case playerSelection === 'ROCK' && computerSelection === "PAPER":
    case playerSelection === 'PAPER' && computerSelection === "SCISSORS":
    case playerSelection === 'SCISSORS' && computerSelection === "ROCK":
      return -1;
  }
}