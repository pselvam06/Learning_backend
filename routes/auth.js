const express = require('express');
const router = express.Router();

// Test route
router.get('/test', (req, res) => {
  res.json({ message: 'Auth route is working' });
});

// Login route - MUST be POST
router.post('/login', (req, res) => {
  console.log('Login attempt:', req.body); // Debug log
  const { email, password } = req.body;
  
  // Your login logic here
  res.json({ 
    success: true,
    token: 'mock-token',
    user: { email, role: 'learner' }
  });
});

module.exports = router;