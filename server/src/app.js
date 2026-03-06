// server/src/app.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// Import Custom Middlewares & Utils
const errorMiddleware = require('./middleware/errorMiddleware');
const loggerMiddleware = require('./middleware/loggerMiddleware');
const AppError = require('./utils/AppError');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') });

const app = express();

// --- 1. GLOBAL MIDDLEWARES & CORS ---

const allowedOrigins = [
  'http://localhost:5173',
  'https://trihonor.com',
  'https://www.trihonor.com',
  'https://trihonor-web-page.vercel.app'
];

// BULLETPROOF CORS & PREFLIGHT HANDLING
app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (origin && (allowedOrigins.includes(origin) || origin.endsWith('.vercel.app') || origin.endsWith('.trihonor.com'))) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle Preflight directly
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  next();
});

// Also keep the official cors middleware as a second layer
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    const isAllowed = allowedOrigins.includes(origin) ||
      origin.endsWith('.vercel.app') ||
      origin.endsWith('.trihonor.com');

    if (isAllowed) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  credentials: true
}));

app.use(loggerMiddleware);
app.use(express.json());

// --- 2. API ROUTES ---
const contactRoutes = require('./routes/contactRoutes');
const aiRoutes = require('./routes/aiRoutes');

app.use('/api/contact', contactRoutes);
app.use('/api/ai', aiRoutes);

// Handle undefined routes
app.use((req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// --- 3. GLOBAL ERROR HANDLING ---
app.use(errorMiddleware);

// --- 4. START THE SERVER ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 [PRO] Server is running on port ${PORT}`);
  console.log(`🔗 Database: Neon (PostgreSQL) via Prisma`);
});