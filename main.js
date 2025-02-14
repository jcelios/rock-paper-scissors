function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}:`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`End of Round. Human: ${humanScore} Computer: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    return console.log("Human Won!");
  } else if (computerScore > humanScore) {
    return console.log("Computer Won!");
  } else if (computerScore == humanScore) {
    return console.log("Tie Game!");
  }

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
      if (computerChoice == "rock") {
        return console.log("Rock ties Rock. Tied Round.");
      } else if (computerChoice == "paper") {
        ++computerScore;
        return console.log("Rock wrapped by Paper. Computer Won Round.");
      } else if (computerChoice == "scissors") {
        ++humanScore;
        return console.log("Rock breaks Scissors. Human Won Round.");
      }
    } else if (humanChoice == "paper") {
      if (computerChoice == "rock") {
        ++humanScore;
        return console.log("Paper wraps Rock. Human Won Round.");
      } else if (computerChoice == "paper") {
        return console.log("Paper ties Paper. Tied Round.");
      } else if (computerChoice == "scissors") {
        ++computerScore;
        return console.log("Paper cut by Scissors. Computer Won Round.");
      }
    } else if (humanChoice == "scissors") {
      if (computerChoice == "rock") {
        ++computerScore;
        return console.log("Scissors broken by Rock. Computer Won Round.");
      } else if (computerChoice == "paper") {
        ++humanScore;
        return console.log("Scissors cut Paper. Human Won Round.");
      } else if (computerChoice == "scissors") {
        return console.log("Scissors ties Scissors. Tied Round.");
      }
    }
  }
}

function getHumanChoice() {
  let humanChoice = prompt();
  humanChoice = humanChoice.toLowerCase();
  if (
    humanChoice == "rock" ||
    humanChoice == "paper" ||
    humanChoice == "scissors"
  ) {
    return humanChoice;
  } else {
    return console.log("Invalid input.");
  }
}

function getComputerChoice() {
  let ran = Math.floor(Math.random() * 3);
  if (ran == 0) {
    return "rock";
  } else if (ran == 1) {
    return "paper";
  } else if (ran == 2) {
    return "scissors";
  }
}

playGame();