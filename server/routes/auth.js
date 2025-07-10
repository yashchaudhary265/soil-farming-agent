const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const router = express.Router();

// ✅ Enhanced Register route with better logging
router.post('/register', async (req, res) => {
  console.log('📝 Register request received:', req.body);
  
  const { name, email, password, role } = req.body;
  
  // Input validation
  if (!name || !email || !password) {
    console.log('❌ Missing required fields');
    return res.status(400).json({ 
      error: 'All fields are required',
      missing: { name: !name, email: !email, password: !password }
    });
  }
  
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      console.log('❌ User already exists:', email);
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Determine role (prioritize frontend selection, fallback to admin email check)
    const userRole = role || (email === 'admin@example.com' ? 'admin' : 'user');

    // Create new user
    const user = new User({ 
      name, 
      email: email.toLowerCase(), 
      password: hashedPassword, 
      role: userRole 
    });
    
    await user.save();
    
    console.log('✅ User registered successfully:', { email, role: userRole });
    res.status(201).json({ 
      message: 'User registered successfully',
      user: { name, email: email.toLowerCase(), role: userRole }
    });
    
  } catch (err) {
    console.error('❌ Registration error:', err);
    res.status(500).json({ 
      error: 'Registration failed', 
      details: err.message 
    });
  }
});

// ✅ Enhanced Login route with better logging
router.post('/login', async (req, res) => {
  console.log('🔐 Login request received:', { email: req.body.email });
  
  const { email, password } = req.body;
  
  // Input validation
  if (!email || !password) {
    console.log('❌ Missing email or password');
    return res.status(400).json({ 
      error: 'Email and password are required' 
    });
  }
  
  try {
    // Find user
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      console.log('❌ User not found:', email);
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Compare password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      console.log('❌ Password mismatch for:', email);
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    console.log('✅ Login successful:', { email, role: user.role });
    res.status(200).json({ 
      message: 'Login successful', 
      role: user.role,
      user: { name: user.name, email: user.email, role: user.role }
    });
    
  } catch (err) {
    console.error('❌ Login error:', err);
    res.status(500).json({ 
      error: 'Login failed', 
      details: err.message 
    });
  }
});

module.exports = router;