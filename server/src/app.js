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
app.use(loggerMiddleware); // Log every request

const allowedOrigins = [
  'http://localhost:5173',
  'https://trihonor.com',
  'https://www.trihonor.com'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    const isAllowed = allowedOrigins.indexOf(origin) !== -1 ||
      origin.endsWith('.vercel.app') ||
      origin.endsWith('.trihonor.com');
    if (isAllowed) {
      callback(null, true);
    } else {
      console.log('CORS blocked for origin:', origin);
      callback(new Error('By CORS: This origin is not allowed'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
}));

app.options('*', cors());
app.use(express.json());

// --- 2. API ROUTES ---
const contactRoutes = require('./routes/contactRoutes');
const aiRoutes = require('./routes/aiRoutes');

app.use('/api/contact', contactRoutes);
app.use('/api/ai', aiRoutes);

// Handle undefined routes
app.all('*', (req, res, next) => {
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