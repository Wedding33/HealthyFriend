const express = require('express');
const router = express.Router();

const foodData = {
  apple: { calories: 52 },
  banana: { calories: 89 },
  orange: { calories: 47 },
  // Add more food data as needed
};

router.get('/:name', (req, res) => {
  const foodName = req.params.name.toLowerCase();
  const foodInfo = foodData[foodName];

  if (foodInfo) {
    res.json(foodInfo);
  } else {
    res.status(404).json({ message: 'Food not found' });
  }
});

module.exports = router;
