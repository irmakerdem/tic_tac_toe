class Game {
  constructor() {
    this.player1 = new Player(1, "😃");
    this.player2 = new Player(2, "😭");
    this.gridPositions = [null, null, null, null, null, null, null, null, null];
    this.winner = null;
    this.gameCompleted = false;
    this.turn = this.player1;
    // this.totalPlays = 0;
    // var board = [1, 1, 1,
    //             2, null, null,
    //             2, 2, null]
  }
  choosePosition(index) {
    if (this.turn === this.player1 && !this.gridPositions[index]) {
      this.gridPositions[index] = 1;
      return this.gridPositions;
    } else if (this.turn === this.player2 && !this.gridPositions[index]) {
      this.gridPositions[index] = 2;
      return this.gridPositions;
    }
  }
  toggleTurn(){
    if (this.turn === this.player1) {
      this.turn = this.player2;
      return "It is player 1's turn";
    } else {
      this.turn = this.player1;
      "It is player 2's turn";
    }
  }
  checkDraw() {
    !this.gridPositions.includes(null);
    return "It's a tie! 👔"
  }
  checkWinner() {
    if ((this.gridPositions[0] === 1 && this.gridPositions[1] === 1 && this.gridPositions[2] === 1) ||
      (this.gridPositions[3] === 1 && this.gridPositions[4] === 1 && this.gridPositions[5] === 1) ||
      (this.gridPositions[6] === 1 && this.gridPositions[7] === 1 && this.gridPositions[8] === 1) ||
      (this.gridPositions[0] === 1 && this.gridPositions[3] === 1 && this.gridPositions[6] === 1) ||
      (this.gridPositions[1] === 1 && this.gridPositions[4] === 1 && this.gridPositions[7] === 1) ||
      (this.gridPositions[2] === 1 && this.gridPositions[5] === 1 && this.gridPositions[8] === 1) ||
      (this.gridPositions[0] === 1 && this.gridPositions[4] === 1 && this.gridPositions[8] === 1) ||
      (this.gridPositions[2] === 1 && this.gridPositions[4] === 1 && this.gridPositions[6] === 1)) {
        this.gameCompleted = true;
        this.winner = this.player1;
        console.log("player 1 conditional", this.winner);
        this.player1.increaseWins();
    } else if ((this.gridPositions[0] === 2 && this.gridPositions[1] === 2 && this.gridPositions[2] === 2) ||
        (this.gridPositions[3] === 2 && this.gridPositions[4] === 2 && this.gridPositions[5] === 2) ||
        (this.gridPositions[6] === 2 && this.gridPositions[7] === 2 && this.gridPositions[8] === 2) ||
        (this.gridPositions[0] === 2 && this.gridPositions[3] === 2 && this.gridPositions[6] === 2) ||
        (this.gridPositions[1] === 2 && this.gridPositions[4] === 2 && this.gridPositions[7] === 2) ||
        (this.gridPositions[2] === 2 && this.gridPositions[5] === 2 && this.gridPositions[8] === 2) ||
        (this.gridPositions[0] === 2 && this.gridPositions[4] === 2 && this.gridPositions[8] === 2) ||
        (this.gridPositions[2] === 2 && this.gridPositions[4] === 2 && this.gridPositions[6] === 2)) {
          this.gameCompleted = true;
          this.winner = this.player2;
          console.log("player 2 conditional", this.winner);
          this.player2.increaseWins();
    } else {
      console.log("check ze draw!!");
      this.checkDraw();
    }
  }
  // checkPlayer2Win() {
  //   if ((this.gridPositions[0] === 2 && this.gridPositions[1] === 2 && this.gridPositions[2] === 2) ||
  //     (this.gridPositions[3] === 2 && this.gridPositions[4] === 2 && this.gridPositions[5] === 2) ||
  //     (this.gridPositions[6] === 2 && this.gridPositions[7] === 2 && this.gridPositions[8] === 2) ||
  //     (this.gridPositions[0] === 1 && this.gridPositions[3] === 2 && this.gridPositions[6] === 2) ||
  //     (this.gridPositions[1] === 2 && this.gridPositions[4] === 2 && this.gridPositions[7] === 2) ||
  //     (this.gridPositions[2] === 2 && this.gridPositions[5] === 2 && this.gridPositions[8] === 2) ||
  //     (this.gridPositions[0] === 2 && this.gridPositions[4] === 2 && this.gridPositions[8] === 2) ||
  //     (this.gridPositions[2] === 2 && this.gridPositions[4] === 2 && this.gridPositions[6] === 2)) {
  //       this.gameCompleted = true;
  //       this.winner = this.player2;
  //       this.player2.increaseWins();
  //     } else {
  //       this.gameCompleted = true;
  //       this.checkDraw();
  //       console.log("It's a tie! 👔")
  //   }
  // }
}
  // checkPlayer1Win() {
  //   if ((this.gridPositions[0] === 1 && this.gridPositions[1] === 1 && this.gridPositions[2] === 1) ||
  //     (this.gridPositions[3] === 1 && this.gridPositions[4] === 1 && this.gridPositions[5] === 1) ||
  //     (this.gridPositions[6] === 1 && this.gridPositions[7] === 1 && this.gridPositions[8] === 1) ||
  //     (this.gridPositions[0] === 1 && this.gridPositions[3] === 1 && this.gridPositions[6] === 1) ||
  //     (this.gridPositions[1] === 1 && this.gridPositions[4] === 1 && this.gridPositions[7] === 1) ||
  //     (this.gridPositions[2] === 1 && this.gridPositions[5] === 1 && this.gridPositions[8] === 1) ||
  //     (this.gridPositions[0] === 1 && this.gridPositions[4] === 1 && this.gridPositions[8] === 1) ||
  //     (this.gridPositions[2] === 1 && this.gridPositions[4] === 1 && this.gridPositions[6] === 1)) {
  //       this.gameCompleted = true;
  //       this.winner = this.player1;
  //       this.player1.increaseWins();
  //   }
  // }
  // checkPlayer2Win() {
  //   if ((this.gridPositions[0] === 2 && this.gridPositions[1] === 2 && this.gridPositions[2] === 2) ||
  //     (this.gridPositions[3] === 2 && this.gridPositions[4] === 2 && this.gridPositions[5] === 2) ||
  //     (this.gridPositions[6] === 2 && this.gridPositions[7] === 2 && this.gridPositions[8] === 2) ||
  //     (this.gridPositions[0] === 1 && this.gridPositions[3] === 2 && this.gridPositions[6] === 2) ||
  //     (this.gridPositions[1] === 2 && this.gridPositions[4] === 2 && this.gridPositions[7] === 2) ||
  //     (this.gridPositions[2] === 2 && this.gridPositions[5] === 2 && this.gridPositions[8] === 2) ||
  //     (this.gridPositions[0] === 2 && this.gridPositions[4] === 2 && this.gridPositions[8] === 2) ||
  //     (this.gridPositions[2] === 2 && this.gridPositions[4] === 2 && this.gridPositions[6] === 2)) {
  //       this.gameCompleted = true;
  //       this.winner = this.player2;
  //       this.player2.increaseWins();
  //   }
  // }

