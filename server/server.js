const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const cors = require('cors');
const adminRoutes = require('./routes/admin');


dotenv.config();

const app = express();

// ✅ CORS Middleware (Restrict to frontend origin)
app.use(cors({
  origin: 'http://localhost:3000', // change if frontend URL is different
  credentials: true
}));

// ✅ JSON Body Parser
app.use(express.json());

// ✅ Connect to Database
connectDB();

// ✅ Route Logger
app.use((req, res, next) => {
  console.log(`🌀 ${req.method} ${req.url}`);
  next();
});
app.use('/api/admin', adminRoutes);

// ✅ API Routes
app.use('/api/auth', authRoutes);

// ✅ 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: '❌ Route not found' });
});

// ✅ Global Error Handler (optional but recommended)
app.use((err, req, res, next) => {
  console.error('❗ Internal Error:', err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
