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

export {
  getComputerChoice,
};
