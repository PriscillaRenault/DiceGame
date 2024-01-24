/*
Create a random number and show it on the dice
Add to current except if it's one => current = 0 and switch player 
Onclick hold add current to global and switch player
Ajouter une bullet au joueur active
End game at 100 and show Winner modal
Onclick newGame Erase all the scores

*/

// var button
const diceElements = document.getElementsByClassName('js-dice')
const roll = document.getElementById('js-roll')
const hold = document.getElementById('js-hold')
const game = document.getElementById('js-newGame')

// var switch
let roundDisplay = document.getElementById('js-currentPlayer1')
let globalDisplay = document.getElementById('js-globalPlayer1')
let dot = document.getElementById('js-dotPlayer1')
let round = 0
let global = 0

// var Modal
const winnerModal = $('#winnerModal')
const textWinner = $('#textWinner')
const closeWinner = $('#closeWinner')

// New game function
function newGame() {
  newScores = document.querySelectorAll('.js-newGame')
  newScores.forEach((element) => {
    element.textContent = 0
  })
  round = 0
  global = 0
  switchPlayer()
  round = 0
  global = 0
}

function rollDice() {
  //random dice value
  function diceValue() {
    return Math.floor(Math.random() * 6) + 1
  }
  //hide other dices
  const matchingValue = diceValue().toString()

  //show the dice of diceValue
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
    round = 0
    roundDisplay.textContent = 0
    switchPlayer()
  }
}

//switch between the 2 players
const player1 = 'player1'
const player2 = 'player2'
let activePlayer = player1
function switchPlayer() {
  round = 0

  activePlayer = activePlayer === 'player1' ? 'player2' : 'player1'

  switch (activePlayer) {
    case 'player1': {
      //Assignment variable to player 1
      roundDisplay.textContent = 0
      roundDisplay = document.getElementById('js-currentPlayer1')
      globalDisplay = document.getElementById('js-globalPlayer1')
      global = parseInt(globalDisplay.textContent)

      // Delete dot to player 2 and Assignment to player 1
      dot.classList.add('hidden')
      dot = document.getElementById('js-dotPlayer1')
      dot.classList.remove('hidden')

      break
    }
    case 'player2': {
      //Assignment variable to player 2
      roundDisplay.textContent = 0
      roundDisplay = document.getElementById('js-currentPlayer2')
      globalDisplay = document.getElementById('js-globalPlayer2')
      global = parseInt(globalDisplay.textContent)

      // Delete dot to player 1 and Assignment to player 2
      dot.classList.add('hidden')
      dot = document.getElementById('js-dotPlayer2')
      dot.classList.remove('hidden')

      break
    }
    default: {
      console.log('error with switch player')
    }
  }
}

//Save in  GlobalPlayer score and show  modal Winner or switchPlayer
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

// Hide modal
$('#winnerModal').on('hidden.bs.modal', function () {
  newGame()
})

// Close modal on click
$('#closeWinner').on('click', function () {
  $('#winnerModal').modal('hide')
})

game.addEventListener('click', newGame)
roll.addEventListener('click', rollDice)
hold.addEventListener('click', holdScore)
