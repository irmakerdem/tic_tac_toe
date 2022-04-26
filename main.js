//GLOBAL VARIABLES
var currentGame = new Game();

//QUERY SELECTORS
var parentGrid = document.querySelector(".game-grid");
var turnNotification = document.querySelector(".turn-notification");
var player1Score = document.querySelector(".player1-score");
var player2Score = document.querySelector(".player2-score");
var allSquares = document.querySelectorAll(".grid");

//EVENT LISTENERS
parentGrid.addEventListener('click', playTurn);

//FUNCTIONS
function placeToken() {
  if (!event.target.innerText && currentGame.turn === currentGame.player1) {
    event.target.innerText = currentGame.player1.token;
  } else if (!event.target.innerText && currentGame.turn === currentGame.player2) {
    event.target.innerText = currentGame.player2.token;
  }
}

function updateTurnNotification() {
  if (currentGame.turn === currentGame.player1) {
    turnNotification.innerText = `It is ${currentGame.player1.token}'s turn!`;
  } else {
    turnNotification.innerText = `It is ${currentGame.player2.token}'s turn!`;
  }
}

function displayScore() {
  player1Score.innerText = `SCORE: ${currentGame.player1.score}`;
  player2Score.innerText = `SCORE: ${currentGame.player2.score}`;
}

function displayEndOfGameText() {
 if (currentGame.winner === currentGame.player1) {
   turnNotification.innerText = `🥳 won!!! 🥳`;
 } else if (currentGame.winner === currentGame.player2) {
   turnNotification.innerText = `🤡 won!!! 🤡`;
 } else if (!currentGame.winner && currentGame.gameCompleted) {
   turnNotification.innerText = `👔 it is a tie! 👔`;
 }
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function checkDraw() {
  if (!currentGame.gridPositions.includes(null)) {
    currentGame.gameCompleted = true;
    updateTurnNotification();
    setTimeout(function() {
      currentGame.resetGame();
      clearGrid();
      show(parentGrid);
    }, 3000);
  }
}

function checkIfGameOver() {
  if(currentGame.gameCompleted) {
    displayEndOfGameText();
    displayScore();
    setTimeout(function() {
      currentGame.resetGame();
      updateTurnNotification();
      clearGrid();
      show(parentGrid);
    }, 3000);
  }
}

function playTurn(event) {
  var playerId = event.target.id;
  var player = currentGame.turn;
  if (currentGame.gridPositions.includes(null) &&
  !currentGame.gameCompleted &&
  !event.target.innerText) {
    currentGame.choosePosition(playerId);
    placeToken();
    currentGame.toggleTurn();
    updateTurnNotification();
    checkDraw();
    currentGame.checkPlayerWin(player);
    displayEndOfGameText();
  }
  checkIfGameOver();
}

function clearGrid() {
  for (var i = 0; i < allSquares.length; i++) {
    allSquares[i].innerText = "";
  }
}
