const router = require('express').Router();
const { Inventory } = require('../../models');
const withAuth = require('../../utils/auth');

//get inventory
router.get('/', withAuth, async (req, res) => {
    try {
      const inventoryData = await Inventory.findAll({});
      res.status(200).json(inventoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


// find one inventory by its `id` value
router.get('/:id', withAuth, async (req, res) => {
  try {
    const inventoryData = await Inventory.findByPk(req.params.id, {});
    res.status(200).json(inventoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create inventory
router.post('/', withAuth, async (req, res) => {
  try {
    const inventoryData = await Inventory.create({
      ...req.body
    });
    res.status(200).json(inventoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//update inventory by id
router.put('/:id', withAuth, (req, res) => {
  Inventory.update(
    {
      item_name: req.body.item_name,
      character_id: req.body.character_id
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedInventory) => {
      res.json(updatedInventory);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

//delete inventory by id
router.delete('/:id',  (req, res) => {
  Inventory.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((selectedInventory) => {
      res.json(selectedInventory);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
