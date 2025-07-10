const express = require('express');
const router = express.Router();
const Distributor = require('../models/distributor');

// Get all distributors
router.get('/', async (req, res) => {
  try {
    console.log('📋 Fetching all distributors');
    const distributors = await Distributor.find().sort({ createdAt: -1 });
    console.log(`✅ Found ${distributors.length} distributors`);
    res.json(distributors);
  } catch (error) {
    console.error('❌ Error fetching distributors:', error);
    res.status(500).json({ error: 'Failed to fetch distributors' });
  }
});

// Add new distributor
router.post('/', async (req, res) => {
  try {
    console.log('📝 Creating new distributor:', req.body);
    const { name, location, contact, supplies, email } = req.body;

    if (!name || !location || !contact || !supplies || !email) {
      return res.status(400).json({ 
        error: 'All fields are required',
        required: ['name', 'location', 'contact', 'supplies', 'email']
      });
    }

    const existingDistributor = await Distributor.findOne({ email });
    if (existingDistributor) {
      return res.status(400).json({ error: 'Distributor with this email already exists' });
    }

    const distributor = new Distributor({
      name,
      location,
      contact,
      supplies,
      email
    });

    await distributor.save();
    console.log('✅ Distributor created successfully:', distributor._id);
    res.status(201).json({ 
      message: 'Distributor registered successfully',
      distributor 
    });
  } catch (error) {
    console.error('❌ Error creating distributor:', error);
    res.status(500).json({ error: 'Failed to create distributor' });
  }
});

module.exports = router;
