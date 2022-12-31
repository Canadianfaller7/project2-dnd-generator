const seedUsers = require('./user-seeds');
const seedCharacters = require('./character-seeds');
const seedInventory = require('./inventory-seeds');

const sequelize = require('../config/connection');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  console.log('\n---- Users Seeded -----\n');

  await seedCharacters();
  console.log('\n---- Characters Seeded -----\n');

  await seedInventory();
  console.log('\n---- Inventory Seeded -----\n');

  process.exit(0);
};

seedDatabase();
