import Character from '../character';

test('Получим обьект Character', () => {
  const expected = {
    name: 'Test',
    type: 'Bowman',
    health: 100,
    level: 1,
  };
  expect(new Character('Test', 'Bowman')).toEqual(expected);
});

test('Получим ошибку имени', () => {
  expect(() => new Character(1, 'Bowman')).toThrow('The name must be a string');
});

test('Имя должно быть сткрой от 2 до 10 символов включительно', () => {
  expect(() => new Character('T', 'Bowman')).toThrow('The name must be between 2 and 10 characters!');
  expect(() => new Character('abracadabra')).toThrow('The name must be between 2 and 10 characters!');
});

test('Получим ошибку имени', () => {
  expect(() => new Character('abracad')).toThrow('The type must be selected from the list of suggested types!');
});