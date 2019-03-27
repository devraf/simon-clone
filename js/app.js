const app = {
  greenBox: document.querySelector(".green"),
  redBox: document.querySelector(".red"),
  blueBox: document.querySelector(".blue"),
  yellowBox: document.querySelector(".yellow"),

  //Hud Elements
  //Controls
  startButton: document.querySelector(".start-button"),
  startGame: () => {
    (app.count = 0), (app.playerList = []);
    app.computerList = [];
    console.log(app.count, app.computerList, app.playerList);
    app.disablePlayerClick();
    console.log("click disabled");
    setTimeout(app.main, 1500);
  },
  startButtonClicked: () => {
    app.startButton.addEventListener("click", app.startGame);
  },
  //Log player choices here
  playerList: [],
  //Click event listeners for each color
  //adds corresponding number to playerList based on boxed clicked
  addToPlayerList: () => {
    app.greenBox.addEventListener("click", app.addNumberToPlayerList);
    app.redBox.addEventListener("click", app.addNumberToPlayerList);
    app.blueBox.addEventListener("click", app.addNumberToPlayerList);
    app.yellowBox.addEventListener("click", app.addNumberToPlayerList);
  },
  disablePlayerClick: () => {
    app.greenBox.removeEventListener("click", app.addNumberToPlayerList);
    app.redBox.removeEventListener("click", app.addNumberToPlayerList);
    app.blueBox.removeEventListener("click", app.addNumberToPlayerList);
    app.yellowBox.removeEventListener("click", app.addNumberToPlayerList);
  },
  //adds number to list based on class name of the clicked box
  //simulates player click
  addNumberToPlayerList: event => {
    if (event.target.classList.contains("green")) {
      app.playerList.push(0);
      app.toggleBoxClass(0);
      setTimeout(app.toggleBoxClass, 500, 0);
    } else if (event.target.classList.contains("red")) {
      app.playerList.push(1);
      app.toggleBoxClass(1);
      setTimeout(app.toggleBoxClass, 500, 1);
    } else if (event.target.classList.contains("blue")) {
      app.playerList.push(2);
      app.toggleBoxClass(2);
      setTimeout(app.toggleBoxClass, 500, 2);
    } else if (event.target.classList.contains("yellow")) {
      app.playerList.push(3);
      app.toggleBoxClass(3);
      setTimeout(app.toggleBoxClass, 500, 3);
    }
  },
  //main computer logic
  //pick random number - corresponds with box color
  //add random number to sequence list
  //playback sequence to player
  main: () => {
    app.counter = 0;
    app.addNumberToComputerList();
    app.computerPlayback();
    console.log("main function complete");
  },

  //computer choice list
  computerList: [],

  //used to rerun setTimeout on computerPlayback untill the sequence is complete
  cycleNext: undefined,

  //used for computer to choose a random color
  randomNumber: () => {
    let selectedNumber;
    selectedNumber = Math.floor(Math.random() * (3 - 0 + 1) + 0);
    return selectedNumber;
  },
  //adds the random number to the computerList for playback
  addNumberToComputerList: () => {
    app.computerList.push(app.randomNumber());
    console.log('computerlist', app.computerList);
  },
  //used to iterate throught computerList for the player
  counter: 0,
  //used to rerun setTimeout on computerPlayback untill the sequence is complete
  cycleNext: undefined,

  //cycles through the computerList
  //used to playback the sequence to the player
  computerPlayback: () => {
    //probably do not need this, but will keep for now
    if (app.counter === app.computerList.length) {
      return "complete in computerplayback()";
    }

    //this highlights the box by toggling the the active color
    //then turns it off using the setTimout
    //counter iterates through the computerList
    app.toggleBoxClass(app.computerList[app.counter]);
    setTimeout(app.toggleBoxClass, 750, app.computerList[app.counter]);
    //used for computerList iteration
    app.counter++;
    //runs the next index of computerList
    //this is run with twice the time so the player can see the box color go back to its original state before going...
    //to the next index in the computerList
    app.cycleNext = setTimeout(app.computerPlayback, 750 * 2);
  },
  //highlights the chosen box
  toggleBoxClass: selectedNumber => {
    if (selectedNumber === 0) {
      app.greenBox.classList.toggle("greenActive");
    } else if (selectedNumber === 1) {
      app.redBox.classList.toggle("redActive");
    } else if (selectedNumber === 2) {
      app.blueBox.classList.toggle("blueActive");
    } else if (selectedNumber === 3) {
      app.yellowBox.classList.toggle("yellowActive");
    }
  },

  //--- GAME LOGIC ---

  gameStart() {
    //Press Start ot begin Game
    // app.main();
    app.addToPlayerList();
    app.startButtonClicked();
  },

  //Computer picks random box
  //Chosen box will be played back to play

  //player will copy the compnuter's sequence
  //check if player's choice matches the computers sequence

  //repeat until player clicks the wrong box in the sequence

  //restart game
  //disable player clicks while computer choices are playing back

  //add a new choice if player gets completes computer sequence

  //add audio to each button

  //let the player know when it is their turn

  //let the player know when the computer playback has started

  //let the player know when the computer playback has ended

  //reset the game if the player chooses incorrectly

  //display the count of the computer list to the player

  //display remainder of player clicks left

  //add a restart button

  //add a notification when game is over

  //start the game
  init: () => {
    app.gameStart();
  }
};

app.init();
