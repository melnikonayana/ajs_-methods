import Daemon from '../classes/daemon';
test('Need to create an object of the Daemon class with a set of properties', () => {
  const daemon = {
    name: 'Ivan',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }
  expect(new Daemon('Ivan')).toEqual(daemon);
});
