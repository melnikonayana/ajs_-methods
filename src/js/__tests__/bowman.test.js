import Bowman from '../classes/bowman';
test('Need to create an object of the Bowman class with a set of properties', () => {
  const bowman = {
    name: 'Ivan',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }
  expect(new Bowman('Ivan')).toEqual(bowman);
});
