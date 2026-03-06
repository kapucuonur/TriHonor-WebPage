// server/src/app.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/database');
const path = require('path');
// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, '../.env') }); // Note the path to the .env file in the root of the /server dir

// Connect to the database
connectDB();

// Initialize Express app
const app = express();

// --- Middlewares ---
// Enable Cross-Origin Resource Sharing (CORS)
// This allows your frontend at localhost:5173 to talk to your backend at localhost:5000
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://trihonor.com',
    'https://www.trihonor.com',
    /\.vercel\.app$/ // This allows all Vercel preview/production links
  ],
  credentials: true
}));

// Enable express to parse JSON in the body of requests
app.use(express.json());


// --- API Routes ---
// Import your route files
const contactRoutes = require('./routes/contactRoutes');

// Mount the routers
// Any request to /api/contact will be handled by contactRoutes
app.use('/api/contact', contactRoutes);

// AI routes
const aiRoutes = require('./routes/aiRoutes');
app.use('/api/ai', aiRoutes);


// --- Start the Server ---
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});