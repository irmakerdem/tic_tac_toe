class Game {
  constructor() {
    this.player1 = new Player(1, "😃");
    this.player2 = new Player(2, "😭");
    this.gridPositions = [null, null, null, null, null, null, null, null, null];
    this.winner = null;
    this.gameCompleted = false;
    this.turn = this.player1;
    this.lastStartingPlayer = this.player1;
    this.winningPositions = [
      [3, 4, 5],
      [0, 3, 6],
      [0, 1, 2],
      [1, 4, 7],
      [2, 5, 8],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
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

  toggleTurn() {
    if (this.turn === this.player1) {
      this.turn = this.player2;
    } else if (this.turn === this.player2) {
      this.turn = this.player1;
    }
  }

  checkPlayerWin(player) {
    console.log("player", player);
    for (var i = 0; i < this.winningPositions.length; i++) {
      var grid0 = this.winningPositions[i][0];
      var grid1 = this.winningPositions[i][1];
      var grid2 = this.winningPositions[i][2];
      if (this.gridPositions[grid0] === player.id && this.gridPositions[grid1] === player.id && this.gridPositions[grid2] === player.id) {
        this.winner = player;
        player.increaseWins();
        this.gameCompleted = true;
      }
    }
  }

  resetGame() {
    this.gridPositions = [null, null, null, null, null, null, null, null, null];
    this.winner = null;
    this.gameCompleted = false;
    if (this.lastStartingPlayer === this.player1) {
      this.turn = this.player2;
      this.lastStartingPlayer = this.player2;
    } else {
      this.turn = this.player1;
      this.lastStartingPlayer = this.player1;
    }
  }
}
