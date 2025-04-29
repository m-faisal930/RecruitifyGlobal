const express = require('express');
const router = express.Router();
const recruiterController = require('../controllers/recruiterControllers');
const recruiterValidator = require('../middlewares/Validators/recruiterValidator');
const upload = require('../middlewares/multer'); // Import multer configuration

// Register new recruiter
router.post(
  '/register',
  upload.single('cv'), // Handle single file upload with field name 'cv'
  recruiterValidator.validateRecruiterRegistration,
  recruiterController.registerRecruiter
);

// Get all recruiters (for admin purposes)
router.get('/', recruiterController.getRecruiters);
// Get a single recruiter by ID (for admin purposes)
router.get('/:id', recruiterController.getRescruiterbyId);   
// Update recruiter details (for admin purposes)

// Delete recruiter (for admin purposes)
router.delete('/:id', recruiterController.deleteRecruiter);

module.exports = router;