// currentGame.player2.choosePosition(4);
// currentGame.player2.choosePosition(3);
// currentGame.player2.choosePosition(5);
// currentGame.player1.choosePosition(0);
// currentGame.player1.choosePosition(7);
// currentGame.player1.choosePosition(8);
// currentGame.checkPlayer1Win();
// currentGame.checkPlayer2Win();


//   determineWin(winner) {
//     for (var i = 0; this.gridPositions.length; i++)
//       if (this.gridPositions[i] === 1) {
//         this.player1.increaseWins()
//       }
//   }
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

  // determineToken() {
  //   if (this.currentlyPlayer1) {
  //     return this.player1.token;
  //   } else {
  //     return this.player2.token;
  //   }
  // }
  // updateGrid(token) {
  //   token = this.gridPositions[event.target.id];
  // }
  // changePlayer() {
  //   this.currentlyPlayer1 = false;
  //   this.turnMessage = `It is ${determineToken()}'s turn!`
  // }
  // checkWin() {
  //   for (var i = 0; i < this.winningPositions.length; i++) {
  //     if (this.gridPositions[this.winningPositions[i][0]] === this.determineToken && ).......
  //   }
  // }



// this.getIcon();
// this.player1 || this.player2
// this.player1.increaseWins();
// this.player2.increaseWins();


// var board = ["😃", "😃", "😃",
//             "😃", "🤖", null,
//             "😃", "🤖", "😃"]
// var board = [0, 1, 2
//             3, 4, 5,
//             6, 7, 8];
// condition:    [0, 1, 2] || [3, 4, 5]         || [6, 7, 8]      || [0, 3, 6]         || [1, 4, 7]      || [2, 5, 8]   || [0, 4, 8] || [2, 4, 6]
// currentBoard: [x, x, x]    [null, o, null]   [ null, o, null]    [1, null, null]    [1, 2, 2]         [1, 0, 0]       [1, 2, 0]      [1, 2, 0]
//               [1, 1, 1]     [2, 2, 2]

  // getIcon(icon) {
  //   if () {
  //     "😃"
  //   } else {
  //     "🤖"
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




//use .every()?
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

//rewrite last if statement as a method:
// checkIfWinningCombo() {
//   for (var h = 0; h < this.players.length; h++) {
//     if (pass === 3) {
//       this.winner = this.players[h];
//       this.players.increaseWins();
//       this.win = true;
//       return this.winner;
//     }
//   }
// }

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
//   clearGame() {
//     this.player1.choices = [];
//     this.player2.choices = [];
//     this.gameCompleted = false;
//   }
// }






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
