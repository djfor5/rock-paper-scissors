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

export {
  playRound,
};
