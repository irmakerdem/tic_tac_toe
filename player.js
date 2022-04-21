class Player {
  //why do we need a token if it is preassigned??
  constructor(id, token) {
    this.id = id;
    this.token = token;
    // this.id = 1 || 2;
    // this.token = "😃" || "🤖";
    this.score = 0;
    this.choices = [];
  }
  takeTurn(choiceId) {
    this.choices.push(choiceId);
    // console.log(this.choices);
  }
  increaseWins() {
    this.score++;
  }
}

// must have these --> id (ex: 'one'), token (ex: '⭐️'), wins (ex: 0)
