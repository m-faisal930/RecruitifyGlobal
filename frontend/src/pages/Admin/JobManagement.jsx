
import { useState, useEffect } from 'react';
import {
  FaTimes,
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

import axios from 'axios';

const JobManagement = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState(null);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [jobToDelete, setJobToDelete] = useState(null);
  const [loading, setLoading] = useState(true);
    const [salaryError, setSalaryError] = useState(false);

const salaryPattern = /^PKR \d{2,3}k - \d{2,3}k$/;



  // Fetch jobs from backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/jobs`
        );
        
        setJobs(response.data.data.jobs);
        
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);



  const handleSalaryChange = (e) => {
    const value = e.target.value;
    setCurrentJob({ ...currentJob, salary: value });
    setSalaryError(!salaryPattern.test(value));
  };


  const toggleJobStatus = async (id) => {
    try {
      // console.log("here")
      const jobToUpdate = jobs.find(job => job._id === id);
      const newStatus = jobToUpdate.status === 'active' ? 'inactive' : 'active';
      
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/api/jobs/${id}`,
        {
          status: newStatus,
        }
      );

      setJobs(jobs.map(job => 
        job._id === id ? { ...job, status: newStatus } : job
      ));
    } catch (error) {
      console.error('Error updating job status:', error);
    }
  };

  const handleEdit = (job) => {
    setCurrentJob({
      ...job,
      deadline: job.deadline.split('T')[0] // Format date for input
      
    });
    setIsModalOpen(true);
  };

  const handleDeleteClick = (job) => {
    setJobToDelete(job);
    setIsDeleteConfirmOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/jobs/${jobToDelete._id}`
      );
      setJobs(jobs.filter(job => job._id !== jobToDelete._id));
      setIsDeleteConfirmOpen(false);
      setJobToDelete(null);
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!salaryPattern.test(currentJob.salary)) {
        alert('Please enter salary in format: PKR 50k - 70k');
        return;
      }
      if (currentJob._id) {
        // Update existing job
        const response = await axios.patch(
          `${import.meta.env.VITE_API_URL}/api/jobs/${currentJob._id}`,
          currentJob
        );
        setJobs(jobs.map(job => 
          job._id === currentJob._id ? response.data.data.job : job
        ));
      } else {
        // Create new job
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/jobs`, {
          ...currentJob,
          status: 'active',
          applications: 0,
        });
        setJobs([response.data.data.job, ...jobs]);
      }
      setIsModalOpen(false);
      setCurrentJob(null);
    } catch (error) {
      console.error('Error saving job:', error);
    }
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // console.log("jobs", filteredJobs)

  if (loading) {
    return (
      <div className=" p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200  rounded w-1/4 mb-6"></div>
          <div className="flex space-x-4">
            <div className="h-10 bg-gray-200  rounded w-64"></div>
            <div className="h-10 bg-gray-200  rounded w-32"></div>
          </div>
          <div className="bg-white  shadow-sm rounded-xl overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="p-4 border-b ">
                <div className="h-4 bg-gray-200  rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200  rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800  mb-4 sm:mb-0">
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
              className="block w-full pl-10 pr-3 py-2 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                experience: 'Entry',
                salary: '',
                description: '',
                requirements: [],
                skills: [],
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
      <div className="bg-white  shadow-sm rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 ">
            <thead className="bg-gray-50 ">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Job Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider"
                >
                  Department
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider"
                >
                  Location
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider"
                >
                  Applications
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500  uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            {/* In the table body, update job.id to job._id */}
            <tbody className="bg-white  divide-y divide-gray-200 ">
              {filteredJobs.map((job) => (
                <tr key={job._id} className="hover:bg-gray-50 ">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900 ">
                      {job.title}
                    </div>
                    <div className="text-sm text-gray-500 ">{job.type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                    {job.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                    {job.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                    {job.applications}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        job.status === 'active'
                          ? 'bg-green-100 text-green-800  '
                          : 'bg-gray-100 text-gray-800 '
                      }`}
                    >
                      {job.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-3">
                      <button
                        onClick={() => toggleJobStatus(job._id)}
                        className="text-gray-500 hover:text-blue-600 "
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
                        className="text-gray-500 hover:text-blue-600 "
                        title="Edit"
                      >
                        <FaEdit size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(job)}
                        className="text-gray-500 hover:text-red-600 "
                        title="Delete"
                      >
                        <FaTrash size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

            {/* In the modal form, ensure currentJob._id is used instead of currentJob.id */}
            {/* All other JSX remains exactly the same */}
          </table>
        </div>
      </div>

      {/* Job Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white  rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b ">
              <h3 className="text-lg font-semibold text-gray-900 ">
                {currentJob._id ? 'Edit Job' : 'Create New Job'}
              </h3>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setCurrentJob(null);
                }}
                className="text-gray-400 hover:text-gray-500 "
              >
                <FaTimes size={20} />
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700  mb-1">
                        Job Title *
                      </label>
                      <input
                        type="text"
                        className="block w-full border border-gray-300   rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                      <label className="block text-sm font-medium text-gray-700  mb-1">
                        Department *
                      </label>
                      <input
                        type="text"
                        className="block w-full border border-gray-300  rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                      <label className="block text-sm font-medium text-gray-700  mb-1">
                        Location *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaMapMarkerAlt className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          className="block w-full pl-10 border border-gray-300  rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                      <label className="block text-sm font-medium text-gray-700  mb-1">
                        Job Type *
                      </label>
                      <select
                        className="block w-full border border-gray-300  rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                      <label className="block text-sm font-medium text-gray-700  mb-1">
                        Salary Range *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
                        <input
                          type="text"
                          placeholder="PKR 50k - 70k"
                          className={`block w-full pl-10 border ${
                            salaryError ? 'border-red-500' : 'border-gray-300'
                          } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                          value={currentJob.salary}
                          onChange={handleSalaryChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700  mb-1">
                        Application Deadline *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaCalendarAlt className="text-gray-400" />
                        </div>
                        <input
                          type="date"
                          className="block w-full pl-10 border border-gray-300  rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                    <div>
                      <label className="block text-sm font-medium text-gray-700  mb-1">
                        Experience Level *
                      </label>
                      <select
                        className="block w-full border border-gray-300  rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        value={currentJob.experience}
                        onChange={(e) =>
                          setCurrentJob({ ...currentJob, experience: e.target.value })
                        }
                        required
                      >
                        'Entry', 'Mid', 'Senior'
                        <option value="Entry">Entry Level</option>
                        <option value="Mid">Mid Level</option>
                        <option value="Senior">Senior Level</option>
                      </select>
                    </div>
                    {currentJob._id && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700  mb-1">
                          Status *
                        </label>
                        <select
                          className="block w-full border border-gray-300  rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Job Description *
                    </label>
                    <textarea
                      rows={5}
                      className="block w-full border border-gray-300  rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                    <label className="block text-sm font-medium text-gray-700  mb-1">
                      Skills Required *
                    </label>
                    <div className="space-y-2">
                      {currentJob.skills.map((skill, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="text"
                            className="flex-1 border border-gray-300  rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            value={skill}
                            onChange={(e) => {
                              const newSkills = [...currentJob.skills];
                              newSkills[index] = e.target.value;
                              setCurrentJob({
                                ...currentJob,
                                skills: newSkills,
                              });
                            }}
                            required
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const newSkills = currentJob.skills.filter(
                                (_, i) => i !== index
                              );
                              setCurrentJob({
                                ...currentJob,
                                skills: newSkills,
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
                            skills: [...currentJob.skills, ''],
                          })
                        }
                        className="mt-2 inline-flex items-center px-3 py-1 border border-gray-300  shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700  bg-white  hover:bg-gray-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Add Skill
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700  mb-1">
                      Requirements *
                    </label>
                    <div className="space-y-2">
                      {currentJob.requirements.map((req, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="text"
                            className="flex-1 border border-gray-300rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                        className="mt-2 inline-flex items-center px-3 py-1 border border-gray-300  shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700  bg-white  hover:bg-gray-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
                    className="px-4 py-2 border border-gray-300  rounded-md shadow-sm text-sm font-medium text-gray-700  bg-white  hover:bg-gray-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {currentJob._id ? 'Update Job' : 'Create Job'}
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
          <div className="bg-white  rounded-xl shadow-xl p-6 max-w-md w-full">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900  mb-2">
                Delete Job
              </h3>
              <p className="text-gray-600  mb-6">
                Are you sure you want to delete the job "{jobToDelete?.title}"?
                This action cannot be undone.
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setIsDeleteConfirmOpen(false)}
                  className="px-4 py-2 border border-gray-300  rounded-md shadow-sm text-sm font-medium text-gray-700  bg-white  hover:bg-gray-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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