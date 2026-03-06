// server/src/routes/contactRoutes.js
const express = require('express');
const { submitMessage } = require('../controllers/contactController');

const router = express.Router();

// When a POST request comes to '/', run the submitMessage function
router.route('/').post(submitMessage);

module.exports = router;