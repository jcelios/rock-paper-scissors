function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let humanScoreDisplay = document.querySelector("#humanScore");
  let computerScoreDisplay = document.querySelector("#computerScore");

  function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if (humanChoice == "rock") {
      if (computerChoice == "rock") {
        output.textContent = "Rock ties Rock. Tied Round.";
      } else if (computerChoice == "paper") {
        ++computerScore;
        output.textContent = "Rock wrapped by Paper. Computer Won Round.";
      } else if (computerChoice == "scissors") {
        ++humanScore;
        output.textContent = "Rock breaks Scissors. Human Won Round.";
      }
    } else if (humanChoice == "paper") {
      if (computerChoice == "rock") {
        ++humanScore;
        output.textContent = "Paper wraps Rock. Human Won Round.";
      } else if (computerChoice == "paper") {
        output.textContent = "Paper ties Paper. Tied Round.";
      } else if (computerChoice == "scissors") {
        ++computerScore;
        output.textContent = "Paper cut by Scissors. Computer Won Round.";
      }
    } else if (humanChoice == "scissors") {
      if (computerChoice == "rock") {
        ++computerScore;
        output.textContent = "Scissors broken by Rock. Computer Won Round.";
      } else if (computerChoice == "paper") {
        ++humanScore;
        output.textContent = "Scissors cut Paper. Human Won Round.";
      } else if (computerChoice == "scissors") {
        output.textContent = "Scissors ties Scissors. Tied Round.";
      }
    }
    humanScoreDisplay.textContent = String(humanScore);
    computerScoreDisplay.textContent = String(computerScore);
    if (humanScore >= 5 || computerScore >= 5) {
      if (humanScore > computerScore) {
        output.textContent = "Human Won!";
      } else if (computerScore > humanScore) {
        output.textContent = "Computer Won!";
      } else if (computerScore == humanScore) {
        output.textContent = "Tie Game!";
      }
    }
  }

  let btn1 = document.querySelector("#btn1");
  let btn2 = document.querySelector("#btn2");
  let btn3 = document.querySelector("#btn3");

  btn1.addEventListener("click", () => playRound("rock"));
  btn2.addEventListener("click", () => playRound("paper"));
  btn3.addEventListener("click", () => playRound("scissors"));
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
