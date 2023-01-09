const { Stats } = require('../models');

const statsData = [
  {
    id: 1,
    strength: 16,
    dexterity: 11,
    constitution: 19,
    wisdom: 6,
    intelligence: 9,
    charisma: 10,
  },
  {
    id: 2,
    strength: 14,
    dexterity: 8,
    constitution: 16,
    wisdom: 16,
    intelligence: 12,
    charisma: 8,
  },
];

const seedStats = () => Stats.bulkCreate(statsData);

module.exports = seedStats;
