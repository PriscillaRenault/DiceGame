/*
1
2 créer une nombre aléatoire entre 1 et 6 etl'affcher le nombre aléatoire sur le dé
3 ajouter ce nombre aléatoire au current
4 si 1 remettre le total aléatoire à 0 et passez au second joueur
5 si hold ajouter le current au global et passez au second joueur
*/

const diceElements = document.getElementsByClassName('js-dice')

let currentValue = document.getElementById('js-currentPlayer1')
let globalValue = document.getElementById('js-globalPlayer1')
let currentScore = currentValue
let globalScore = globalValue

//random dice value
function diceValue() {
  return Math.floor(Math.random() * 6) + 1
}
//hide other dices
const matchingValue = diceValue().toString()
console.log(matchingValue)

function rollDice() {
  //show the dice of diceValue
  for (let i = 0; i < diceElements.length; i++) {
    const element = diceElements[i]
    if (element.getAttribute('value') !== matchingValue) {
      element.classList.add('hidden')
    } else {
      element.classList.remove('hidden')
    }
  }
  const diceNumber = parseInt(matchingValue)
  if (diceNumber !== 1) {
    currentScore += diceNumber
    currentValue.textContent = currentScore
  } else {
    currentScore = 0
    currentValue.textContent = 0
    switchPlayer()
  }
}
rollDice()

//switch between the 2 players
function switchPlayer() {
  if (active === player1) {
    active === player2
  } else {
    active === player1
  }
  switch (active) {
    case 'player1': {
      currentValue = document.getElementById('js-currentPlayer1')
      globalValue = document.getElementById('js-globalPlayer1')
      currentScore = currentValue
      globalScore = globalValue
      break
    }
    case 'player2': {
      currentValue = document.getElementById('js-currentPlayer2')
      globalValue = document.getElementById('js-globalPlayer2')
      currentScore = currentValue
      globalScore = globalValue
      break
    }
    default: {
      console.log('error with switch player')
    }
  }
}
