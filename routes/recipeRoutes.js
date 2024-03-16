const express = require('express');
const router = express.Router();

// GET all recipes
router.get('/', (req, res) => {
  res.json({ message: 'Get all recipes' });
});

// GET a single recipe
router.get('/:id', (req, res) => {
  res.json({ message: 'Get a single recipe' });
});

// CREATE a new recipe
router.post('/', (req, res) => {
  res.json({ message: 'Create a new recipe' });
});

// UPDATE a recipe
router.patch('/:id', (req, res) => {
  res.json({ message: 'Update a recipe' });
});

// DELETE a recipe
router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete a recipe' });
});

module.exports = router;
