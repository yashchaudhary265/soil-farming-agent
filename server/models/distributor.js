const mongoose = require('mongoose');

const distributorSchema = new mongoose.Schema({
  crop: { type: String, required: true },
  state: { type: String, required: true },
  distributor: { type: String, required: true },
  contact: { type: String, required: true }
});

module.exports = mongoose.model('Distributor', distributorSchema);
