const app = {
  greenBox: document.querySelector('.green'),
  redBox: document.querySelector('.red'),
  blueBox: document.querySelector('.blue'),
  yellowBox: document.querySelector('.yellow'),

  cNoteAudio: document.querySelector('.cNote'),
  eNoteAudio: document.querySelector('.eNote'),
  fNoteAudio: document.querySelector('.fNote'),
  gNoteAudio: document.querySelector('.gNote'),
  failNoteAudio: document.querySelector('.failNote'),

  gameOverText: document.querySelector('.game-over'),
  playerTurnText: document.querySelector('.player-turn-notify'),
  countDisplay: document.querySelector('.count'),

  updateDisplayCount: () => {
    app.countDisplay.innerText = app.computerList.length
  },
  togglePlayerTurnText: () => {
    app.playerTurnText.classList.toggle('is-active')
  },
  playAudio: note => {
    note.currentTime = 0
    note.play()
  },

  //Hud Elements
  //Controls
  startButton: document.querySelector('.start-button'),

  startGame: () => {
    //Clear player/computer lists
    //Clear counter
    app.countDisplay.innerText = 0
    app.count = 0
    app.playerList = []
    app.computerList = []
    console.log(app.count, app.computerList, app.playerList)
    //Prevent player from clicking while computer logic is run
    app.disablePlayerClick()
    console.log('click disabled')
    //run computer list to play
    //waits 1.5 seconds before starting playback
    //to give player time to get ready to watch playback
    setTimeout(app.main, 1500)

    //give player a audio/visual que that it is player's turn
    setTimeout(app.beginPlayerTurn, app.computerList.length * 600 * 2)
  },
  beginPlayerTurn: () => {
    console.log('startgame function ended')
    console.log('beginPlayerTurn function started')
    setTimeout(app.addToPlayerList, 1500)
    setTimeout(app.checkMatchOnEachClick, 1550)
  },
  checkMatchCounter: 0,
  checkMatch: () => {
    console.log(app.checkMatchCounter)
    console.log(app.computerList)
    console.log(app.playerList)
    if (
      app.computerList[app.checkMatchCounter] ===
      app.playerList[app.checkMatchCounter]
    ) {
      app.checkMatchCounter++
      console.log('match')
    } else return app.gameOver()
    if (app.checkMatchCounter === app.computerList.length) {
      app.checkMatchCounter = 0
      app.count = 0
      app.playerList = []
      console.log(app.count, app.computerList, app.playerList)
      //Prevent player from clicking while computer logic is run
      app.disablePlayerClick()
      console.log('click disabled')
      //run computer list to play
      //waits 1.5 seconds before starting playback
      //to give player time to get ready to watch playback
      setTimeout(app.main, 1500)

      // //give player a audio/visual que that it is player's turn
      setTimeout(app.beginPlayerTurn, 2000)
      // app.computerList.length * 600 * 2
    }
  },
  gameOver: () => {
    app.disablePlayerClick()
    console.log('game over')
    //Notify player of mismatch

    //display Game Over modal

    //reset both list
    app.playerList = []
    app.computerList = []

    //reset counters
    app.counter = 0
    app.checkMatchCounter = 0

    //disable click events
    setTimeout(app.autoToggleAll, 1000)
    setTimeout(app.gameOverNotify, 1000)
    setTimeout(app.playAudio, 1000, app.failNoteAudio)
    setTimeout(app.autoToggleAll, 2000)
    setTimeout(app.gameOverNotify, 3000)
  },
  gameOverNotify: () => {
    app.gameOverText.classList.toggle('is-active')
  },
  autoToggleAll: () => {
    app.greenBox.classList.toggle('greenActive')
    app.redBox.classList.toggle('redActive')
    app.blueBox.classList.toggle('blueActive')
    app.yellowBox.classList.toggle('yellowActive')
  },

  startButtonClicked: () => {
    app.startButton.addEventListener('click', app.startGame)
  },

  checkMatchOnEachClick: () => {
    app.greenBox.addEventListener('click', app.checkMatch)
    app.redBox.addEventListener('click', app.checkMatch)
    app.blueBox.addEventListener('click', app.checkMatch)
    app.yellowBox.addEventListener('click', app.checkMatch)
  },
  //Log player choices here
  playerList: [],
  //Click event listeners for each color
  //adds corresponding number to playerList based on boxed clicked
  addToPlayerList: () => {
    app.greenBox.addEventListener('click', app.addNumberToPlayerList)
    app.redBox.addEventListener('click', app.addNumberToPlayerList)
    app.blueBox.addEventListener('click', app.addNumberToPlayerList)
    app.yellowBox.addEventListener('click', app.addNumberToPlayerList)
    console.log('click event funtion started')
    app.togglePlayerTurnText()
    setTimeout(app.togglePlayerTurnText, 1500)
  },
  disablePlayerClick: () => {
    app.greenBox.removeEventListener('click', app.addNumberToPlayerList)
    app.redBox.removeEventListener('click', app.addNumberToPlayerList)
    app.blueBox.removeEventListener('click', app.addNumberToPlayerList)
    app.yellowBox.removeEventListener('click', app.addNumberToPlayerList)
    app.greenBox.removeEventListener('click', app.checkMatch)
    app.redBox.removeEventListener('click', app.checkMatch)
    app.blueBox.removeEventListener('click', app.checkMatch)
    app.yellowBox.removeEventListener('click', app.checkMatch)
  },
  //adds number to list based on class name of the clicked box
  //simulates player click
  addNumberToPlayerList: event => {
    if (event.target.classList.contains('green')) {
      app.playerList.push(0)
      console.log('pushed 0 to playerList')
      app.toggleBoxClass(0)
      app.playAudio(app.cNoteAudio)
      setTimeout(app.toggleBoxClass, 500, 0)
    } else if (event.target.classList.contains('red')) {
      app.playerList.push(1)
      console.log('pushed 1 to playerList')
      app.toggleBoxClass(1)
      app.playAudio(app.eNoteAudio)
      setTimeout(app.toggleBoxClass, 500, 1)
    } else if (event.target.classList.contains('blue')) {
      app.playerList.push(2)
      console.log('pushed 2 to playerList')
      app.toggleBoxClass(2)
      app.playAudio(app.fNoteAudio)
      setTimeout(app.toggleBoxClass, 500, 2)
    } else if (event.target.classList.contains('yellow')) {
      app.playerList.push(3)
      console.log('pushed 3 to playerList')
      app.toggleBoxClass(3)
      app.playAudio(app.gNoteAudio)
      setTimeout(app.toggleBoxClass, 500, 3)
    }
  },
  //main computer logic
  //pick random number - corresponds with box color
  //add random number to sequence list
  //playback sequence to player
  main: () => {
    app.counter = 0
    app.addNumberToComputerList()
    app.updateDisplayCount()
    app.computerPlayback()
    console.log('main function complete')
  },

  //computer choice list
  computerList: [],

  //used to rerun setTimeout on computerPlayback untill the sequence is complete
  cycleNext: undefined,

  //used for computer to choose a random color
  randomNumber: () => {
    let selectedNumber
    selectedNumber = Math.floor(Math.random() * (3 - 0 + 1) + 0)
    return selectedNumber
  },
  //adds the random number to the computerList for playback
  addNumberToComputerList: () => {
    app.computerList.push(app.randomNumber())
    console.log('computerlist', app.computerList)
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
      return 'complete in computerplayback()'
    }

    //this highlights the box by toggling the the active color
    //then turns it off using the setTimout
    //counter iterates through the computerList
    app.toggleBoxClass(app.computerList[app.counter])
    app.computerAudioPlayback(app.computerList[app.counter])
    setTimeout(app.toggleBoxClass, 300, app.computerList[app.counter])
    //used for computerList iteration
    app.counter++
    //runs the next index of computerList
    //this is run with twice the time so the player can see the box color go back to its original state before going...
    //to the next index in the computerList
    app.cycleNext = setTimeout(app.computerPlayback, 300 * 2)
  },
  //highlights the chosen box
  toggleBoxClass: selectedNumber => {
    if (selectedNumber === 0) {
      app.greenBox.classList.toggle('greenActive')
    } else if (selectedNumber === 1) {
      app.redBox.classList.toggle('redActive')
    } else if (selectedNumber === 2) {
      app.blueBox.classList.toggle('blueActive')
    } else if (selectedNumber === 3) {
      app.yellowBox.classList.toggle('yellowActive')
    }
  },

  computerAudioPlayback: selectedNumber => {
    if (selectedNumber === 0) {
      app.playAudio(app.cNoteAudio)
    } else if (selectedNumber === 1) {
      app.playAudio(app.eNoteAudio)
    } else if (selectedNumber === 2) {
      app.playAudio(app.fNoteAudio)
    } else if (selectedNumber === 3) {
      app.playAudio(app.gNoteAudio)
    }
  },

  //--- GAME LOGIC ---

  gameStart() {
    //Press Start ot begin Game
    // app.main();
    app.startButtonClicked()
  },
  //Last fixes for mvp
  //TODO fix timer for player turn
  //apply fix to GO! display text
  //style game for MVP
  //Reshape buttons
  //style start button
  //style title
  //add color scheme
  //shape game into circle

  //start the game
  init: () => {
    app.gameStart()
  }
}
app.init()
