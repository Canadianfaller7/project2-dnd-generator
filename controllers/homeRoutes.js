const router = require('express').Router();
const { User, Character, Inventory } = require('../models');
const withAuth = require('../utils/auth');

