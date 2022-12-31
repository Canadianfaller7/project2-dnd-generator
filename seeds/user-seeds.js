const { User } = require('../models');

const userData = [
  {
    id: 1,
    name: 'James Brown',
    email: 'james@email.com',
    password: 'password',

  },
  {
    id: 2,
    name: 'Zoie Tucker',
    email: 'zoie@email.com',
    password: 'password1',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;