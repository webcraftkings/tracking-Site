const express = require('express');
const Contact = require('../models/Contact');
const auth = require('../middleware/auth');

const router = express.Router();

// Public: submit contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const c = new Contact({ name, email, subject, message });
    await c.save();
    res.json({ message: 'Received' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Protected: list messages (admin)
router.get('/', auth, async (req, res) => {
  try {
    const list = await Contact.find().sort({ createdAt: -1 }).limit(100);
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
