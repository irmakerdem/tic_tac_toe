# Tic Tac Toe

## Table of Contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Set Up](#set-up)
- [Deployment Link](#deployment-link)
- [Features](#features)
- [Organizational Resources](#organizational-resources)
- [Future Features](#future-features)
- [Reflection](#reflection)
- [Contributors](#contributors)
- [Project Specifications](#project-specifications)

### Introduction
Have you always wanted to play tic tac toe with your friend ON THE SAME COMPUTER?? 💻 Well look no further because this tic tac toe game was made to be played at parties (a party of 2 is still considered a party, yes 😜).

**!!!Deploy link will be updated once repo is made public!!!**

### Technologies
- JavaScript
- HTML
- CSS

### Set Up
1. Clone this [repository](https://github.com/irmakerdem/tic_tac_toe).
2. `cd` into the directory.
3. Run `open index.html`.

### Deployment Link
- Simply play at:

### Features
- Player can only place a token in an empty space
- Players take turns after each token placement
- Player can only win by connecting 3 tokens horizontally, vertically or diagonally

![tic tac toe's player2 wins gif](https://media.giphy.com/media/L1x8THzCNiHomHkpga/giphy.gif)

- Banner indicates player turn and game outcome (win or draw)

![tic tac toe's draw gif](https://media.giphy.com/media/atXcxpipP3abAikDqM/giphy.gif)

- When a game ends, a new game restarts after 3 seconds
- Score is maintained after end of each game

![tic tac toe's player2 wins gif](https://media.giphy.com/media/4cWwIapK50yCsNR6Lu/giphy.gif)

- Player who did not start the current game gets to start the next game



### Organizational Resources
- [Google Sheet](https://docs.google.com/spreadsheets/d/1Eit_xVtVTOSS1_R-O0NYiy3HTDVdGd3xw-bhBJlJx4o/edit?usp=sharing)

### Future Features
- Player can choose their token from a list of tokens
- When a win occurs, a straight line is shown on the winning sequence
- When a win occurs, confetti rains on the entire column of the winning player

### Reflection
- This hardest part about this project was creating a win function to work in the console.
- My initial plan was to have an array for the player which compares their choices to the winning combinations array. In order to make both players be able to do this, I created an array with two player instances inside. Unfortunately, the only way to make the win function work was to have 3 for loops which were nested which took me 9 hours to do (this was explicitly stated to not implement in the rubric).
- My second attempt was to hard code all the winning positions into the function instead of referring to it in the constructor of the Game instance. This method kind of worked but I had to adjust it. Unfortunately, I still had two separate winning functions and needed to refactor. The refactoring took some time to figure out but made the code very simple!

### Contributors
- [Irmak Erdem](https://www.linkedin.com/in/irmakerdem/)

### Project Specifications
- Project specs can be found [here](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo-v2.html).
