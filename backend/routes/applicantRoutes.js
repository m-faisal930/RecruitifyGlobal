const express = require('express');
const router = express.Router();
const applicantController = require('../controllers/applicantController');
const {uploadFiles} = require('../middlewares/uploadMiddleware');

// POST route with file upload
router.post('/', uploadFiles, applicantController.createApplicant);

// GET routes
router.get('/', applicantController.getApplicants);
// PUT route to update applicant status
router.put('/status/:id', applicantController.updateApplicantStatus);
router.get('/:id', applicantController.getApplicant);
router.put('/:id', applicantController.updateApplicant);
router.get('/:id/download/:fileType', applicantController.downloadFile);

module.exports = router;
