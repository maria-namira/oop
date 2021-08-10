import Zombie from '../Zombie';

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

test('Метод levelUP должен повышать level на 1, attack и defence на 20% и health = 100', () => {
  const test = new Zombie('test');
  test.health = 50;
  test.levelUP();
  expect(test.level).toBe(2);
  expect(test.attack).toBe(48);
  expect(test.defence).toBe(12);
  expect(test.health).toBe(100);
});

test('Метод levelUP должен выбросить ошибку если health = 0', () => {
  const test = new Zombie('test');
  test.health = 0;
  expect(() => test.levelUP()).toThrow('Нельзя повысить левел умершего');
});

test('if health = 0, output health = 0', () => {
  const testCase = new Zombie('test');
  testCase.health = 0;
  testCase.damage(30);
  expect(testCase.health).toBe(0);
});

test('if health > 0 , output health must be correct', () => {
  const testCase = new Zombie('test');
  testCase.damage(30);
  expect(testCase.health).toBe(73);
});

test('if health became negative, output health must be 0', () => {
  const testCase = new Zombie('test');
  testCase.damage(200);
  expect(testCase.health).toBe(0);
});