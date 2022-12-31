const User = require('./User');
const Character = require('./Character');
const Inventory = require('./Inventory');

User.hasMany(Character, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Character.belongsTo(User, {
  foreignKey: 'user_id'
});

Character.hasMany(Inventory, {
  foreignKey: 'character_id',
  onDelete: 'CASCADE'
});

Inventory.belongsTo(Character, {
  foreignKey: 'character_id'
});

module.exports = { User, Character, Inventory };

