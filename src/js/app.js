  const units = {
    Bowman: { attack: 25, defense: 25 },
    Swordsman: { attack: 40, defense: 10 },
    Magician: { attack: 10, defense: 40 },
    Undead: { attack: 25, defense: 25 },
    Zombie: { attack: 40, defense: 10 },
    Daemon: { attack: 10, defense: 40 },
  };

  this.name = name;
  this.health = 100;
  this.level = 1;
  this.attack = units[type].attack;
  this.defense = units[type].defense;
