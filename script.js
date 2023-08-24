let gameCount = 0;
let playerScore = 0;
let computerScore = 0;
let ties = 0;

const SCORE_TO_WIN = 5;

const round = document.querySelector("#round");
const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");
const roundOutcome = document.querySelector("#roundOutcome");
const roundWinner = document.querySelector("#roundWinner");
const currentScores = document.querySelector("#currentScores");

const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const playerSelection = event.target.id.toUpperCase();
    // eslint-disable-next-line no-use-before-define
    const computerSelection = getComputerChoice();
    // eslint-disable-next-line no-use-before-define
    const gameResult = playRound(playerSelection, computerSelection);

    round.textContent = `ROUND ${gameCount + 1}`;
    playerChoice.textContent = `Player selection = ${playerSelection}`;
    computerChoice.textContent = `Computer selection = ${computerSelection}`;
    console.log(`%c${round.textContent}`, "font-weight: bold");
    console.log(playerChoice.textContent);
    console.log(computerChoice.textContent);

    if (gameResult === 1) {
      playerScore++;
      roundOutcome.textContent = `${playerSelection} beats ${computerSelection}`;
      roundWinner.textContent = `You won round ${gameCount + 1}`;
      console.log(roundOutcome.textContent);
      console.log(`%c${roundWinner.textContent}`, "font-weight: bold; font-style: italic; color: green");
    } else if (gameResult === -1) {
      computerScore++;
      roundOutcome.textContent = `${playerSelection} loses to ${computerSelection}`;
      roundWinner.textContent = `You lost round ${gameCount + 1}`;
      console.log(roundOutcome.textContent);
      console.log(`%c${roundWinner.textContent}`, "font-weight: bold; font-style: italic; color: red");
    } else {
      ties++;
      roundOutcome.textContent = `${playerSelection} ties with ${computerSelection}`;
      roundWinner.textContent = `You tied round ${gameCount + 1}`;
      console.log(roundOutcome.textContent);
      console.log(`%c${roundWinner.textContent}`, "font-weight: bold; font-style: italic");
    }
    gameCount++;

    currentScores.textContent = `Current scores: player score = ${playerScore}, computer score = ${computerScore}, ties = ${ties}, games played = ${gameCount}`;
    console.log(`Current scores: player score = ${playerScore}, computer score = ${computerScore}, ties = ${ties}, games played = ${gameCount}`);
    console.log("\n");

    if (playerScore === SCORE_TO_WIN || computerScore === SCORE_TO_WIN) {
      console.log("%cFINAL SCORES", "font-weight: bold");
      console.table({
        "Player score": playerScore,
        "Computer score": computerScore,
        "Tied games": ties,
        "Games played": gameCount,
      });
      currentScores.textContent = `Final scores: player score = ${playerScore}, computer score = ${computerScore}, ties = ${ties}, games played = ${gameCount}`;
    }
  });
});

function getComputerChoice() {
  const computerChoiceIndex = Math.floor(Math.random() * 3);
  let computerDecision;
  switch (computerChoiceIndex) {
    case 0:
      computerDecision = "ROCK";
      break;
    case 1:
      computerDecision = "PAPER";
      break;
    case 2:
      computerDecision = "SCISSORS";
      break;
    default:
  }
  return computerDecision;
}

function playRound(playerSelection, computerSelection) { // eslint-disable-line consistent-return
  const playerSelectionUpper = playerSelection.toUpperCase();
  const computerSelectionUpper = computerSelection.toUpperCase();

  switch (true) {
    // cases where player beats computer
    case playerSelectionUpper === "ROCK" && computerSelectionUpper === "SCISSORS":
    case playerSelectionUpper === "PAPER" && computerSelectionUpper === "ROCK":
    case playerSelectionUpper === "SCISSORS" && computerSelectionUpper === "PAPER":
      return 1;
    // cases where player ties with computer
    case playerSelectionUpper === "ROCK" && computerSelectionUpper === "ROCK":
    case playerSelectionUpper === "PAPER" && computerSelectionUpper === "PAPER":
    case playerSelectionUpper === "SCISSORS" && computerSelectionUpper === "SCISSORS":
      return 0;
    // cases where player loses to computer
    case playerSelectionUpper === "ROCK" && computerSelectionUpper === "PAPER":
    case playerSelectionUpper === "PAPER" && computerSelectionUpper === "SCISSORS":
    case playerSelectionUpper === "SCISSORS" && computerSelectionUpper === "ROCK":
      return -1;
    default:
  }
}
