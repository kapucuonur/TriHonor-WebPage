// server/src/controllers/contactController.js
const ContactMessage = require('../models/ContactMessage');

// @desc    Submit a new contact message
// @route   POST /api/contact
// @access  Public
exports.submitMessage = async (req, res) => {
  try {
    // The data from the form is in req.body
    const { name, email, message } = req.body;

    // Create a new message in the database
    const newMessage = await ContactMessage.create({
      name,
      email,
      message,
    });

    // Send a success response back to the frontend
    res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
      data: newMessage,
    });
  } catch (error) {
    // If there's an error (e.g., validation fails), send an error response
    console.error('Error submitting message:', error);
    res.status(400).json({
      success: false,
      error: 'Message could not be sent. Please check your input.',
    });
  }
};