'use strict';
// charmander, squirtle, pikachu, bulbasaur

let enemy1 = pikachu;
let enemy2 = bulbasaur;

enemy1.displayPokemon('.enemy1', 'computer');
enemy2.displayPokemon('.enemy2', 'you');

// START GAME
let playButton = document.querySelector('.button');
let playButtonInfo = playButton.dataset.button;

// on click
playButton.addEventListener('click', round);

let roundNum = 0;

// to switch turns
function round() {
  if (playButtonInfo === 'start' || playButtonInfo === enemy1.name) {
    fight(enemy1, enemy2);
    playButtonInfo = enemy2.name;
    roundNum++;
    document.querySelector('.round p').textContent = roundNum;
  } else if (playButtonInfo === enemy2.name) {
    fight(enemy2, enemy1);
    playButtonInfo = enemy1.name;
  }
}

// to fight
function fight(attacker, defender) {
  attacker.attack(attacker.skills[0].name, defender);
  if (defender.health <= 0) endGame(attacker, defender);

  document.querySelector(`.pic${attacker.name}`).classList.add("moveFigure");
  
  setTimeout(function () {document.querySelector(`.pic${attacker.name}`).classList.remove("moveFigure");}, 1000);

  // Show progress 
  document.querySelector(`.progHealth${defender.name}`).innerHTML =
    defender.health;
  document.querySelector(`.progHealth${defender.name}`).style.width = `${
    defender.health * 2
  }px`;

  document.querySelector(`.progMagic${attacker.name}`).innerHTML =
    attacker.magic;
  document.querySelector(`.progMagic${attacker.name}`).style.width = `${
    attacker.magic * 2
  }px`;
}

// end game
function endGame(winner, looser) {
  looser.health = 0;

  document.querySelector('.showName').textContent = winner.name;
  document.querySelector('.showResult').textContent = 'WINS! 🥳';

  playButton.removeEventListener('click', round);
  playButton.textContent = 'END';
  playButton.style.cursor = 'not-allowed';
  playButton.style.transform = 'scale(1)';
  playButton.style.backgroundColor = 'lightgray';
}
