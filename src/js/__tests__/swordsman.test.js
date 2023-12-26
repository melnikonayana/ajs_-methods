import Swordsman from '../classes/swordsman';

test('Need to create an object of the Swordsman class with a set of properties', () => {
  const swordsman = {
    name: 'Ivan',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }
  expect(new Swordsman('Ivan')).toEqual(swordsman);
});
