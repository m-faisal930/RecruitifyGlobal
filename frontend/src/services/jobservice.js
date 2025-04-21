import axios from 'axios';

const API_URL = 'http://localhost:5000/api/jobs';

// Get all jobs
export const getJobs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data.jobs;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

// Get job statistics
export const getJobStats = async () => {
  try {
    const response = await axios.get(`${API_URL}/stats`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching job stats:', error);
    throw error;
  }
};

// Create a new job
export const createJob = async (jobData) => {
  try {
    const response = await axios.post(API_URL, jobData);
    return response.data.data.job;
  } catch (error) {
    console.error('Error creating job:', error);
    throw error;
  }
};
