const express = require('express');
const router = express.Router();

// Basic admin route
router.get('/', (req, res) => {
  res.json({ message: 'Admin routes working' });
});

module.exports = router;
