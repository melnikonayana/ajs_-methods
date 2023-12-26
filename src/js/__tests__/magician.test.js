import Magician from '../classes/magician';

test('Need to create an object of the Magician class with a set of properties', () => {
  const magician = {
    name: 'Ivan',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }
  expect(new Magician('Ivan')).toEqual(magician);
});
