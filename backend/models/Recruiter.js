// models/Recruiter.js
const mongoose = require('mongoose');

const recruiterSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  contactPerson: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  companyWebsite: { type: String },
  industry: { type: String, required: true },
  hiringNeeds: { type: String, required: true },
  status: {
    type: String,
    enum: ['reviewed', 'pending', 'shortlisted', 'rejected'],
    default: 'pending',
  },
  companySize: { type: String, required: true },
  termsAgreed: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Recruiter', recruiterSchema);
