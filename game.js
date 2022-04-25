class Game {
  constructor() {
    this.player1 = new Player(1, "😃");
    this.player2 = new Player(2, "😭");
    this.gridPositions = [null, null, null, null, null, null, null, null, null];
    this.winner = null;
    this.gameCompleted = false;
    this.turn = this.player1;
    this.lastStartingPlayer = this.player1;
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

  checkPlayer1Win() {
    if ((this.gridPositions[0] === 1 && this.gridPositions[1] === 1 && this.gridPositions[2] === 1) ||
      (this.gridPositions[3] === 1 && this.gridPositions[4] === 1 && this.gridPositions[5] === 1) ||
      (this.gridPositions[6] === 1 && this.gridPositions[7] === 1 && this.gridPositions[8] === 1) ||
      (this.gridPositions[0] === 1 && this.gridPositions[3] === 1 && this.gridPositions[6] === 1) ||
      (this.gridPositions[1] === 1 && this.gridPositions[4] === 1 && this.gridPositions[7] === 1) ||
      (this.gridPositions[2] === 1 && this.gridPositions[5] === 1 && this.gridPositions[8] === 1) ||
      (this.gridPositions[0] === 1 && this.gridPositions[4] === 1 && this.gridPositions[8] === 1) ||
      (this.gridPositions[2] === 1 && this.gridPositions[4] === 1 && this.gridPositions[6] === 1)) {
        this.winner = this.player1;
        this.player1.increaseWins();
        this.gameCompleted = true;
      }
  }

  checkPlayer2Win() {
    if ((this.gridPositions[0] === 2 && this.gridPositions[1] === 2 && this.gridPositions[2] === 2) ||
      (this.gridPositions[3] === 2 && this.gridPositions[4] === 2 && this.gridPositions[5] === 2) ||
      (this.gridPositions[6] === 2 && this.gridPositions[7] === 2 && this.gridPositions[8] === 2) ||
      (this.gridPositions[0] === 2 && this.gridPositions[3] === 2 && this.gridPositions[6] === 2) ||
      (this.gridPositions[1] === 2 && this.gridPositions[4] === 2 && this.gridPositions[7] === 2) ||
      (this.gridPositions[2] === 2 && this.gridPositions[5] === 2 && this.gridPositions[8] === 2) ||
      (this.gridPositions[0] === 2 && this.gridPositions[4] === 2 && this.gridPositions[8] === 2) ||
      (this.gridPositions[2] === 2 && this.gridPositions[4] === 2 && this.gridPositions[6] === 2)) {
        this.winner = this.player2;
        this.player2.increaseWins();
        this.gameCompleted = true;
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

  checkGameResult() {
    this.checkPlayer1Win();
    this.checkPlayer2Win();
  }
}
