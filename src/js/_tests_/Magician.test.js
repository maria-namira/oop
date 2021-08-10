import Magician from '../Magician';

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

test('Метод levelUP должен повышать level на 1, на 20% attack и defence и health = 100', () => {
  const test = new Magician('test');
  test.health = 50;
  test.levelUP();
  expect(test.level).toBe(2);
  expect(test.attack).toBe(12);
  expect(test.defence).toBe(48);
  expect(test.health).toBe(100);
});

test('Метод levelUP должен выбросить ошибку если health = 0', () => {
  const test = new Magician('test');
  test.health = 0;
  expect(() => test.levelUP()).toThrow('Нельзя повысить левел умершего');
});

test('if health = 0, output health = 0', () => {
  const testCase = new Magician('test');
  testCase.health = 0;
  testCase.damage(30);
  expect(testCase.health).toEqual(0);
});

test('if health > 0 , output health must be correct', () => {
  const testCase = new Magician('test');
  testCase.damage(30);
  expect(testCase.health).toBe(82);
});

test('if health became negative, output health must be 0', () => {
  const testCase = new Magician('test');
  testCase.damage(200);
  expect(testCase.health).toBe(0);
});