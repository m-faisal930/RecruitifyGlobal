const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./config/errorHandler');
const { requireAdmin } = require('./middlewares/auth');
const authRoutes = require('./routes/auth');
const recruiterRoutes = require('./routes/recruiterRoutes');
const Job = require('./models/Jobs');
const Applicant = require('./models/Applicant');

// Load env vars
dotenv.config();

// console.log("here")
// Connect to database
connectDB();

// Route files
const applicants = require('./routes/applicantRoutes');
const jobs = require('./routes/jobRoutes');

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());



// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Auth
app.use('/api/auth', authRoutes);
// Mount routers
app.use('/api/applicants', applicants);
// Mount routers
app.use('/api/jobs', jobs);
app.use('/api/recruiters', recruiterRoutes);















app.get('/api/admin/stats', async (req, res) => {
  try {
    const activeJobs = await Job.countDocuments({ status: 'active' });
    const totalApplicants = await Applicant.countDocuments();
    const hiredCandidates = await Applicant.countDocuments({
      status: 'shortlisted',
    });
    const pendingReviews = await Applicant.countDocuments({
      status: 'pending',
    });
    res.json({
      activeJobs,
      jobsChange: `+${activeJobs}%`,
      totalApplicants,
      applicantsChange: `+${totalApplicants}%`,
      hiredCandidates,
      hiresChange: `${hiredCandidates} this week`,
      pendingReviews,
      pendingChange: `${pendingReviews} pending`,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/admin/job-postings', async (req, res) => {
  try {
    // last 6 months
    const now = new Date();
    const labels = [];
    const data = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      labels.push(d.toLocaleString('default', { month: 'short' }));
      const next = new Date(d.getFullYear(), d.getMonth() + 1, 1);
      const count = await Job.countDocuments({
        posted: { $gte: d, $lt: next },
      });
      data.push(count);
    }
    res.json({ labels, data });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/admin/applicants', async (req, res) => {
  try {
    // last 6 months
    const now = new Date();
    const labels = [];
    const data = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      labels.push(d.toLocaleString('default', { month: 'short' }));
      const next = new Date(d.getFullYear(), d.getMonth() + 1, 1);
      const count = await Applicant.countDocuments({
        createdAt: { $gte: d, $lt: next },
      });
      data.push(count);
    }
    res.json({ labels, data });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/admin/activities', async (req, res) => {
  try {
    // recent 5 applicant actions
    const apps = await Applicant.find().sort({ createdAt: -1 }).limit(5).lean();
    const jobs = await Job.find().sort({ createdAt: -1 }).limit(5).lean();
    const activities = [];
    apps.forEach((a) =>
      activities.push({
        id: a._id,
        action: 'New application received',
        candidate: `${a.firstName} ${a.lastName}`,
        job: a.job.toString(),
        time: a.createdAt.toISOString(),
      })
    );

    jobs.forEach((j) =>
      activities.push({
        id: j._id,
        action: 'New job posted',
        job: j.title,
        time: j.createdAt.toISOString(),
      })
    );
    // sort by time desc and take top 5
    activities.sort((a, b) => new Date(b.time) - new Date(a.time));
    res.json({ activities: activities.slice(0, 5) });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

























// Error handling middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
