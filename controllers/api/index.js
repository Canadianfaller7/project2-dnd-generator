const router = require('express').Router();
const characterRoutes = require('./characterRoutes');


router.use('/characters', characterRoutes);

module.exports = router;
