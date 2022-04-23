class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.score = 0;
  }
  increaseWins() {
    this.score += 1;
  }
}
