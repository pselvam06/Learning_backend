const express = require('express');
const router = express.Router();

// Get all users
router.get('/', (req, res) => {
  res.json({ message: 'Get all users - working' });
});

// Get single user by ID
router.get('/:id', (req, res) => {
  res.json({ message: `Get user ${req.params.id} - working` });
});

// Create new user
router.post('/', (req, res) => {
  res.json({ message: 'Create new user - working', data: req.body });
});

// Update user
router.put('/:id', (req, res) => {
  res.json({ message: `Update user ${req.params.id} - working`, data: req.body });
});

// Delete user
router.delete('/:id', (req, res) => {
  res.json({ message: `Delete user ${req.params.id} - working` });
});

module.exports = router;