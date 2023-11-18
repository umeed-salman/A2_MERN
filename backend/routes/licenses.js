// routes/licenses.js
const express = require('express');
const router = express.Router();
const License = require('../models/license');
const nodemailer = require('nodemailer');

// Configure Nodemailer transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Your Gmail email address
    pass: 'your-gmail-password', // Your Gmail password or an App Password
  },
});

// Generate and distribute license
router.post('/generate', async (req, res) => {
  try {
    const { productId, userEmail } = req.body;
    const license = new License({ productId, userEmail });
    await license.save();

    // Send license via email
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: userEmail,
      subject: 'License Key',
      text: `Your license key: ${license.key}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json(license);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Activate and validate license
router.post('/activate', async (req, res) => {
  try {
    const { key } = req.body;
    const license = await License.findOne({ key });

    if (!license) {
      return res.status(404).json({ msg: 'License not found' });
    }

    // Additional validation logic can be added here

    if (license.activated) {
      return res.status(400).json({ msg: 'License already activated' });
    }

    license.activated = true;
    await license.save();

    res.status(200).json({ msg: 'License activated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
