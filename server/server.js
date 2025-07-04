const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const cors = require('cors');
const adminRoutes = require('./routes/admin');

dotenv.config();
const app = express();

// ✅ CORS Middleware
app.use(cors({
  origin: [
    'https://soil-farming-agent-d87pq42d9-interactive-resumes-projects.vercel.app',
    'https://soil-farming-agent-git-main-interactive-resumes-projects.vercel.app'
  ],
  credentials: true
}));


// ✅ Body Parser
app.use(express.json());

// ✅ Connect to DB
connectDB();

// ✅ Log all incoming requests
app.use((req, res, next) => {
  console.log(`🌀 ${req.method} ${req.url}`);
  next();
});

// ✅ Main API routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

// ✅ 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: '❌ Route not found' });
});

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error('❗ Internal Error:', err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
