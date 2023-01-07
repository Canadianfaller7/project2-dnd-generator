const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    race: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    character_class: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    exp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    build: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strength: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dexterity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    constitution: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    wisdom: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    intelligence: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    charisma: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'character',
  }
);

module.exports = Character;
