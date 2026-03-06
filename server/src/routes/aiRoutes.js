// server/src/routes/aiRoutes.js
const express = require('express');
const { chatWithGemini } = require('../controllers/aiController');

const router = express.Router();

// POST /api/ai/chat
router.post('/chat', chatWithGemini);

module.exports = router;
