import Character from '../app';

test('Получим объект Bowman', () => {
  const description = new Character('Green', 'Bowman');
  const result = {
    name: 'Green', type: 'Bowman', health: 100, level: 1, attack: 25, defense: 25,
  };
  expect(description).toEqual(result);
});

test('Получим объект Swordsman', () => {
  const description = new Character('Unit1', 'Swordsman');
  const result = {
    name: 'Unit1', type: 'Swordsman', health: 100, level: 1, attack: 40, defense: 10,
  };
  expect(description).toEqual(result);
});

test('Получим объект Magician', () => {
  const description = new Character('Unit2', 'Magician');
  const result = {
    name: 'Unit2', type: 'Magician', health: 100, level: 1, attack: 10, defense: 40,
  };
  expect(description).toEqual(result);
});

test('Получим объект Undead', () => {
  const description = new Character('Unit3', 'Undead');
  const result = {
    name: 'Unit3', type: 'Undead', health: 100, level: 1, attack: 25, defense: 25,
  };
  expect(description).toEqual(result);
});

test('Получим объект Daemon', () => {
  const description = new Character('Unit4', 'Daemon');
  const result = {
    name: 'Unit4', type: 'Daemon', health: 100, level: 1, attack: 10, defense: 40,
  };
  expect(description).toEqual(result);
});

test('Получим объект Zombie', () => {
  const description = new Character('Black', 'Zombie');
  const result = {
    name: 'Black', type: 'Zombie', health: 100, level: 1, attack: 40, defense: 10,
  };
  expect(description).toEqual(result);
});

test('Получим ошибку имени', () => {
  const description = () => new Character('B', 'Undead');
  expect(description).toThrow('Имя должно быть сткрой от 2 до 10 символов включительно');
});

test('Получим ошибку типа', () => {
  const description = () => new Character('Boo', 'Und');
  expect(description).toThrow('Тип персонажа должен быть: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});