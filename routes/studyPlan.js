const express = require('express');
const router = express.Router();

// Get all study plans
router.get('/', (req, res) => {
  res.json({ message: 'Get all study plans - working' });
});

// Get study plan by ID
router.get('/:id', (req, res) => {
  res.json({ message: `Get study plan ${req.params.id} - working` });
});

// Get study plans for specific user
router.get('/user/:userId', (req, res) => {
  res.json({ message: `Get study plans for user ${req.params.userId} - working` });
});

// Create new study plan
router.post('/', (req, res) => {
  res.json({ message: 'Create new study plan - working', data: req.body });
});

// Update study plan
router.put('/:id', (req, res) => {
  res.json({ message: `Update study plan ${req.params.id} - working`, data: req.body });
});

// Delete study plan
router.delete('/:id', (req, res) => {
  res.json({ message: `Delete study plan ${req.params.id} - working` });
});

module.exports = router;