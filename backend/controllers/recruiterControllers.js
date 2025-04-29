const Recruiter = require('../models/Recruiter');
const { uploadToCloudinary } = require('../utils/cloudinary');
const { validationResult } = require('express-validator');

exports.registerRecruiter = async (req, res) => {
  try {
    console.log('Request body:', req.body);
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if file exists
    if (!req.file) {
      return res.status(400).json({ error: 'CV file is required' });
    }

    // Upload CV to Cloudinary
    const cloudinaryResult = await uploadToCloudinary(req.file.buffer);
    console.log(req);

    // Create recruiter data
    const recruiterData = {
      fullName: req.body.fullName,
      email: req.body.email,
      linkedInProfile: req.body.linkedInProfile,
      phone: req.body.phone,
      yearsOfExperience: req.body.yearsOfExperience,
      preferredTimezone: req.body.preferredTimezone,
      howDidYouHear: req.body.howDidYouHear,
      cvUrl: cloudinaryResult.secure_url,
      termsAgreed: req.body.termsAgreed === 'true',
    };

    // Create new recruiter
    const recruiter = await Recruiter.create(recruiterData);

    res.status(201).json({
      success: true,
      data: recruiter,
      message: 'Recruiter registered successfully',
    });
  } catch (error) {
    console.error('Error registering recruiter:', error);

    // Handle duplicate email error
    if (error.code === 11000 && error.keyPattern.email) {
      return res.status(400).json({
        success: false,
        error: 'Email already exists',
      });
    }

    res.status(500).json({
      success: false,
      error: 'Server error during registration',
    });
  }
};

exports.getRecruiters = async (req, res) => {
  try {
    const recruiters = await Recruiter.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: recruiters.length,
      data: recruiters,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error fetching recruiters',
    });
  }
};

exports.getRescruiterbyId = async (req, res) => {
    try {
        const recruiter = await Recruiter.findById(req.params.id);
        if (!recruiter) {
        return res.status(404).json({
            success: false,
            error: 'Recruiter not found',
        });
        }
        res.status(200).json({
        success: true,
        data: recruiter,
        });
    } catch (error) {
        res.status(500).json({
        success: false,
        error: 'Server error fetching recruiter',
        });
    }
    };
    

exports.deleteRecruiter = async (req, res) => {
  try {
    const recruiter = await Recruiter.findById(req.params.id);
    if (!recruiter) {
      return res.status(404).json({
        success: false,
        error: 'Recruiter not found',
      });
    }

    await recruiter.remove();

    res.status(200).json({
      success: true,
      message: 'Recruiter deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting recruiter:', error);
    res.status(500).json({
      success: false,
      error: 'Server error during deletion',
    });
  }
};
