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
window.addEventListener('load', function() {
  displayScore
});

//FUNCTIONS
function placeToken() {
  if (!event.target.innerText && currentGame.turn === currentGame.player1) {
    turnNotification.innerHTML = `It is ${currentGame.player2.token}'s turn!`;
    event.target.innerText = currentGame.player1.token;
    // console.log(currentGame.gridPositions);
  } else if (!event.target.innerText && currentGame.turn === currentGame.player2) {
    turnNotification.innerHTML = `It is ${currentGame.player1.token}'s turn!`;
    event.target.innerText = currentGame.player2.token;
    // console.log(currentGame.gridPositions);
  }
  currentGame.toggleTurn();
}

function displayScore() {
  player1Score.innerText = `SCORE: ${currentGame.player1.score}`;
  player2Score.innerText = `SCORE: ${currentGame.player2.score}`;
}

function displayWinnerText() {
 if (currentGame.winner === currentGame.player1) {
   turnNotification.innerText = `😃 won!!! 😃`;
 } else if (currentGame.winner === currentGame.player2) {
   turnNotification.innerText = `😭 won!!! 😭`;
 }
}

function show(element) {
  element.classList.remove('hidden')
}

function hide(element) {
  element.classList.add('hidden')
}

//go through positions array
//make sure there are 0 nulls
//if null: no tie, dont do anything
//if no null: that means array is full of player choices therefore it's a tie (stop game)
//
// function checkForDraw() {
//   console.log("checkForDraw started");
//   for (var i = 0; i < currentGame.gridPositions.length; i++) {
//     console.log("59", currentGame.gridPositions);
//     if (currentGame.gridPositions[i] !== null) {
//       turnNotification.innerText = `It is a tie! 👔`;
//     } else {
//       console.log("checkForDraw ended");
//       return
//     }
//   }
// }

function playTurn(event) {
  var playerId = event.target.id;
  currentGame.choosePosition(playerId);
  if(currentGame.gridPositions.includes(null) && !currentGame.gameCompleted) {
    placeToken();
  }
  currentGame.checkGameResult();
  if(currentGame.gameCompleted) {
    hide(parentGrid);
    clearGrid();
    setTimeout(function() {
      currentGame.resetGame();
      show(parentGrid);
    }, 3000);
  }
  // checkForDraw();
  displayScore();
  // displayTurn();
  // displayWinnerText();
  // if (currentGame.gridPositions) {
  //   checkForDraw
  // }
}


function clearGrid() {
  for (var i = 0; i < allSquares.length; i++) {
    allSquares[i].innerHTML = "";
  }
}

//stop game when player has won
//display winner

//update tie function
//stop game when there's a tie
//display tie

//restart new game
//player who didn’t begin previous game now is 1st player to go in new game

//maintain scores after game reset and show scores
