function getComputerChoice(){
  let computerChoiceIndex = Math.floor(Math.random()*3)
  console.log("Computer choice index is: ", computerChoiceIndex)
  let computerChoice
  switch (computerChoiceIndex){
    case 0:
      computerChoice = "Rock"
      break;
    case 1:
      computerChoice = "Paper"
      break;
    case 2:
      computerChoice = "Scissors"
      break;
  }
  console.log("Computer choice is: ", computerChoice)
}
getComputerChoice()