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

// --- 1. GLOBAL MIDDLEWARES ---

const allowedOrigins = [
  'http://localhost:5173',
  'https://trihonor.com',
  'https://www.trihonor.com'
];

// Modern CORS configuration (Express 5 compatible)
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    const isAllowed = allowedOrigins.includes(origin) ||
      origin.endsWith('.vercel.app') ||
      origin.endsWith('.trihonor.com');

    if (isAllowed) {
      callback(null, true);
    } else {
      console.log('❌ CORS Blocked Origin:', origin);
      callback(null, false);
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
}));

// Use a regular expression for catch-all to bypass problematic path-to-regexp strings in Express 5
app.options(/.*/, cors());

app.use(loggerMiddleware);
app.use(express.json());

// --- 2. API ROUTES ---
const contactRoutes = require('./routes/contactRoutes');
const aiRoutes = require('./routes/aiRoutes');

app.use('/api/contact', contactRoutes);
app.use('/api/ai', aiRoutes);

// Handle undefined routes - Path-less middleware is safest 
app.use((req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// --- 3. GLOBAL ERROR HANDLING ---
app.use(errorMiddleware);

// --- 4. START THE SERVER ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 [PRO] Server is running on port ${PORT}`);
  console.log(`🔗 Database: Neon (PostgreSQL) via Prisma`);
});