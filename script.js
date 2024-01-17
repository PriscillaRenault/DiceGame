/*
1
2 créer une nombre aléatoire entre 1 et 6 etl'affcher le nombre aléatoire sur le dé
3 ajouter ce nombre aléatoire au current
4 si 1 remettre le total aléatoire à 0 et passez au second joueur
5 si hold ajouter le current au global et passez au second joueur
*/

dice = document.getElementsByClassName('js-dice')

function diceValue() {
  return Math.floor(Math.random() * (7 - 1) + 1)
}
