/*
créer une nombre aléatoire entre 1 et 6 etl'affcher le nombre aléatoire sur le dé
ajouter ce nombre aléatoire au current
si 1 remettre le total aléatoire à 0 et passez au second joueur
si hold ajouter le current au global et passez au second joueur
Si newGame remettre tous les scores à 0
Ajouter une bullet au joueur active
créer une modale activePlayer Win
Créer une fin de jeu
*/

const diceElements = document.getElementsByClassName('js-dice')

let currentElement = document.getElementById('js-currentPlayer1')
let globalElement = document.getElementById('js-globalPlayer1')
let dot = document.getElementById('js-dotPlayer1')
let currentPlayerScore = 0
let globalPlayerScore = 0
const roll = document.getElementById('js-roll')
const hold = document.getElementById('js-hold')
const game = document.getElementById('js-newGame')

function rollDice() {
  //random dice value
  function diceValue() {
    return Math.floor(Math.random() * 6) + 1
  }
  //hide other dices
  const matchingValue = diceValue().toString()
  console.log(matchingValue)
  //show the dice of diceValue
  for (let i = 0; i < diceElements.length; i++) {
    const element = diceElements[i]
    if (element.getAttribute('value') !== matchingValue) {
      element.classList.add('hidden')
    } else {
      element.classList.remove('hidden')
    }
  }
  //add to current if diceNumber!==1 else currentPlayerScore=0 and change gamer
  const diceNumber = parseInt(matchingValue)
  if (diceNumber !== 1) {
    currentPlayerScore += diceNumber
    console.log(currentPlayerScore)
    currentElement.textContent = currentPlayerScore
  } else {
    currentPlayerScore = 0
    currentElement.textContent = 0
    switchPlayer()
  }
}

//Save in  GlobalPlayer score
function holdScore() {
  globalPlayerScore += currentPlayerScore
  globalElement.textContent = globalPlayerScore
  currentPlayerScore = 0
  switchPlayer()
}

function newGame() {
  newScores = document.querySelectorAll('.js-newGame')
  newScores.forEach((element) => {
    element.textContent = 0
  })
}

const player1 = 'player1'
const player2 = 'player2'
let activePlayer = player1
//switch between the 2 players
function switchPlayer() {
  currentPlayerScore = 0
  if (activePlayer === player1) {
    activePlayer = player2
  } else {
    activePlayer = player1
  }
  switch (activePlayer) {
    case 'player1': {
      dot.classList.add('hidden')
      currentElement.textContent = 0
      currentElement = document.getElementById('js-currentPlayer1')
      globalElement = document.getElementById('js-globalPlayer1')
      dot = document.getElementById('js-dotPlayer1')
      dot.classList.remove('hidden')

      break
    }
    case 'player2': {
      dot.classList.add('hidden')
      currentElement.textContent = 0
      currentElement = document.getElementById('js-currentPlayer2')
      globalElement = document.getElementById('js-globalPlayer2')
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
