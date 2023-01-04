const router = require('express').Router();
const { Character } = require('../../models');
const withAuth = require('../../utils/auth');

//api/characters

//get all characters
// router.get('/', async (req, res) => {
//   try {
//     const characterData = await Character.findAll({});
//     res.status(200).json(characterData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // find one character by its `id` value
// router.get('/:id', async (req, res) => {
//   try {
//     const characterData = await Character.findByPk(req.params.id, {});
//     res.status(200).json(characterData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//create new character
router.post('/', withAuth, async (req, res) => {
  try {
    const newCharacter = await Character.create({
      ...req.body,
      user_id: req.session.user_id
    });
    res.status(200).json(newCharacter);
  } catch (err) {
    res.status(400).json(err);
  }
});

////update character by id
// router.put('/:id', withAuth, async (req, res) => {
//   const characterData = await Character.update(
//     {
//       ...req.body
//     },
//     {
//       where: {
//         id: req.params.id,
//       },
//     }
//   )
//     .then((updatedCharacter) => {
//       res.json(updatedCharacter);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.json(err);
//     });
// });

//delete character by id
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const characterData = await Character.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      },
    });

    if (!characterData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
