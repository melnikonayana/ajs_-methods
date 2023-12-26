import Undead from '../classes/undead';

test('Need to create an object of the Undead class with a set of properties', () => {
  const undead = {
    name: 'Ivan',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }
  expect(new Undead('Ivan')).toEqual(undead);
});
