
import React, { useState, useEffect } from 'react';
import {
  FaBriefcase,
  FaUsers,
  FaFileAlt,
  FaCheckCircle,
  FaClock,
} from 'react-icons/fa';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import api from '../../utils/api'; // Adjust the import based on your project structure

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function AdminDashboard() {
  const [stats, setStats] = useState([]);
  const [jobPostingsData, setJobPostingsData] = useState({
    labels: [],
    datasets: [{ label: 'Job Postings', data: [], backgroundColor: 'rgba(59, 130, 246, 0.5)', borderColor: 'rgba(59, 130, 246, 1)', borderWidth: 1 }],
  });
  const [applicantsData, setApplicantsData] = useState({
    labels: [],
    datasets: [{ label: 'Applicants', data: [], backgroundColor: 'rgba(124, 58, 237, 0.5)', borderColor: 'rgba(124, 58, 237, 1)', borderWidth: 1, tension: 0.3 }],
  });
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const [statsRes, postingsRes, applicantsRes, actsRes] = await Promise.all([
          api.get('/admin/stats'),
          api.get('/admin/job-postings'),
          api.get('/admin/applicants'),
          api.get('/admin/activities'),
        ]);

        setStats([
          { title: 'Active Jobs', value: statsRes.data.activeJobs, icon: <FaBriefcase className="text-blue-500" />, change: statsRes.data.jobsChange },
          { title: 'Total Applicants', value: statsRes.data.totalApplicants, icon: <FaUsers className="text-purple-500" />, change: statsRes.data.applicantsChange },
          { title: 'Hired Candidates', value: statsRes.data.hiredCandidates, icon: <FaCheckCircle className="text-green-500" />, change: statsRes.data.hiresChange },
          { title: 'Pending Reviews', value: statsRes.data.pendingReviews, icon: <FaClock className="text-yellow-500" />, change: statsRes.data.pendingChange },
        ]);

        setJobPostingsData({
          ...jobPostingsData,
          labels: postingsRes.data.labels,
          datasets: [{ ...jobPostingsData.datasets[0], data: postingsRes.data.data }],
        });

        setApplicantsData({
          ...applicantsData,
          labels: applicantsRes.data.labels,
          datasets: [{ ...applicantsData.datasets[0], data: applicantsRes.data.data }],
        });

        setRecentActivities(actsRes.data.activities);
        // console.log('Recent Activities:', recentActivities);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
      }
    };
    fetchDashboard();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-2xl font-semibold text-gray-800 mt-1">{stat.value}</p>
                <p className={`text-sm ${stat.change.includes('+') ? 'text-green-500' : stat.change.includes('Need') ? 'text-yellow-500' : 'text-gray-500'} mt-1`}>{stat.change}</p>
              </div>
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-blue-50">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Job Postings</h2>
            <select className="text-sm border-gray-300 rounded-md">
              <option>Last 6 months</option>
              <option>Last year</option>
              <option>All time</option>
            </select>
          </div>
          <div className="h-64">
            <Bar data={jobPostingsData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top' } }, scales: { y: { beginAtZero: true, grid: { color: 'rgba(0, 0, 0, 0.05)' } }, x: { grid: { display: false } } } }} />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Applicants</h2>
            <select className="text-sm border-gray-300 rounded-md">
              <option>Last 6 months</option>
              <option>Last year</option>
              <option>All time</option>
            </select>
          </div>
          <div className="h-64">
            <Line data={applicantsData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top' } }, scales: { y: { beginAtZero: true, grid: { color: 'rgba(0, 0, 0, 0.05)' } }, x: { grid: { display: false } } } }} />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
          {/* <button className="text-sm text-blue-600 hover:text-blue-800">View All</button> */}
        </div>
        <div className="space-y-4">
          {recentActivities.map(activity => (
            <div key={activity.id} className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mr-4">
                {activity.action.includes('application') ? <FaFileAlt /> : activity.action.includes('Interview') ? <FaUsers /> : activity.action.includes('Offer') ? <FaCheckCircle /> : <FaBriefcase />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{activity.action}{activity.candidate && ` from ${activity.candidate}`}</p>
                <p className="text-sm text-gray-500">{activity.job} • {new Date(activity.time).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}