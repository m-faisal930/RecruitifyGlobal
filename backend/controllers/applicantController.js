// const Applicant = require('../models/Applicant');

// const submitApplicant = async (req, res, next) => {
//   try {
//     const {
//       firstName,
//       lastName,
//       email,
//       phone,
//       headline,
//       address,
//       summary,
//       skills,
//       languages,
//       education,
//       experience,
//     } = req.body;

//     const resume = req.files?.resume?.[0]?.path || '';
//     const coverLetter = req.files?.coverLetter?.[0]?.path || '';

//     const applicant = new Applicant({
//       firstName,
//       lastName,
//       email,
//       phone,
//       headline,
//       address,
//       summary,
//       skills,
//       languages,
//       resume,
//       coverLetter,
//       education: JSON.parse(education || '[]'),
//       experience: JSON.parse(experience || '[]'),
//     });

//     await applicant.save();
//     res.status(201).json({ message: 'Application submitted successfully.' });
//   } catch (err) {
//     next(err);
//   }
// };

// module.exports = { submitApplicant };


















const Applicant = require('../models/Applicant');
const fs = require('fs');
const path = require('path');

// Helper function to process file paths
const processFiles = (files) => {
  const result = {};
  if (files['resume']) {
    result.resume = files['resume'][0].path;
  }
  if (files['coverLetter']) {
    result.coverLetter = files['coverLetter'][0].path;
  }
  return result;
};

// Helper function to clean up files on error
const cleanUpFiles = (files) => {
  if (!files) return;

  Object.values(files).forEach((fileArray) => {
    fileArray.forEach((file) => {
      if (fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
    });
  });
};

// @desc    Create new applicant
// @route   POST /api/applicants
// @access  Public
exports.createApplicant = async (req, res, next) => {
  try {
    console.log('requested body', req.body.job);
    // Process uploaded files
    const fileData = processFiles(req.files);

    // Parse array fields if they come as strings
    const skills =
      typeof req.body.skills === 'string'
        ? req.body.skills.split(',').map((s) => s.trim())
        : req.body.skills;

    const languages =
      typeof req.body.languages === 'string'
        ? req.body.languages.split(',').map((l) => l.trim())
        : req.body.languages;

    // Parse education and experience if they come as JSON strings
    let education = [];
    if (req.body.education) {
      education = Array.isArray(req.body.education)
        ? req.body.education.map((edu) => JSON.parse(edu))
        : JSON.parse(req.body.education);
    }

    let experience = [];
    if (req.body.experience) {
      experience = Array.isArray(req.body.experience)
        ? req.body.experience.map((exp) => JSON.parse(exp))
        : JSON.parse(req.body.experience);
    }

    

    // Create applicant document
    const applicant = await Applicant.create({
      ...req.body,
      ...fileData,
      skills,
      languages,
      education,
      experience,
    });

    res.status(201).json({
      success: true,
      data: applicant,
    });
    
  } catch (err) {
    // Clean up uploaded files if error occurs
    cleanUpFiles(req.files);
    next(err);
    
  }
};

// @desc    Get all applicants
// @route   GET /api/applicants
// @access  Private
exports.getApplicants = async (req, res, next) => {
  try {
    const applicants = await Applicant.find()
      .sort({ createdAt: -1 })
      .select('-__v');

    res.status(200).json({
      success: true,
      count: applicants.length,
      data: applicants,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single applicant
// @route   GET /api/applicants/:id
// @access  Private
exports.getApplicant = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const applicant = await Applicant.findById(req.params.id).select('-__v');


    if (!applicant) {
      return res.status(404).json({
        success: false,
        error: 'Applicant not found',
      });
    }

    res.status(200).json({
      success: true,
      data: applicant,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Download applicant file
// @route   GET /api/applicants/:id/download/:fileType
// @access  Private
exports.downloadFile = async (req, res, next) => {
  try {
    const applicant = await Applicant.findById(req.params.id);

    if (!applicant) {
      return res.status(404).json({
        success: false,
        error: 'Applicant not found',
      });
    }

    const fileType = req.params.fileType;
    const filePath = applicant[fileType];

    if (!filePath) {
      return res.status(404).json({
        success: false,
        error: 'File not found for this applicant',
      });
    }

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        success: false,
        error: 'File not found on server',
      });
    }

    const fileName = path.basename(filePath);
    res.download(filePath, fileName, (err) => {
      if (err) {
        console.error('Download error:', err);
        next(err);
      }
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete applicant
// @route   DELETE /api/applicants/:id
// @access  Private
exports.deleteApplicant = async (req, res, next) => {
  try {
    const applicant = await Applicant.findByIdAndDelete(req.params.id);

    if (!applicant) {
      return res.status(404).json({
        success: false,
        error: 'Applicant not found',
      });
    }

    // Clean up files
    if (applicant.resume) fs.unlinkSync(applicant.resume);
    if (applicant.coverLetter) fs.unlinkSync(applicant.coverLetter);

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    next(err);
  }
};




// @desc    Update applicant status
// @route   PUT /api/applicants/status/:id
// @access  Public or Protected (depending on your app setup)
exports.updateApplicantStatus = async (req, res, next) => {
  
  try {
    const applicantId = req.params.id;
    const { status } = req.body;

    // Validate status
    const validStatuses = ['pending', 'reviewed', 'shortlisted', 'rejected'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status value' });
    }

    const applicant = await Applicant.findById(applicantId);

    if (!applicant) {
      return res.status(404).json({ success: false, message: 'Applicant not found' });
    }

    applicant.status = status;
    await applicant.save();

    res.status(200).json({
      success: true,
      message: 'Status updated successfully',
      data: applicant,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};


// Update applicant details
exports.updateApplicant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const applicant = await Applicant.findByIdAndUpdate(id, updates, { new: true });
    
    if (!applicant) {
      return res.status(404).json({ success: false, message: 'Applicant not found' });
    }
    
    res.json({ success: true, data: applicant });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};