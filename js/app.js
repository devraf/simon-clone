const app = {
  greenBox: document.querySelector('.green'),
  redBox: document.querySelector('.red'),
  blueBox: document.querySelector('.blue'),
  yellowBox: document.querySelector('.yellow'),
  colorList(i) {
    let list = [app.greenBox, app.redBox, app.blueBox, app.yellowBox]
    return list[i]
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
  },
  //rename function to represent what it does
  //adds number to list based on class name of the clicked box
  addNumberToPlayerList: (event) => {
    if (event.target.classList.contains('green')) {
      app.playerList.push(0)
    } else if (event.target.classList.contains('red')) {
      app.playerList.push(1)
    } else if (event.target.classList.contains('blue')) {
      app.playerList.push(2)
    } else if (event.target.classList.contains('yellow')) {
      app.playerList.push(3)
    }
  },
  //used for computer to choose a random color
  randomNumber: () => {
    let selectedNumber
    selectedNumber = Math.floor(Math.random() * (3 - 0 + 1) + 0)
    return selectedNumber
  },
  addNumberToComputerList: () => {
    app.computerList.push(app.randomNumber())
    console.log(app.computerList)
  },
  //computer choices stored here
  //used to compare player choices
  computerList: [],
  //TODO - check player choice against computer choice

  //TODO - play back the computer choices
  computerChoicePlayBack: () => {
    //pick random number
    //highlight the box color

  },
  highlightBox: (colorBox, highlightBox) => {
    colorBox.classList.toggle(highlightBox)
  },
  playChosenBox: (myNumber) => {
    // console.log(myNumber, 'i am here')
    app.toggleBoxClass(myNumber)
    setTimeout(function () {
      app.toggleBoxClass(myNumber)
    }, 1000)
  },

  toggleBoxClass: (selectedNumber) => {
    console.log(selectedNumber, 'i am here')
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
  test: () => {
    //cycle through for loop once per second
    let array = [1, 2, 3]
    for (let i = 0; i < array.length; i++) {
      setTimeout(function () {
        console.log(array[i])
      }, 1000)
    }
  },
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
    app.addToPlayerList()
  }
}

app.init()