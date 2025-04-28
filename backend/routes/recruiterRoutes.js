const express = require('express');
const router = express.Router();
const {
  registerRecruiter,
  getRecruiters,
  getRecruiter,
  updateRecruiter,
  deleteRecruiter,
  updateRecruiterStatus,
  addRecruiterNote,
} = require('../controllers/recruiterControllers');
// const { protect, authorize } = require('../middleware/auth');
const { check } = require('express-validator');

// Public routes
router.post(
  '/register',
  [
    check('companyName', 'Company name is required').not().isEmpty(),
    check('contactPerson', 'Contact person is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('termsAgreed', 'You must agree to the terms').isBoolean(),
  ],
  registerRecruiter
);

// Admin protected routes
// router.use(protect);
// router.use(authorize('admin'));

router.get('/', getRecruiters);
router.get('/:id', getRecruiter);
router.put('/:id', updateRecruiter);
router.delete('/:id', deleteRecruiter);
router.put('/status/:id', updateRecruiterStatus);
router.patch('/:id/notes', addRecruiterNote);

module.exports = router;
