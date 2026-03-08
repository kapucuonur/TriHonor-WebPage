// server/src/controllers/contactController.js
const prisma = require('../config/prisma');
const nodemailer = require('nodemailer');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

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
exports.submitMessage = catchAsync(async (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return next(new AppError('Please provide name, email, and message!', 400));
  }

  // 1. Create a new message in the database
  const newMessage = await prisma.contactMessage.create({
    data: { name, email, message },
  });

  // 2. Send email notification (Fail-safe)
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.CONTACT_EMAIL || 'info@trihonor.com',
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
      // We don't call next(mailError) because DB write succeeded
    }
  }

  res.status(201).json({
    success: true,
    message: 'Message sent successfully!',
    data: newMessage,
  });
});