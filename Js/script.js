class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}
class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
  }
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}
class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
}
const robin = new Adventurer("Robin", "Warrior");
robin.inventory = ["sword", "potion", "artifact"];
const leo = new Companion("Leo", "Cat");
leo.companion = new Companion("Frank", "Flea");
leo.companion.inventory = ["small hat", "sunglasses"];
robin.roll(); // Example output: Robin rolled a 15.
leo.roll();
