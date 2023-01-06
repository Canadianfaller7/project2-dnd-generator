const { User } = require('../models');

const userData = [
  {
    name: 'James Brown',
    email: 'james@email.com',
    password: 'password',
  },
  {
    name: 'Zoie Tucker',
    email: 'zoie@email.com',
    password: 'password1',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
