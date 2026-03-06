// server/src/controllers/contactController.js
const ContactMessage = require('../models/ContactMessage');
const nodemailer = require('nodemailer');

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// @desc    Submit a new contact message
// @route   POST /api/contact
// @access  Public
exports.submitMessage = async (req, res) => {
  try {
    // The data from the form is in req.body
    const { name, email, message } = req.body;

    // 1. Create a new message in the database
    const newMessage = await ContactMessage.create({
      name,
      email,
      message,
    });

    // 2. Send email notification if configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.CONTACT_EMAIL || 'trihonor@hotmail.com',
          subject: `New Contact Submission: ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          html: `<h3>New Contact Message</h3>
                 <p><strong>From:</strong> ${name} (${email})</p>
                 <p><strong>Message:</strong></p>
                 <p>${message}</p>`,
        };
        await transporter.sendMail(mailOptions);
      } catch (mailError) {
        console.error('Nodemailer Error:', mailError);
        // We don't fail the request if email fails, as DB write succeeded
      }
    }

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