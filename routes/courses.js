const express = require('express');
const router = express.Router();

// Get all courses
router.get('/', (req, res) => {
  res.json({ message: 'Get all courses - working' });
});

// Get course by ID
router.get('/:id', (req, res) => {
  res.json({ message: `Get course ${req.params.id} - working` });
});

// Create new course
router.post('/', (req, res) => {
  res.json({ message: 'Create new course - working', data: req.body });
});

// Update course
router.put('/:id', (req, res) => {
  res.json({ message: `Update course ${req.params.id} - working`, data: req.body });
});

// Delete course
router.delete('/:id', (req, res) => {
  res.json({ message: `Delete course ${req.params.id} - working` });
});

module.exports = router;