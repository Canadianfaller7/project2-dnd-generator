const { Character } = require('../models');

const characterData = [
  {
    id: 1,
    name: 'Derrek Jonno',
    race: 'dark-elf',
    class: 'warlock',
    gender: 'Male',
    level: 8,
    build: 'average',
    strength: 16,
    dexterity: 11,
    constitution: 19,
    wisdom: 6,
    intelligence: 9,
    charisma: 10,
    user_id: 1
  },
  {
    id: 2,
    name: 'Vilithrax',
    race: 'Dragonborn',
    class: 'Cleric',
    gender: 'Female',
    level: 10,
    build: 'Large',
    exp: 3240,
    strength: 14,
    dexterity: 8,
    constitution: 16,
    wisdom: 16,
    intelligence: 12,
    charisma: 8,
    user_id: 2
  }
];

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;