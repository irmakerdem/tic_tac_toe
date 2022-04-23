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
  // playToken() {
  //   return this.token;
  // }
  // // player might need to return a token and a location of where it was played
  // takeTurn(choiceId) {
  //   this.choices.push(choiceId);
  // }



// must have these --> id (ex: 'one'), token (ex: '⭐️'), wins (ex: 0)
