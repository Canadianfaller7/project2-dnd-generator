const { User } = require('../models');

const userData = [
  {
    id: 1,
    name: 'James Brown',
  },
  {
    id: 2,
    name: 'Zoie Tucker',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
