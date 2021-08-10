import Bowman from '../Bowman';

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

test('Метод levelUp должен повышать level на 1, attack и defense на 20% и health = 100',  () => {
	const test = new Bowman('test');
	test.health = 50;
	test.levelUp();

  expect(test.level).toBe(2);
  expect(test.attack).toBe(30);
  expect(test.defence).toBe(30);
  expect(test.health).toBe(100);
});
test('Метод levelUP должен выбросить ошибку если health = 0', () => {
  const test = new Bowman('test');
  test.health = 0;
  expect(() => test.levelUP()).toThrowError('Нельзя повысить левел умершего');
});

test('if health = 0, output health = 0', () => {
  const test = new Bowman('test');
  test.health = 0;
  test.damage(30);
  expect(test.health).toBe(0);
});

test('if health > 0 , output health must be correct', () => {
  const test = new Bowman('test');
  test.damage(30);
  expect(test.health).toBe(77.5);
});

test('if health became negative, output health must be 0', () => {
  const test = new Bowman('test');
  test.damage(200);
  expect(test.health).toBe(0);
});