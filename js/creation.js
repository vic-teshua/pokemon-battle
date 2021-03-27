// Create POKEMONS
let pikachu = new Pokemon('Pikachu', 120, 90, 7);
let bulbasaur = new Pokemon('Bulbasaur', 110, 105, 9);
let charmander = new Pokemon('Charmander', 100, 100, 6);
let squirtle = new Pokemon('Squirtle', 140, 70, 7);

// Create SKILLS
let lightning = new AttackSkill('lightning', 40, 30);
let poisonSeed = new AttackSkill('poison-seed', 20, 20);
let rocketLauncher = new AttackSkill('rocket-launcher', 30, 25);
let shellShock = new AttackSkill('shell-shock', 50, 50);

// LEARN Skills
pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);
charmander.learnAttackSkill(shellShock);
squirtle.learnAttackSkill(rocketLauncher);
