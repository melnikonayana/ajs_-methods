import Character from "../classes/character";
import Bowman from "../classes/bowman";

test('Need to create a class object Character', () => {
  expect(new Character('Test', 'Bowman')).toBeDefined();
});

test('If the name is not a string, an error is thrown', () => {
  expect(() => new Character(5, 'Bowman')).toThrow('Name must be a string');
});

test('Name length error', () => {
  expect(() => new Character('M', 'Bowman')).toThrow('The name must be between 2 and 10 characters long');
  expect(() => new Character('Akakij Akakievich', 'Bowman')).toThrow('The name must be between 2 and 10 characters long');
});

test('Selecting a non-existent class', () => {
  expect(() => new Character('Test', 'God')).toThrow('There is no such hero');
});

test('Character level up', () => {
  const bowman = new Character('Ivan', 'Bowman');
  bowman.health = 10;
  bowman.level = 1;
  bowman.attack = 25;
  bowman.defence = 25;
  bowman.levelUp();

  const newBowman = {
    name: 'Ivan',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  }
  expect(bowman).toEqual(newBowman)
});

test('A deceased character should not advance to a new level', () => {
  const bowman = new Character('Ivan', 'Bowman');
  bowman.health = 0;
  expect(() => bowman.levelUp()).toThrow('You can`t level up a dead character');
});

test('The character must take damage in battle', () => {
  const bowman = new Bowman('Ivan', 'Bowman');
  bowman.damage(100);
  expect(bowman.health).toEqual(25);
});

test('Character`s health cannot be negative', () => {
  const bowman = new Bowman('Ivan', 'Bowman');
  bowman.damage(200);
  expect(bowman.health).toEqual(-50);
});

