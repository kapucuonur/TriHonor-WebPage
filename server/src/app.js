// server/src/app.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') });

// Note: No more connectDB() call for MongoDB
// Prisma handles connections automatically when queried

const app = express();

// --- Middlewares ---
const allowedOrigins = [
  'http://localhost:5173',
  'https://trihonor.com',
  'https://www.trihonor.com',
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    const isAllowed = allowedOrigins.includes(origin) ||
      origin.endsWith('.vercel.app') ||
      origin.endsWith('.trihonor.com');

    if (isAllowed) {
      callback(null, true);
    } else {
      callback(new Error('By CORS: This origin is not allowed'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// --- API Routes ---
const contactRoutes = require('./routes/contactRoutes');
const aiRoutes = require('./routes/aiRoutes');

app.use('/api/contact', contactRoutes);
app.use('/api/ai', aiRoutes);

// --- Start the Server ---
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🔗 Database: Neon (PostgreSQL) via Prisma`);
});