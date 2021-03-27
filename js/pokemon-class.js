class Pokemon {
  constructor(name, health, magic, luck, skills = []) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.luck = luck;
    this.skills = skills;
    this.pic = `img/${this.name}.png`;
  }

  learnAttackSkill(obj) {
    this.skills.push(obj);
  }

  attack(skill, enemy) {
    let weapon = this.skills.find((item) => item.name === skill);
    let showResult = document.querySelector('.showResult');

    // show who's turn
    document.querySelector('.showName').textContent = this.name;

    if (this.luck <= this.randomGenerator()) {
      showResult.textContent = `Missed!`;
    } else if (this.magic < weapon.magic) {
      this.getMagic(50);
      showResult.textContent = 'Skips!';
    } else {
      // SUCCESS
      enemy.health = enemy.health - weapon.damage;
      this.magic = this.magic - weapon.magic;

      // message
      showResult.textContent = 'Success';
    }
  }

  // helper methods
  getMagic(number) {
    this.magic += number;
  }

  randomGenerator() {
    return Math.floor(Math.random() * 10 + 1);
  }

  // FIGURES PLACEMENT
  displayPokemon(className, who) {
    let place = document.querySelector(className);
    let template = `
    <section class='description'>

      <h2>${this.name} (${who})</h2>
      <p title="damage: ${this.skills[0].damage}, magic: ${this.skills[0].magic}"><b>Weapon:</b> ${this.skills[0].name}</p>
      <p class='health${this.name}'><b>Health:</b></p>
                  
      <div class="progress">
         <div class="progress-bar bg-danger progHealth${this.name}" role="progressbar" style="width: ${this.health * 2}px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="200" title='Health'>${this.health}</div>
      </div>

      <p class='magic${this.name}'><b>Magic:</b></p>

      <div class="progress">
         <div class="progress-bar bg-info progMagic${this.name}" role="progressbar" style="width: ${this.magic * 2}px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="200" title='Magic'>${this.magic}</div>
      </div>

     </section>

     <section class='photo'>
        <img class='pic${this.name}' src="${this.pic}" alt="">
     </section>
    `;
    place.innerHTML = template;
  }
}
