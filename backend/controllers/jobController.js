const Job = require('../models/Jobs');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllJobs = catchAsync(async (req, res, next) => {
  const jobs = await Job.find().sort('-posted');

  res.status(200).json({
    status: 'success',
    results: jobs.length,
    data: {
      jobs,
    },
  });
});

exports.getJob = catchAsync(async (req, res, next) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    return next(new AppError('No job found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      job,
    },
  });
});

exports.createJob = catchAsync(async (req, res, next) => {
  const newJob = await Job.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      job: newJob,
    },
  });
});

exports.updateJob = catchAsync(async (req, res, next) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!job) {
    return next(new AppError('No job found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      job,
    },
  });
});

exports.deleteJob = catchAsync(async (req, res, next) => {
  const job = await Job.findByIdAndDelete(req.params.id);

  if (!job) {
    return next(new AppError('No job found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.getJobStats = catchAsync(async (req, res, next) => {
  const stats = await Job.aggregate([
    {
      $group: {
        _id: '$status',
        count: { $sum: 1 },
        avgApplications: { $avg: '$applications' },
        minSalary: { $min: '$salary' },
        maxSalary: { $max: '$salary' },
      },
    },
    {
      $addFields: {
        status: '$_id',
      },
    },
    {
      $project: {
        _id: 0,
      },
    },
    {
      $sort: { count: -1 },
    },
  ]);

  const totalJobs = await Job.countDocuments();
  const activeJobs = await Job.countDocuments({ status: 'active' });

  res.status(200).json({
    status: 'success',
    data: {
      stats,
      totalJobs,
      activeJobs,
    },
  });
});
