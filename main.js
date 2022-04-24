//GLOBAL VARIABLES
var currentGame = new Game();

//QUERY SELECTORS
var parentGrid = document.querySelector(".game-grid");
var turnNotification = document.querySelector(".turn-notification");
var player1Score = document.querySelector(".player1-score");
var player2Score = document.querySelector(".player2-score");

//EVENT LISTENERS
parentGrid.addEventListener('click', placeToken);

//FUNCTIONS
function placeToken() {
  displayTurn();
    // console.log(event.target.id);
  if (currentGame.turn === currentGame.player1) {
    // console.log(event.target.id);
    event.target.innerText = currentGame.player1.token;
  } else {
    // console.log(event.target.id);
    event.target.innerText = currentGame.player2.token;
  }
  currentGame.toggleTurn();
}

function displayTurn() {
  if (currentGame.turn === currentGame.player1) {
    turnNotification.innerHTML = `It is ${currentGame.player2.token}'s turn`
  } else {
    turnNotification.innerHTML = `It is ${currentGame.player1.token}'s turn`
  }
}

function displayScore() {
  player1Score.innerText = `SCORE: ${currentGame.player1.score}`
  player2Score.innerText = `SCORE: ${currentGame.player2.score}`
};


//RESULTS
// "😃 won!" or "It is a tie! 👔"
// show scores
// show updated scores


//setTimeout(function () {

// }, 3000);
