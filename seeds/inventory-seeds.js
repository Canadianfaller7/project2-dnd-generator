const { Inventory } = require('../models');

const inventoryData = [
  {
    id: 1,
    item_name: 'Antitoxin',
    character_id: 1,
  },
  {
    id: 2,
    item_name: 'Basic Fishing Equipment',
    character_id: 2,
  },
];

const seedInventory = () => Inventory.bulkCreate(inventoryData);

module.exports = seedInventory;
