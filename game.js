class Game {
  constructor() {
    this.player1 = new Player(1, "😃");
    this.player2 = new Player(2, "😭");
    this.gridPositions = [null, null, null, null, null, null, null, null, null];
    this.winner = null;
    this.gameCompleted = false;
    this.turn = this.player1;
  }
  resetGame() {
    this.gridPositions = [null, null, null, null, null, null, null, null, null];
    this.winner = null;
    this.gameCompleted = false;
    this.turn = this.player1;
    console.log("game has reset", this.gameCompleted);
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
    // this.gridPositions[positionId] = this.turn.token
    if (this.turn === this.player1) {
      this.turn = this.player2;
      console.log("It is player 1's turn")
    } else if (this.turn === this.player2) {
      this.turn = this.player1;
      console.log("It is player 2's turn")
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
        console.log("player 1 conditional", this.winner);
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
        console.log("player 2 conditional", this.winner);
        this.player2.increaseWins();
        this.gameCompleted = true;
      }
  }
  checkDraw() {
    !this.gridPositions.includes(null);
    this.gameCompleted = true;
    this.winner = null;
    console.log("checked for draw");
    console.log(this.winner);
    return "It's a tie! 👔"
  }
  playGame() {
    this.checkPlayer1Win();
    this.checkPlayer2Win();
    console.log("ran the 2 long functions");
    this.checkDraw();
    console.log("end of better function");
    console.log("80", this.winner);
    this.resetGame();
  }
}
