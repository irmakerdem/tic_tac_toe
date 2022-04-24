// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of which player’s turn it currently is
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game


// this.totalPlays = 0;
// var board = [0, 1, 2,
//             3, 4, 5,
//             6, 7, 8]

// var board = [null, 1, null,
//             1, null, 2,
//             null, null, null,]

// this.winningPositions = [
//   ["0", "1", "2"],
//   ["3", "4", "5"],
//   ["6", "7", "8"],
//   ["0", "3", "6"],
//   ["1", "4", "7"],
//   ["2", "5", "8"],
//   ["0", "4", "8"],
//   ["2", "4", "6"]
// ];


////VERSION 2222222222
//   checkWinner() {
//     //need to fix all if statements to have two &&?????
//     if (this.gridPositions[0] === this.gridPositions[1] && this.gridPositions[1] === this.gridPositions[2] && this.gridPositions[0]) {
//       this.winner = this.gridPositions[0];
//       // this.winner = 1
//       determineWin();
//     } else if (this.gridPositions[3] === this.gridPositions[4] === this.gridPositions[5] && this.gridPositions[3]) {
//       this.winner = this.gridPositions[3];
//       return this.winner;
//     } else if (this.gridPositions[6] === this.gridPositions[7] === this.gridPositions[8] && this.gridPositions[6]) {
//       this.winner = this.gridPositions[6];
//       return this.winner;
//     } else if (this.gridPositions[0] === this.gridPositions[3] === this.gridPositions[6] && this.gridPositions[0]) {
//       this.winner = this.gridPositions[0];
//       return this.winner;
//     } else if (this.gridPositions[1] === this.gridPositions[4] === this.gridPositions[7] && this.gridPositions[1]) {
//       this.winner = this.gridPositions[1];
//       return this.winner;
//     } else if (this.gridPositions[2] === this.gridPositions[5] === this.gridPositions[8] && this.gridPositions[2]) {
//       this.winner = this.gridPositions[2];
//       return this.winner;
//     } else if (this.gridPositions[0] === this.gridPositions[4] === this.gridPositions[8] && this.gridPositions[0]) {
//       this.winner = this.gridPositions[0];
//       return this.winner;
//     } else if (this.gridPositions[2] === this.gridPositions[4] === this.gridPositions[6] && this.gridPositions[2]) {
//       this.winner = this.gridPositions[2];
//       return this.winner;
//     }
//   }
// }


  //////////CONSOLE TEST//////////
  // currentGame.player2.takeTurn("4");
  // currentGame.player2.takeTurn("3");
  // currentGame.player2.takeTurn("5");
  // currentGame.player1.takeTurn("0");
  // currentGame.player1.takeTurn("7");
  // currentGame.player1.takeTurn("8");
  // currentGame.checkWinner();


//.every() = if every element passes the conditional [(player.choice.includes()], return true

// checkWinner(player) {
// for (var i = 0; i < this.winningPositions.length; i++) {
//   if (this.winningPositions[i].every(position => {
//     return player.choices.includes(position)
//     })) {
//     this.winner = player;
//   }
// }
// }

////VERSION 11111111111
// checkWinner() {
//   var passedCheck = 0;
//   for (var h = 0; h < this.players.length; h++) {
//     for (var i = 0; i < this.winningPositions.length; i++) {
//       passedCheck = 0;
//       for (var j = 0; j < this.winningPositions[i].length; j++) {
//         if (this.players[h].choices.includes(this.winningPositions[i][j])) {
//           // console.log("passed first if", this.players[h]);
//           passedCheck++;
//         }
//         if (passedCheck === 3) {
//           this.winner = this.players[h];
//           this.players[h].increaseWins();
//           this.gameCompleted = true;
//           // console.log("somebody won!");
//           return this.winner;
//         }
//       }
//     }
//   }
// }


//or use data-attribute (colorandom thingy)??
