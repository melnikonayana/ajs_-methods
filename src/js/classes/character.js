export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;

    if (name.length < 2 || name.length > 10) {
      throw new Error('The name must be between 2 and 10 characters long')
    }

    if (typeof name !== 'string') {
      throw new Error('Name must be a string')
    }

    if (['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].indexOf(type) === -1) {
      throw new Error('There is no such hero');
    }
  }

  levelUp() {
    if (this.health !== 0) {
      this.level++;
      this.attack = Math.round(this.attack *= 1.2);
      this.defence = Math.round(this.defence *= 1.2);
      this.health = 100;
    } else {
      throw new Error('You can`t level up a dead character');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
      this.health = Math.round(this.health);
    } else {
      this.health = 0;
    }
  }
}
