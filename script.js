/*
Create a random number and show it on the dice
Add to current except if it's one => current = 0 and switch player 
Onclick hold add current to global and switch player
Ajouter une bullet au joueur active
End game at 100 and show Winner modal
Onclick newGame Erase all the scores

*/

const diceElements = document.getElementsByClassName('js-dice')

let currentElement = document.getElementById('js-currentPlayer1')
let globalElement = document.getElementById('js-globalPlayer1')
let dot = document.getElementById('js-dotPlayer1')
let currentPlayerScore = 0
let globalPlayerScore = 0
let player = 'Player 1'
const roll = document.getElementById('js-roll')
const hold = document.getElementById('js-hold')
const game = document.getElementById('js-newGame')
const winnerModal = document.getElementById('winner')
const myInput = document.getElementById('input')
let textWinner = document.getElementById('textWinner')

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
    currentPlayerScore += diceNumber
    currentElement.textContent = currentPlayerScore
  } else {
    currentPlayerScore = 0
    currentElement.textContent = 0
    switchPlayer()
  }
}

//Save in  GlobalPlayer score and show Winner or switchPlayer
function holdScore() {
  globalPlayerScore += currentPlayerScore
  globalElement.textContent = globalPlayerScore
  if (globalPlayerScore >= 20) {
    winnerModal.addEventListener('shown.bs.modal', () => {
      myInput.focus()
    })
    textWinner.textContent = `Le vainqueur est le ${player} `
  } else {
    switchPlayer()
  }
}

// New game function
function newGame() {
  newScores = document.querySelectorAll('.js-newGame')
  newScores.forEach((element) => {
    element.textContent = 0
  })
}

//switch between the 2 players
const player1 = 'player1'
const player2 = 'player2'
let activePlayer = player1
function switchPlayer() {
  currentPlayerScore = 0

  if (activePlayer === player1) {
    activePlayer = player2
  } else {
    activePlayer = player1
  }
  switch (activePlayer) {
    case 'player1': {
      //Assignment variable to player 1
      currentElement.textContent = 0
      currentElement = document.getElementById('js-currentPlayer1')
      globalElement = document.getElementById('js-globalPlayer1')
      globalPlayerScore = parseInt(globalElement.textContent)

      // Delete dot to player 2 and Assignment to player 1
      dot.classList.add('hidden')
      dot = document.getElementById('js-dotPlayer1')
      dot.classList.remove('hidden')

      player = 'Joueur 1'

      break
    }
    case 'player2': {
      //Assignment variable to player 2
      currentElement.textContent = 0
      currentElement = document.getElementById('js-currentPlayer2')
      globalElement = document.getElementById('js-globalPlayer2')
      globalPlayerScore = parseInt(globalElement.textContent)
      player = 'Player 2'

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
roll.addEventListener('click', rollDice)
hold.addEventListener('click', holdScore)
game.addEventListener('click', newGame)
