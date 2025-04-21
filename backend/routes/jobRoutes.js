const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.get('/stats', jobController.getJobStats);

router.route('/').get(jobController.getAllJobs).post(jobController.createJob);

router
  .route('/:id')
  .get(jobController.getJob)
  .patch(jobController.updateJob)
  .delete(jobController.deleteJob);



module.exports = router;
