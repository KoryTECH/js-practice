var names = [`Korede`, `Dominion`, `Ope`, `Ayo`];
function whosPaying() {
  var numberOfPeople = names.length;
  var randomPosition = Math.floor(Math.random() * numberOfPeople);
  var randomPerson = names[randomPosition];
  alert(randomPerson + ` is going to pay for lunch today`);
  document.write(randomPerson + ` is going to pay for lunch today`);
}
whosPaying();
