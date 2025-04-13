import {
  FaBriefcase,
  FaUsers,
  FaFileAlt,
  FaChartBar,
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

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Active Jobs',
      value: '12',
      icon: <FaBriefcase className="text-blue-500" />,
      change: '+2 this month',
    },
    {
      title: 'Total Applicants',
      value: '245',
      icon: <FaUsers className="text-purple-500" />,
      change: '+24% from last month',
    },
    {
      title: 'Hired Candidates',
      value: '18',
      icon: <FaCheckCircle className="text-green-500" />,
      change: '3 this week',
    },
    {
      title: 'Pending Reviews',
      value: '32',
      icon: <FaClock className="text-yellow-500" />,
      change: 'Need attention',
    },
  ];

  const jobPostingsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Job Postings',
        data: [3, 5, 2, 6, 4, 7],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

  const applicantsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Applicants',
        data: [25, 40, 30, 55, 45, 60],
        backgroundColor: 'rgba(124, 58, 237, 0.5)',
        borderColor: 'rgba(124, 58, 237, 1)',
        borderWidth: 1,
        tension: 0.3,
      },
    ],
  };

  const recentActivities = [
    {
      id: 1,
      action: 'New application received',
      candidate: 'Ali Khan',
      job: 'Frontend Developer',
      time: '2 hours ago',
    },
    {
      id: 2,
      action: 'Interview scheduled',
      candidate: 'Fatima Ahmed',
      job: 'Backend Engineer',
      time: '1 day ago',
    },
    {
      id: 3,
      action: 'Offer sent',
      candidate: 'Usman Malik',
      job: 'UX Designer',
      time: '2 days ago',
    },
    {
      id: 4,
      action: 'New job posted',
      job: 'DevOps Engineer',
      time: '3 days ago',
    },
    {
      id: 5,
      action: 'Application reviewed',
      candidate: 'Sana Khan',
      job: 'Product Manager',
      time: '4 days ago',
    },
  ];

  return (
    <div className="dark:text-white">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Dashboard Overview
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
          >
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stat.title}
                </p>
                <p className="text-2xl font-semibold text-gray-800 dark:text-white mt-1">
                  {stat.value}
                </p>
                <p
                  className={`text-sm ${
                    stat.change.includes('+')
                      ? 'text-green-500'
                      : stat.change.includes('Need')
                      ? 'text-yellow-500'
                      : 'text-gray-500'
                  } mt-1`}
                >
                  {stat.change}
                </p>
              </div>
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-blue-50 dark:bg-gray-700">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Job Postings
            </h2>
            <select className="text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md">
              <option>Last 6 months</option>
              <option>Last year</option>
              <option>All time</option>
            </select>
          </div>
          <div className="h-64">
            <Bar
              data={jobPostingsData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: {
                      color: 'rgba(0, 0, 0, 0.05)',
                    },
                  },
                  x: {
                    grid: {
                      display: false,
                    },
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Applicants
            </h2>
            <select className="text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md">
              <option>Last 6 months</option>
              <option>Last year</option>
              <option>All time</option>
            </select>
          </div>
          <div className="h-64">
            <Line
              data={applicantsData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: {
                      color: 'rgba(0, 0, 0, 0.05)',
                    },
                  },
                  x: {
                    grid: {
                      display: false,
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Recent Activity
          </h2>
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
            View All
          </button>
        </div>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start pb-4 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0"
            >
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-50 dark:bg-gray-700 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                {activity.action.includes('application') ? (
                  <FaFileAlt />
                ) : activity.action.includes('Interview') ? (
                  <FaUsers />
                ) : activity.action.includes('Offer') ? (
                  <FaCheckCircle />
                ) : (
                  <FaBriefcase />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {activity.action}{' '}
                  {activity.candidate && `from ${activity.candidate}`}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {activity.job} • {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
