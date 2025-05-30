import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FaSearch,
  FaFileAlt,
  FaCheck,
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaCalendarAlt,
  FaUserTie,
  FaGraduationCap,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ApplicantsManagement = () => {
  const navigate = useNavigate();
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedJob, setSelectedJob] = useState('all');
  const [notes, setNotes] = useState('');
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [jobTitles, setJobTitles] = useState([]);

  // Fetch applicants and job titles
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [applicantsRes, jobsRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/api/applicants`),
          axios.get(`${import.meta.env.VITE_API_URL}/api/jobs`),
        ]);
        // console.log(jobsRes.data.data.jobs);

        setApplicants(applicantsRes.data.data);
        // console.log(applicantsRes.data.data);
        setJobTitles(jobsRes.data.data.jobs.map((job) => job.title));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const updateStatus = async (id, newStatus) => {
    try {
      // console.log(id, newStatus);
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/applicants/status/${id}`,
        {
          status: newStatus,
        }
      );
      console.log(response.data);
      setApplicants(
        applicants.map((applicant) =>
          applicant._id === id ? { ...applicant, status: newStatus } : applicant
        )
      );

      if (selectedApplicant?._id === id) {
        setSelectedApplicant({ ...selectedApplicant, status: newStatus });
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const saveNotes = async (id) => {
    try {
      await axios.patch(`/api/v1/applicants/${id}`, { notes });
      setApplicants(
        applicants.map((applicant) =>
          applicant._id === id ? { ...applicant, notes } : applicant
        )
      );

      if (selectedApplicant?._id === id) {
        setSelectedApplicant({ ...selectedApplicant, notes });
      }
    } catch (error) {
      console.error('Error saving notes:', error);
    }
  };

  const viewApplicantDetails = (applicant) => {
    console.log(applicant);
    setSelectedApplicant(applicant);
    setNotes(applicant.notes || '');
    navigate(`/admin/applicants/${applicant._id}`);
  };

  const filteredApplicants = applicants.filter((applicant) => {
    const matchesSearch =
      applicant.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      applicant.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      applicant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      applicant.headline.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === 'all' || applicant.status === selectedStatus;

    const matchesJob =
      selectedJob === 'all' || applicant.job.title === selectedJob;

    return matchesSearch && matchesStatus && matchesJob;
  });

  const statusCounts = applicants.reduce((acc, applicant) => {
    acc[applicant.status] = (acc[applicant.status] || 0) + 1;
    return acc;
  }, {});

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          {/* Loading skeleton that matches your UI */}
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl shadow-sm h-24"
              ></div>
            ))}
          </div>
          <div className="bg-white shadow-sm rounded-xl overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="p-4 border-b animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Format applicant data to match your frontend structure
  const formatApplicant = (applicant) => ({
    
    ...applicant,
    name: `${applicant.firstName} ${applicant.lastName}`,
    jobTitle: applicant.title,
    jobId: applicant._id,
    // status: applicant.status,
    headline: applicant.headline || 'No headline provided',
    email: applicant.email,
    appliedDate: new Date(applicant.createdAt).toISOString().split('T')[0],
    experience: applicant.experience?.[0]?.duration || 'Not specified',
    education: applicant.education?.[0]?.degree || 'Not specified',
    skills: applicant.skills || [],
    phone: applicant.phone || 'Not provided',
    linkedin: applicant.linkedin || 'Not provided',
    cv: applicant.resume || '#',
    coverLetter: applicant.summary || 'No cover letter provided',
  });

  return (
 
  <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Applicants Management
        </h1>
        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3">
          <div className="relative flex-1 sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search applicants..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="block w-full sm:w-40 border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="all">All Statuses</option>
            <option value="pending">
              Pending ({statusCounts.pending || 0})
            </option>
            <option value="reviewed">
              Reviewed ({statusCounts.reviewed || 0})
            </option>
            <option value="shortlisted">
              Shortlisted ({statusCounts.shortlisted || 0})
            </option>
            <option value="rejected">
              Rejected ({statusCounts.rejected || 0})
            </option>
          </select>
          <select
            className="block w-full sm:w-48 border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={selectedJob}
            onChange={(e) => setSelectedJob(e.target.value)}
          >
            <option value="all">All Jobs</option>
            {jobTitles.map((title, index) => (
              <option key={index} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Total Applicants
              </p>
              <p className="text-2xl font-semibold text-gray-800 mt-1">
                {applicants.length}
              </p>
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <FaUserTie size={18} />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-500">Shortlisted</p>
              <p className="text-2xl font-semibold text-gray-800 mt-1">
                {statusCounts.shortlisted || 0}
              </p>
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-green-50 text-green-600">
              <FaCheck size={18} />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Pending Review
              </p>
              <p className="text-2xl font-semibold text-gray-800 mt-1">
                {statusCounts.pending || 0}
              </p>
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-yellow-50 text-yellow-600">
              <FaFileAlt size={18} />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-500">Rejected</p>
              <p className="text-2xl font-semibold text-gray-800 mt-1">
                {statusCounts.rejected || 0}
              </p>
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-red-50 text-red-600">
              <FaTimes size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Applicants Table */}
      <div className="bg-white shadow-sm rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Applicant
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Position
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Applied
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Experience
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>

      {/* In the table body, map through filteredApplicants */}
      <tbody className="bg-white divide-y divide-gray-200">
        {filteredApplicants.map((applicant) => {
          const formattedApplicant = formatApplicant(applicant);
          return (
            <tr
              key={applicant._id}
              className="hover:bg-gray-50 cursor-pointer"
              onClick={() => viewApplicantDetails(applicant)}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    {formattedApplicant.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">
                      {formattedApplicant.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {formattedApplicant.email}
                    </div>
                  </div>
                </div>
              </td>

              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900 font-medium">
                  {formattedApplicant.headline}
                </div>
                <div className="text-sm text-gray-500">
                  #{formattedApplicant.jobId}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500 flex items-center">
                  <FaCalendarAlt className="mr-1" />
                  {formattedApplicant.appliedDate}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                  {formattedApplicant.experience}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        formattedApplicant.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : applicant.status === 'reviewed'
                          ? 'bg-blue-100 text-blue-800'
                          : applicant.status === 'shortlisted'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {formattedApplicant.status.charAt(0).toUpperCase() +
                        formattedApplicant.status.slice(1)}
                    </span>
                  </td>


              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      updateStatus(formattedApplicant.id, 'shortlisted');
                    }}
                    className="text-gray-500 hover:text-green-600 p-1 rounded-full hover:bg-green-50"
                    title="Shortlist"
                  >
                    <FaCheck size={16} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      updateStatus(formattedApplicant.id, 'rejected');
                    }}
                    className="text-gray-500 hover:text-red-600 p-1 rounded-full hover:bg-red-50"
                    title="Reject"
                  >
                    <FaTimes size={16} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `mailto:${formattedApplicant.email}`;
                    }}
                    className="text-gray-500 hover:text-blue-600 p-1 rounded-full hover:bg-blue-50"
                    title="Send Email"
                  >
                    <FaEnvelope size={16} />
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>

      //  </table>
         </div>
       </div>


      {/* For the modal, use selectedApplicant and format it */}
      {selectedApplicant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Modal content */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  {/* Use formatted data */}
                  <div className="flex flex-col items-center">
                    <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-3xl font-bold mb-4">
                      {selectedApplicant.firstName.charAt(0)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {selectedApplicant.firstName} {selectedApplicant.lastName}
                    </h3>
                    <p className="text-gray-500">
                      {selectedApplicant.job.title}
                    </p>
                  </div>
                  {/* Rest of your modal content */}
                </div>



                               {/* Right Column */}
                <div className="md:col-span-2">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        Cover Letter
                      </h4>
                      <div className="mt-2 p-4 bg-gray-50 rounded-lg text-sm text-gray-700">
                        {selectedApplicant.coverLetter}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        Documents
                      </h4>
                      <div className="mt-2">
                        <a
                          href={`/cvs/${selectedApplicant.cv}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                        >
                          <FaFileAlt className="mr-2" />
                          View CV
                          <FaExternalLinkAlt className="ml-2 text-xs" />
                        </a>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        Status
                      </h4>
                      <div className="mt-2 flex items-center space-x-4">
                        <select
                          value={selectedApplicant.status}
                          onChange={(e) => {
                            setSelectedApplicant({
                              ...selectedApplicant,
                              status: e.target.value,
                            });
                            updateStatus(selectedApplicant.id, e.target.value);
                          }}
                          className="block w-48 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="pending">Pending</option>
                          <option value="reviewed">Reviewed</option>
                          <option value="shortlisted">Shortlisted</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        Notes
                      </h4>
                      <div className="mt-2">
                        <textarea
                          rows={3}
                          className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Add private notes about this applicant..."
                          value={selectedApplicant.notes || ''}
                          onChange={(e) =>
                            setSelectedApplicant({
                              ...selectedApplicant,
                              notes: e.target.value,
                            })
                          }
                        />
                        <button
                          onClick={() => saveNotes(selectedApplicant.id)}
                          className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                        >
                          Save Notes
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-3 pt-4">
                      <button
                        onClick={() =>
                          (window.location.href = `mailto:${selectedApplicant.email}`)
                        }
                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      >
                        <FaEnvelope className="mr-2" />
                        Send Email
                      </button>
                      <button
                        onClick={() =>
                          (window.location.href = `tel:${selectedApplicant.phone}`)
                        }
                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      >
                        <FaPhone className="mr-2" />
                        Call Applicant
                      </button>
                    </div>
                  </div>
                </div>




              </div>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default ApplicantsManagement;