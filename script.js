/*
1
2 créer une nombre aléatoire entre 1 et 6 etl'affcher le nombre aléatoire sur le dé
3 ajouter ce nombre aléatoire au current
4 si 1 remettre le total aléatoire à 0 et passez au second joueur
5 si hold ajouter le current au global et passez au second joueur
*/

const diceElements = document.getElementsByClassName('js-dice')

//random dice value
function diceValue() {
  return Math.floor(Math.random() * 6) + 1
}
console.log(diceValue())
//hide other dices
const matchingValue = diceValue().toString()

function hideOthersDices() {
  for (let i = 0; i < diceElements.length; i++) {
    const element = diceElements[i]
    if (element.getAttribute('value') !== matchingValue) {
      element.classList.add('hidden')
    } else {
      element.classList.remove('hidden')
    }
  }
}

hideOthersDices()
