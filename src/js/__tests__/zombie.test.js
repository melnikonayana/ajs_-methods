import Zombie from '../classes/zombie';

test('Need to create an object of the Undead class with a set of properties', () => {
  const zombie = {
    name: 'Ivan',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }
  expect(new Zombie('Ivan')).toEqual(zombie);
});
