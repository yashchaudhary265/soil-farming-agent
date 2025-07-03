const express = require('express');
const router = express.Router();
const Distributor = require('../models/distributor');

router.post('/post-data', async (req, res) => {
  const { crop, state, distributor, contact } = req.body;

  try {
    const newEntry = new Distributor({ crop, state, distributor, contact });
    await newEntry.save();
    res.status(201).json({ message: 'Data saved successfully!' });
  } catch (err) {
    console.error('❌ Error saving data:', err.message);
    res.status(500).json({ error: 'Failed to save data' });
  }
});

module.exports = router;
