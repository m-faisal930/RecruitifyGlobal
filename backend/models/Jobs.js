const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Job title is required'],
      trim: true,
      maxlength: [100, 'Job title cannot exceed 100 characters'],
    },
    department: {
      type: String,
      required: [true, 'Department is required'],
      trim: true,
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true,
    },
    type: {
      type: String,
      required: [true, 'Job type is required'],
      enum: ['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'],
      default: 'Full-time',
    },
    salary: {
      type: String,
      required: [true, 'Salary range is required'],
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'closed'],
      default: 'active',
    },
    applications: {
      type: Number,
      default: 0,
    },
    posted: {
      type: Date,
      default: Date.now,
    },
    deadline: {
      type: Date,
      required: [true, 'Application deadline is required'],
    },
    description: {
      type: String,
      required: [true, 'Job description is required'],
    },
    requirements: {
      type: [String],
      required: [true, 'Job requirements are required'],
      validate: {
        validator: function (v) {
          return v.length > 0;
        },
        message: 'At least one requirement is required',
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Job', jobSchema);
