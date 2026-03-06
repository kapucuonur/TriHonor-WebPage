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
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://trihonor.com',
    'https://www.trihonor.com',
    /\.vercel\.app$/
  ],
  credentials: true
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