const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, 'Please add a school name'],
  },
  field: {
    type: String,
    required: [true, 'Please add a field of study'],
  },
  degree: {
    type: String,
    required: [true, 'Please add a degree'],
  },
  start: {
    type: Date,
    required: [true, 'Please add a start date'],
  },
  end: {
    type: Date,
    required: [true, 'Please add an end date'],
    validate: {
      validator: function (value) {
        return this.start < value;
      },
      message: 'End date must be after start date',
    },
  },
});

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a job title'],
  },
  company: {
    type: String,
    required: [true, 'Please add a company name'],
  },
  industry: {
    type: String,
  },
  summary: {
    type: String,
    maxlength: [300, 'Summary cannot be more than 300 characters'],
  },
  start: {
    type: Date,
    required: [true, 'Please add a start date'],
  },
  end: {
    type: Date,
    required: [true, 'Please add an end date'],
    validate: {
      validator: function (value) {
        return this.start < value;
      },
      message: 'End date must be after start date',
    },
  },
});

const applicantSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job',
      required: [true, 'Application must belong to a job'],
    },
    firstName: {
      type: String,
      required: [true, 'Please add a first name'],
      trim: true,
      maxlength: [50, 'First name cannot be more than 50 characters'],
    },
    lastName: {
      type: String,
      required: [true, 'Please add a last name'],
      trim: true,
      maxlength: [50, 'Last name cannot be more than 50 characters'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email',
      ],
    },
    headline: {
      type: String,
      required: [true, 'Please add a professional headline'],
      maxlength: [100, 'Headline cannot be more than 100 characters'],
    },
    phone: {
      type: String,
      required: [true, 'Please add a phone number'],
      match: [/^[0-9+\-\s]+$/, 'Please add a valid phone number'],
    },
    address: {
      type: String,
    },
    summary: {
      type: String,
    },
    resume: {
      type: String, // Path to the file
      required: [true, 'Please upload a resume'],
    },
    coverLetter: {
      type: String, // Path to the file
    },
    skills: {
      type: [String],
    },
    status: {
      type: String,
      enum: ['reviewed', 'pending', 'shortlisted', 'rejected'],
      default: 'pending',
    },
    languages: {
      type: [String],
    },
    education: [educationSchema],
    experience: [experienceSchema],
  },

  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Format phone number before saving
applicantSchema.pre('save', function (next) {
  if (this.phone) {
    // Remove all non-digit characters
    this.phone = this.phone.replace(/\D/g, '');
  }

  // Convert skills and languages strings to arrays
  if (this.skills && typeof this.skills === 'string') {
    this.skills = this.skills.split(',').map((skill) => skill.trim());
  }

  if (this.languages && typeof this.languages === 'string') {
    this.languages = this.languages.split(',').map((lang) => lang.trim());
  }

  next();
});

// Increment job's application count when applicant is created
applicantSchema.post('save', async function(doc) {
  const Job = mongoose.model('Job');
  await Job.findByIdAndUpdate(doc.job, { 
    $inc: { applications: 1 } 
  });
});

// Decrement job's application count when applicant is removed
applicantSchema.pre('remove', async function(next) {
  const Job = mongoose.model('Job');
  await Job.findByIdAndUpdate(this.job, { 
    $inc: { applications: -1 } 
  });
  next();
});






module.exports = mongoose.model('Applicant', applicantSchema);
