//GLOBAL VARIABLES
var currentGame = new Game();
var parentGrid = document.querySelector(".game-grid");


//EVENT LISTENERS
parentGrid.addEventListener('click', placeToken)

//DATA FUNCTIONS
function placeToken() {
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

//DOM FUNCTIONS
