export default function Character(name, type) {
  if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
    throw new Error('Имя должно быть строкой от 2 до 10 символов включительно');
  }

  const units = {
    Bowman: { attack: 25, defense: 25 },
    Swordsman: { attack: 40, defense: 10 },
    Magician: { attack: 10, defense: 40 },
    Undead: { attack: 25, defense: 25 },
    Zombie: { attack: 40, defense: 10 },
    Daemon: { attack: 10, defense: 40 },
  };

  if (!Object.keys(units).includes(type) || typeof type !== 'string') {
    throw new Error('Тип персонажа должен быть: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
  }

  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
  this.attack = units[type].attack;
  this.defense = units[type].defense;
}