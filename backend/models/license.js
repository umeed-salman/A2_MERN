// models/license.js
const mongoose = require('mongoose');

const licenseSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    default: generateLicenseKey,
  },
  activated: {
    type: Boolean,
    default: false,
  },
});

function generateLicenseKey() {
  return require('uuid').v4();
}

const License = mongoose.model('License', licenseSchema);

module.exports = License;
