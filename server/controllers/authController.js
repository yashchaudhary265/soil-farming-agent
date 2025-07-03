const User = require('../models/user');
const bcrypt = require('bcryptjs');

// ✅ Updated registerUser
exports.registerUser = async (req, res) => {
  const { name, email, password, role } = req.body; // added role

  try {
    const userExists = await User.findOne({ email: email.toLowerCase() });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role
    });

    res.status(201).json({ message: 'User registered', userId: newUser._id });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(400).json({ error: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid email or password' });

    // Optionally log to debug:
    // console.log("Login successful for:", user.email);
    // console.log("Role from DB:", user.role);

    res.status(200).json({
      message: 'Login successful',
      role: user.role || 'user'
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

