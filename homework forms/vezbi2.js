class propertis {
  constructor(ime, pozicija, health, damage, level) {
    this.ime = ime;
    this.pozicija = pozicija;
    this.health = health;
    this.damage = damage;
    this.level = level;
    this.rank;
  }
  ranks() {
    if (this.level < 50) {
      this.rank = "noob";
    } else if (this.level > 50 && this.level <= 70) {
      this.rank = "amater";
    } else if (this.level < 70 && this.level <= 90) {
      this.rank = "meduim";
    } else if (this.level < 90 && this.level <= 99) {
      this.rank = "pro";
    } else {
      this.rank = "legend";
    }
    return this.rank;
  }
  leaderboardCalc() {
    if (this.health === 100 && this.level === 100) {
      return `Winner is: ${this.ime} (Platinum)`;
    } else {
      return `${this.name} does not meet the parameters for (Platinum)`;
    }
  }
}
let cars1 = new propertis("gost", "warlock", 100, 100, 100);
let cars2 = new propertis("gost1", "warlock", 69, 400, 70);
let cars3 = new propertis("gost2", "warlock", 50, 400, 90);
let cars4 = new propertis("gost3", "warlock", 50, 400, 59);
let cars5 = new propertis("gost4", "warlock", 30, 400, 40);
console.log(cars5.ranks());
console.log(cars3.ranks());
console.log(cars2.ranks());
console.log(cars4.ranks());

console.log(cars1.leaderboardCalc());
console.log(cars3.leaderboardCalc());
