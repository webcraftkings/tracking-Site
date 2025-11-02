const express = require('express');
const Tracking = require('../models/Tracking');
const auth = require('../middleware/auth');

const router = express.Router();

// Public: get tracking by number
router.get('/:number', async (req, res) => {
  try {
    const t = await Tracking.findOne({ trackingNumber: req.params.number });
    if (!t) return res.status(404).json({ message: 'Not found' });
    res.json(t);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Protected: create tracking
router.post('/', auth, async (req, res) => {
  try {
    const { trackingNumber, carrier, status, details } = req.body;
    const existing = await Tracking.findOne({ trackingNumber });
    if (existing) return res.status(400).json({ message: 'Tracking number exists' });
    const t = new Tracking({ trackingNumber, carrier, status, details, history: [{ status, timestamp: new Date() }] });
    await t.save();
    res.json(t);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Protected: add history/update status
router.post('/:number/update', auth, async (req, res) => {
  try {
    const { status, location } = req.body;
    const t = await Tracking.findOne({ trackingNumber: req.params.number });
    if (!t) return res.status(404).json({ message: 'Not found' });
    t.status = status || t.status;
    t.history.push({ status, location });
    await t.save();
    res.json(t);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
