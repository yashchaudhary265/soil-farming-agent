const mongoose = require('mongoose');

const AdminPostSchema = new mongoose.Schema({
  crop: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  distributor: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('AdminPost', AdminPostSchema);
