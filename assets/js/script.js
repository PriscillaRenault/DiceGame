/*
Onclick newGame 
Erase all the scores

Onclick RollDice
Create a random number and show it on the dice
Add to current except if it's one => current = 0 and switch player 

Onclick hold add current to global and switch player 
or add to global if global >100 end of game and show modal

display current gamer (bullet, scores, background)
*/

//VARIABLES
// var buttons
const diceElements = document.getElementsByClassName('js-dice')
const roll = document.getElementById('js-roll')
const hold = document.getElementById('js-hold')
const game = document.getElementById('js-newGame')

//var score
let round = 0
let global = 0

// var switch player
let roundDisplay = document.getElementById('js-currentPlayer1')
let globalDisplay = document.getElementById('js-globalPlayer1')
let dot = document.getElementById('js-dotPlayer1')
let container = document.getElementById('js-container')
const player1 = 'player1'
const player2 = 'player2'
let activePlayer = player1

// var Modal
const winnerModal = $('#winnerModal')
const textWinner = $('#textWinner')
const closeWinner = $('#closeWinner')

//UTILITIES FUNCTIONS
//random dice value
function diceValue() {
  return Math.floor(Math.random() * 6) + 1
}

//GAME LOGIC FUNCTIONS

//reset Round
function resetRound() {
  round = 0
}

//reset round and global
function resetScores() {
  resetRound()
  global = 0
}
// clic New game button reset round, global and display scores
function newGame() {
  newScores = document.querySelectorAll('.js-newGame')
  newScores.forEach((element) => {
    element.textContent = 0
  })
  resetScores()
  switchPlayer()
  resetScores()
}

//clic roll dice button display dice and add to current
function rollDice() {
  diceValue()
  const matchingValue = diceValue().toString()
  //show the dice of diceValue and hide other dices
  for (let i = 0; i < diceElements.length; i++) {
    const element = diceElements[i]
    if (element.getAttribute('value') !== matchingValue) {
      element.classList.add('hidden')
    } else {
      element.classList.remove('hidden')
    }
  }
  //add to current if diceNumber!==1 rrentPlayerScore=0 and change gamer
  const diceNumber = parseInt(matchingValue)
  if (diceNumber !== 1) {
    round += diceNumber
    roundDisplay.textContent = round
  } else {
    resetRound()
    roundDisplay.textContent = 0
    switchPlayer()
  }
}

//display currentPlayer with score, bg and dot
function currentPlayer() {
  if (dot === document.getElementById('js-dotPlayer1')) {
    //display score
    roundDisplay.textContent = 0
    roundDisplay = document.getElementById('js-currentPlayer2')
    globalDisplay = document.getElementById('js-globalPlayer2')
    global = parseInt(globalDisplay.textContent)
    //display bg and dot
    container.classList.remove('bgPlayer1')
    dot.classList.add('hidden')
    dot = document.getElementById('js-dotPlayer2')
    container.classList.add('bgPlayer2')
    dot.classList.remove('hidden')
  } else if (dot === document.getElementById('js-dotPlayer2')) {
    roundDisplay.textContent = 0
    roundDisplay = document.getElementById('js-currentPlayer1')
    globalDisplay = document.getElementById('js-globalPlayer1')
    global = parseInt(globalDisplay.textContent)

    container.classList.remove('bgPlayer2')
    dot.classList.add('hidden')
    dot = document.getElementById('js-dotPlayer1')
    container.classList.add('bgPlayer1')
    dot.classList.remove('hidden')
  }
}

//switch between the 2 players
function switchPlayer() {
  resetRound()
  activePlayer = activePlayer === 'player1' ? 'player2' : 'player1'
  switch (activePlayer) {
    case 'player1': {
      currentPlayer()
      break
    }
    case 'player2': {
      currentPlayer()
      break
    }
    default: {
      console.log('error with switch player')
    }
  }
}

//clic hold button Save in GlobalPlayer score and show  modal Winner or switchPlayer
function holdScore() {
  global += round
  globalDisplay.textContent = global
  if (global >= 100) {
    $('#winnerModal').modal('show')
    $('#textWinner').text('vous avez gagné')
  } else {
    switchPlayer()
  }
}

//MODAL
// Close modal on click x
$('#closeWinner').on('click', function () {
  $('#winnerModal').modal('hide')
})
// reset game after close modal
$('#winnerModal').on('hidden.bs.modal', function () {
  newGame()
})

//Event Listeners
game.addEventListener('click', newGame)
roll.addEventListener('click', rollDice)
hold.addEventListener('click', holdScore)
