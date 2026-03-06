// server/src/models/ContactMessage.js
const mongoose = require('mongoose');

const ContactMessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    match: [
      /^\S+@\S+\.\S+$/,
      'Please provide a valid email',
    ],
  },
  message: {
    type: String,
    required: [true, 'Please provide a message'],
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

module.exports = mongoose.model('ContactMessage', ContactMessageSchema);