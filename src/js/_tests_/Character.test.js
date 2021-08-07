import Character from '../Character';

test('Получим объект Character', () => {
  const description = new Character('Green');
  const result = {
    name: 'Green', health: 100, level: 1,
  };
  expect(description).toEqual(result);
});


test('Получим ошибку имени', () => {
  const description = () => new Character('B');
  expect(description).toThrow('Имя должно быть сткрой от 2 до 10 символов включительно');
});

test('Получим ошибку имени', () => {
  const description = () => new Character('Bravo111111');
  expect(description).toThrow('Имя должно быть сткрой от 2 до 10 символов включительно');
});