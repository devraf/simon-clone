const app = {
  greenBox: document.querySelector('.green'),
  redBox: document.querySelector('.red'),
  blueBox: document.querySelector('.blue'),
  yellowBox: document.querySelector('.yellow'),
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
 
  //TODO - check player choice against computer choice

  //TODO - play back the computer choices
  colorList(i) {
    let list = [app.greenBox, app.redBox, app.blueBox, app.yellowBox]
    return list[i]
  },
  activeColorList: ['greenActive', 'redActive', 'blueActive', 'yellowActive'],
  computerList: [0,1,2,3],
  simulateClick:() => {
    if(app.counter === app.computerList.length) {
      return 'complete'
    }
    app.highlightBox(app.colorList(app.computerList[app.counter]), app.activeColorList[app.computerList[app.counter]])
    app.test = setTimeout(app.highlightBox, 3000, app.colorList(app.computerList[app.counter]), app.activeColorList[app.computerList[app.counter]])
    app.test = setTimeout(() =>{
      app.simulateClick()
      console.log(app.counter)
      if(app.counter < app.computerList.length){
      app.counter++
    }
    }, 3000)
  },

  test: undefined,

  highlightBox: (box, color) => {
    box.classList.toggle(color)
  },
  toggleBoxClass: (selectedNumber) => {
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

//////
counter: 0,
  playBackTimer: undefined,
  computerListPlayBack:() => {
    app.playBackTimer = setInterval(() => {
      console.log(app.counter)
      app.counter++
      if(app.counter < 5) {
        console.log('at 5')
      }
    }, 1000)
  },
  stopComputerPlayBack:() => {
    clearInterval(app.playBackTimer)
    app.playBackTimer = undefined
    app.counter = 0
  },


/////
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