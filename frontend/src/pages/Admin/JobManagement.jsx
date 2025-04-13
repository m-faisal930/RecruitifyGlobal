import { useState } from 'react';
import {
    FaTimes ,
  FaSearch,
  FaPlus,
  FaEdit,
  FaTrash,
  FaToggleOn,
  FaToggleOff,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaFileContract,
} from 'react-icons/fa';

const JobManagement = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Lahore, Pakistan',
      type: 'Full-time',
      salary: 'PKR 200k - 300k',
      status: 'active',
      applications: 24,
      posted: '2023-05-15',
      deadline: '2023-06-15',
      description:
        'We are looking for an experienced Frontend Developer to join our team...',
      requirements: [
        '5+ years of React experience',
        'Strong TypeScript skills',
        'Experience with state management',
      ],
    },
    // ... other jobs
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState(null);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [jobToDelete, setJobToDelete] = useState(null);

  const toggleJobStatus = (id) => {
    setJobs(
      jobs.map((job) =>
        job.id === id
          ? { ...job, status: job.status === 'active' ? 'inactive' : 'active' }
          : job
      )
    );
  };

  const handleEdit = (job) => {
    setCurrentJob(job);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (job) => {
    setJobToDelete(job);
    setIsDeleteConfirmOpen(true);
  };

  const confirmDelete = () => {
    setJobs(jobs.filter((job) => job.id !== jobToDelete.id));
    setIsDeleteConfirmOpen(false);
    setJobToDelete(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentJob.id) {
      // Update existing job
      setJobs(jobs.map((job) => (job.id === currentJob.id ? currentJob : job)));
    } else {
      // Add new job
      const newJob = {
        ...currentJob,
        id: Math.max(...jobs.map((j) => j.id)) + 1,
        applications: 0,
        posted: new Date().toISOString().split('T')[0],
        status: 'active',
      };
      setJobs([...jobs, newJob]);
    }
    setIsModalOpen(false);
    setCurrentJob(null);
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dark:text-white">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-0">
          Job Management
        </h1>
        <div className="flex space-x-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search jobs..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={() => {
              setCurrentJob({
                title: '',
                department: '',
                location: '',
                type: 'Full-time',
                salary: '',
                description: '',
                requirements: [],
                deadline: '',
              });
              setIsModalOpen(true);
            }}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FaPlus className="mr-2" />
            New Job
          </button>
        </div>
      </div>

      {/* Jobs Table */}
      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Job Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Department
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Location
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Applications
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredJobs.map((job) => (
                <tr
                  key={job.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {job.title}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {job.type}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {job.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {job.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {job.applications}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        job.status === 'active'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200'
                      }`}
                    >
                      {job.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-3">
                      <button
                        onClick={() => toggleJobStatus(job.id)}
                        className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                        title={
                          job.status === 'active' ? 'Deactivate' : 'Activate'
                        }
                      >
                        {job.status === 'active' ? (
                          <FaToggleOn size={18} />
                        ) : (
                          <FaToggleOff size={18} />
                        )}
                      </button>
                      <button
                        onClick={() => handleEdit(job)}
                        className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                        title="Edit"
                      >
                        <FaEdit size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(job)}
                        className="text-gray-500 hover:text-red-600 dark:hover:text-red-400"
                        title="Delete"
                      >
                        <FaTrash size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Job Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {currentJob.id ? 'Edit Job' : 'Create New Job'}
              </h3>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setCurrentJob(null);
                }}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <FaTimes size={20} />
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Job Title *
                      </label>
                      <input
                        type="text"
                        className="block w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        value={currentJob.title}
                        onChange={(e) =>
                          setCurrentJob({
                            ...currentJob,
                            title: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Department *
                      </label>
                      <input
                        type="text"
                        className="block w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        value={currentJob.department}
                        onChange={(e) =>
                          setCurrentJob({
                            ...currentJob,
                            department: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Location *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaMapMarkerAlt className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          className="block w-full pl-10 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={currentJob.location}
                          onChange={(e) =>
                            setCurrentJob({
                              ...currentJob,
                              location: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Job Type *
                      </label>
                      <select
                        className="block w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        value={currentJob.type}
                        onChange={(e) =>
                          setCurrentJob({ ...currentJob, type: e.target.value })
                        }
                        required
                      >
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                        <option value="Remote">Remote</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Salary Range *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaMoneyBillWave className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          className="block w-full pl-10 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={currentJob.salary}
                          onChange={(e) =>
                            setCurrentJob({
                              ...currentJob,
                              salary: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Application Deadline *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaCalendarAlt className="text-gray-400" />
                        </div>
                        <input
                          type="date"
                          className="block w-full pl-10 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={currentJob.deadline}
                          onChange={(e) =>
                            setCurrentJob({
                              ...currentJob,
                              deadline: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    {currentJob.id && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Status *
                        </label>
                        <select
                          className="block w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={currentJob.status}
                          onChange={(e) =>
                            setCurrentJob({
                              ...currentJob,
                              status: e.target.value,
                            })
                          }
                          required
                        >
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                        </select>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Job Description *
                    </label>
                    <textarea
                      rows={5}
                      className="block w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      value={currentJob.description}
                      onChange={(e) =>
                        setCurrentJob({
                          ...currentJob,
                          description: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Requirements *
                    </label>
                    <div className="space-y-2">
                      {currentJob.requirements.map((req, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="text"
                            className="flex-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            value={req}
                            onChange={(e) => {
                              const newRequirements = [
                                ...currentJob.requirements,
                              ];
                              newRequirements[index] = e.target.value;
                              setCurrentJob({
                                ...currentJob,
                                requirements: newRequirements,
                              });
                            }}
                            required
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const newRequirements =
                                currentJob.requirements.filter(
                                  (_, i) => i !== index
                                );
                              setCurrentJob({
                                ...currentJob,
                                requirements: newRequirements,
                              });
                            }}
                            className="ml-2 p-2 text-red-600 hover:text-red-800"
                          >
                            <FaTrash size={14} />
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() =>
                          setCurrentJob({
                            ...currentJob,
                            requirements: [...currentJob.requirements, ''],
                          })
                        }
                        className="mt-2 inline-flex items-center px-3 py-1 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Add Requirement
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      setCurrentJob(null);
                    }}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {currentJob.id ? 'Update Job' : 'Create Job'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-md w-full">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Delete Job
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Are you sure you want to delete the job "{jobToDelete?.title}"?
                This action cannot be undone.
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setIsDeleteConfirmOpen(false)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobManagement;
