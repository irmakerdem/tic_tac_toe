class Game {
  constructor() {
    this.player1 = new Player(1, "😃");
    this.player2 = new Player(2, "🤖");
    this.players = [this.player2, this.player1];
    this.positionsOnGrid = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
    this.winningPositions = [
      ["a1", "a2", "a3"],
      ["b1", "b2", "b3"],
      ["c1", "c2", "c3"],
      ["a1", "b1", "c1"],
      ["a2", "b2", "c2"],
      ["a3", "b3", "c3"],
      ["a1", "b2", "c3"],
      ["a3", "b2", "c1"]
    ];
    this.winner = null;
    this.startingPlayer = 1;
    this.currentPlayer = 1;
  }
  checkWinner() {
    var passedCheck = 0;
    for (var h = 0; h < this.players.length; h++) {
      for (var i = 0; i < this.winningPositions.length; i++) {
        passedCheck = 0;
        for (var j = 0; j < this.winningPositions[i].length; j++) {
          if (this.players[h].choices.includes(this.winningPositions[i][j])) {
            // console.log("passed first if", this.players[h]);
            passedCheck++;
          }
          if (passedCheck === 3) {
            this.winner = this.players[h];
            // console.log("somebody won!");
            return this.winner;
          }
        }
      }
    }
  }
}


//////////CONSOLE TEST//////////
// currentGame.player2.takeTurn("a2");
// currentGame.player2.takeTurn("b3");
// currentGame.player2.takeTurn("b1");
// currentGame.player1.takeTurn("c1");
// currentGame.player1.takeTurn("c3");
// currentGame.player1.takeTurn("c2");
// currentGame.checkWinner();


  // checkWinner(player) {
  //   console.log(player);
  //   for (var i = 0; i < this.winningPositions.length; i++) {
  //     for (var j = 0; j < this.winningPositions[i].length; j++) {
  //       if (player.choices.includes(this.winningPositions[i][j])) {
  //           this.winner = player;
  //           return this.winner;
  //       }
  //     }
  //   }
  // }

  //.every() = if every element passes the conditional [(player.choice.includes()], return true

  // for (var i = 0; i < this.winningPositions.length; i++) {
  //   if (this.winningPositions[i].every(position => {
  //     return player.choices.includes(position)
  //     })) {
  //     this.winner = player;
  //   }
  // }




//check both players' arrays.length === 9 then its a draw



  // checkForDraw() {
	// 	if (!this.positionsOnGrid.length) {
  //     return "It's a draw!"
  // }

  // changeStartingPlayer() {
  //   if (this.startingPlayer === 1) {
  //     this.startingPlayer = 2;
  //     this.currentPlayer = 2;
  //   } else {
  //     this.startingPlayer = 1;
  //     this.currentPlayer = 1;
  //   }
  // }

  // choosePosition(player, position) {
  //   for (var i = 0; i < this.positionsOnGrid.length; i++) {
  //     if (position === this.positionsOnGrid[i]) {
  //       this.positionsOnGrid.splice(i, 1);
  //       player.choices.push(position);
  //     }
  //   }
  // }




// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of which player’s turn it currently is
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game


//when player clicks empty space, add name of player into HTML (innerHTML, eventlistener)
//or use data-attribute (colorandom thingy)??
