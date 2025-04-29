const mongoose = require('mongoose');

const recruiterSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email'],
  },
  linkedInProfile: {
    type: String,
    required: [true, 'LinkedIn profile is required'],
    match: [
      /https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?/,
      'Please enter a valid LinkedIn profile URL',
    ],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
  },
  yearsOfExperience: {
    type: String,
    required: [true, 'Years of experience is required'],
    enum: ['0-1 years', '1-3 years', '3-5 years', '5-10 years', '10+ years'],
  },
  preferredTimezone: {
    type: String,
    required: [true, 'Preferred timezone is required'],
    enum: [
      'EST (Eastern Time)',
      'CST (Central Time)',
      'PST (Pacific Time)',
      'GMT (Greenwich Mean Time)',
      'CET (Central European Time)',
      'IST (Indian Standard Time)',
      'Other',
    ],
  },
  howDidYouHear: {
    type: String,
    required: [true, 'Source is required'],
    enum: [
      'LinkedIn',
      'Referral',
      'Google Search',
      'Social Media',
      'Job Board',
      'Other',
    ],
  },
  cvUrl: {
    type: String,
    required: [true, 'CV is required'],
  },
  termsAgreed: {
    type: Boolean,
    required: [true, 'You must agree to the terms and conditions'],
    validate: {
      validator: function (v) {
        return v === true;
      },
      message: 'You must agree to the terms and conditions',
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Recruiter = mongoose.model('Recruiter', recruiterSchema);

module.exports = Recruiter;
