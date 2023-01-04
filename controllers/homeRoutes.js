const router = require('express').Router();
const { User, Character, Inventory } = require('../models');
const withAuth = require('../utils/auth');

//get all characters
router.get('/', async (req, res) => {
  try {
    const characterData = await Character.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const characters = characterData.map((character) =>
      character.get({ plain: true })
    );

    res.render('profile', {
      characters,
      logged_in: req.session.logged_in,
    });
    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one character by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const characterData = await Character.findByPk(req.params.id, {
      include: [
        {
          model: Inventory,
        },
      ],
    });
    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Character, Inventory }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
