const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({
  status: String,
  location: String,
  timestamp: { type: Date, default: Date.now },
});

const TrackingSchema = new mongoose.Schema({
  trackingNumber: { type: String, required: true, unique: true },
  carrier: String,
  status: String,
  details: String,
  history: [HistorySchema],
}, { timestamps: true });

module.exports = mongoose.model('Tracking', TrackingSchema);
