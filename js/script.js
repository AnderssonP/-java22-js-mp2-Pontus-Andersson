let playerScore = 0;
let computerScore = 0;
let playerName = "";

const formBtn = document.querySelector("button")
formBtn.addEventListener("click", event => {
  event.preventDefault();
  playerName = document.getElementById("player-name").value;
  updateScores();
  document.getElementById("popup").innerText = "";
});

const rockButton = document.getElementById("rock-button");
rockButton.addEventListener("click", () => {
  makeChoice("Sten");
});

const paperButton = document.getElementById("paper-button");
paperButton.addEventListener("click", () => {
  makeChoice("papper");
});

const scissorsButton = document.getElementById("scissors-button");
scissorsButton.addEventListener("click", () => {
  makeChoice("sax");
});

const choices = ["Sten", "papper", "sax"];


function makeChoice(playerChoice) {
  if (playerName === "") {
    document.getElementById("popup").innerText = "Skriv in ditt namn först!";
    return;
  }
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result;
  if (playerChoice === computerChoice) {
    result = "Lika!";
  } else if (
    (playerChoice === "Sten" && computerChoice === "sax") ||
    (playerChoice === "papper" && computerChoice === "Sten") ||
    (playerChoice === "sax" && computerChoice === "papper")
  ) {
    result = "Du vann denna rond!";
    playerScore++;
  } else {
    result = "Du förlorade denna rond!";
    computerScore++;
  }


  document.getElementById("result").innerText = `${playerName}, du valde ${playerChoice} och datorn valde ${computerChoice}. ${result}`;

  updateScores();
  setTimeout(GameEnd, 200);
}

function updateScores() {
  document.getElementById("scores").innerText = `Resultat: ${playerName} ${playerScore} - ${computerScore} datorn`;
  if (playerScore === 3 || computerScore === 3) {
    rockButton.setAttribute("disabled", true);
    paperButton.setAttribute("disabled", true);
    scissorsButton.setAttribute("disabled", true);
  }
}

function GameEnd() {
  if (playerScore === 3) {
    document.getElementById("popup").innerText = `Grattis, ${playerName}! Du vann mot datorn!`
  } else if (computerScore === 3) {
    document.getElementById("popup").innerText = `Tyvärr, ${playerName}. Du förlorade mot datorn.`;
  }
}

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function () {
  resetGame();
});

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerName = "";
  updateScores();
  var elementsToClear = ["popup", "scores", "result", "player-name"];
  for(var i = 0; i < elementsToClear.length; i++) {
    document.getElementById(elementsToClear[i]).innerHTML = "";
  }
  var buttons = ["rockButton", "paperButton", "scissorsButton"];
  for(var i = 0; i < buttons.length; i++) {
    document.getElementById(buttons[i]).removeAttribute("disabled");
  }
}