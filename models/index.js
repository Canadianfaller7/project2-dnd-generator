const User = require('./User');
const Character = require('./Character');
const Stats = require('./Stats');
const Inventory = require('./Inventory');

User.hasMany(Character, {
  foreignKey: 'character_id',
  onDelete: 'CASCADE'
});

Character.belongsTo(User, {
  foreignKey: 'character_id'
});

Character.hasOne(Stats,  {
  foreignKey: 'stats_id',
  onDelete: 'CASCADE'
});

Stats.belongsTo(Character, {
  foreignKey: 'stats_id'
});

Character.hasOne(Inventory, {
  foreignKey: 'inventory_id',
  onDelete: 'CASCADE'
});

Inventory.belongsTo(Character, {
  foreignKey: 'inventory_id'
});

module.exports = { User, Character, Stats, Inventory };