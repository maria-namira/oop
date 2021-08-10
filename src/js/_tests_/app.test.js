import Character from '../app';

test('Получим объект Bowman', () => {
  const expected = {
    name: 'test',
    type: 'Bowman'
     health: 100, 
     level: 1, 
     attack: 25, 
     defense: 25,
  };
  expect(new Bowman('test')).toEqual(expected);
});

test('Получим объект Swordsman', () => {
   const expected = {
    name: 'test',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(new Swordsman('test')).toEqual(expected);
});

test('Получим объект Magician', () => {
  const expected = {
    name: 'test',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(new Magician('test')).toEqual(expected);
});

test('Получим объект Undead', () => {
  const expected = {
    name: 'Test',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(new Undead('test')).toEqual(expected);
});
test('Получим объект Daemon', () => {
  const expected = {
    name: 'Test',
    type: 'Deamon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(new Deamon('Test')).toEqual(expected);
});

test('Получим объект Zombie', () => {
 const expected = {
    name: 'test',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(new Zombie('Test')).toEqual(expected);
});

test('Получим ошибку имени', () => {
  const expected = {
    name: 'test',
    type: 'error name',
};
expect(new name('test')).toEqual(expected)
});


test('Получим ошибку типа', () => {
  const expected = {
    name: 'test',
    type: 'error type'
  };
  expect(new type('test')).toEqual('expected');
});