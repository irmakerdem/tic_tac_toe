class Player {
  //why do we need a token if it is preassigned??
  constructor(id, token) {
    this.id = id;
    this.token = token;
    // this.token = "😃" || "🤖";
    this.score = 0;
    this.choices = [];
  }
  takeTurn(choiceId) {
    this.choices.push(choiceId);
  }
  increaseWins() {
    this.score++;
  }
}

// must have these --> id (ex: 'one'), token (ex: '⭐️'), wins (ex: 0)
