const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
const inventoryRoutes = require('./inventoryRoutes')

router.use('/users', userRoutes);
router.use('/characters', characterRoutes);
router.use('/inventory', inventoryRoutes)

module.exports = router;
