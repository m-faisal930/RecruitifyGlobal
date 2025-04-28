const Recruiter = require('../models/Recruiter');
const { sendWelcomeEmail } = require('../services/emailService');

// @desc    Register a new recruiter
// @route   POST /api/recruiters/register
// @access  Public
exports.registerRecruiter = async (req, res) => {
  try {
    const {
      companyName,
      contactPerson,
      email,
      phone,
      companyWebsite,
      industry,
      hiringNeeds,
      companySize,
      termsAgreed,
    } = req.body;

    // Validate required fields
    if (!companyName || !contactPerson || !email || !termsAgreed) {
      return res.status(400).json({
        success: false,
        error: 'Required fields are missing',
      });
    }

    // Check if recruiter already exists
    const existingRecruiter = await Recruiter.findOne({ email });
    if (existingRecruiter) {
      return res.status(400).json({
        success: false,
        error: 'Email already registered',
      });
    }

    // Create new recruiter
    const recruiter = new Recruiter({
      companyName,
      contactPerson,
      email,
      phone: phone || undefined,
      companyWebsite: companyWebsite || undefined,
      industry: industry || undefined,
      hiringNeeds: hiringNeeds || undefined,
      companySize: companySize || undefined,
      termsAgreed,
    });

    await recruiter.save();

    // Send welcome email (non-blocking)
    try {
      await sendWelcomeEmail(email, companyName);
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
    }

    res.status(201).json({
      success: true,
      message: 'Recruiter registered successfully',
      data: {
        id: recruiter._id,
        companyName: recruiter.companyName,
        email: recruiter.email,
        status: recruiter.status,
      },
    });
  } catch (error) {
    console.error('Error registering recruiter:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error.message,
    });
  }
};

// @desc    Get all recruiters
// @route   GET /api/recruiters
// @access  Private/Admin
exports.getRecruiters = async (req, res) => {
  try {
    const { status, industry } = req.query;
    let query = {};

    if (status) query.status = status;
    if (industry) query.industry = industry;

    const recruiters = await Recruiter.find(query)
      .sort({ createdAt: -1 })
      .select('-__v -password');

    res.status(200).json({
      success: true,
      count: recruiters.length,
      data: recruiters,
    });
  } catch (error) {
    console.error('Error fetching recruiters:', error);
    res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
};

// @desc    Get single recruiter
// @route   GET /api/recruiters/:id
// @access  Private/Admin
exports.getRecruiter = async (req, res) => {
  try {
    const recruiter = await Recruiter.findById(req.params.id).select(
      '-__v -password'
    );

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
    console.error('Error fetching recruiter:', error);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        success: false,
        error: 'Recruiter not found',
      });
    }
    res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
};

// @desc    Update recruiter
// @route   PUT /api/recruiters/:id
// @access  Private/Admin
exports.updateRecruiter = async (req, res) => {
  try {
    const recruiter = await Recruiter.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).select('-__v -password');

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
    console.error('Error updating recruiter:', error);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        success: false,
        error: 'Recruiter not found',
      });
    }
    res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
};

// @desc    Update recruiter status
// @route   PUT /api/recruiters/status/:id
// @access  Private/Admin
exports.updateRecruiterStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!['reviewed', 'pending', 'shortlisted', 'rejected'].includes(status)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid status value',
      });
    }

    const recruiter = await Recruiter.findByIdAndUpdate(
      req.params.id,
      { status },
      {
        new: true,
        runValidators: true,
      }
    ).select('-__v -password');

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
    console.error('Error updating recruiter status:', error);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        success: false,
        error: 'Recruiter not found',
      });
    }
    res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
};

// @desc    Add recruiter note
// @route   PATCH /api/recruiters/:id/notes
// @access  Private/Admin
exports.addRecruiterNote = async (req, res) => {
  try {
    const { note } = req.body;

    if (!note) {
      return res.status(400).json({
        success: false,
        error: 'Note content is required',
      });
    }

    const recruiter = await Recruiter.findByIdAndUpdate(
      req.params.id,
      { $push: { notes: note } },
      { new: true }
    ).select('-__v -password');

    if (!recruiter) {
      return res.status(404).json({
        success: false,
        error: 'Recruiter not found',
      });
    }

    res.status(200).json({
      success: true,
      data: recruiter.notes,
    });
  } catch (error) {
    console.error('Error adding recruiter note:', error);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        success: false,
        error: 'Recruiter not found',
      });
    }
    res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
};

// @desc    Delete recruiter
// @route   DELETE /api/recruiters/:id
// @access  Private/Admin
exports.deleteRecruiter = async (req, res) => {
  try {
    const recruiter = await Recruiter.findByIdAndDelete(req.params.id);

    if (!recruiter) {
      return res.status(404).json({
        success: false,
        error: 'Recruiter not found',
      });
    }

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    console.error('Error deleting recruiter:', error);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        success: false,
        error: 'Recruiter not found',
      });
    }
    res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
};
