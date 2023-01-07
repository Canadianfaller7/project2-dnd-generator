const { Character } = require('../models');

const characterData = [
  {
    name: 'Derrek Jonno',
    race: 'dark-elf',
    character_class: 'warlock',
    gender: 'Male',
    level: 8,
    build: 'average',
    exp: 3240,
    strength: 16,
    dexterity: 11,
    constitution: 19,
    wisdom: 6,
    intelligence: 9,
    charisma: 10,
    user_id: 1
  },
  {
    name: 'Vilithrax',
    race: 'Dragonborn',
    character_class: 'Cleric',
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