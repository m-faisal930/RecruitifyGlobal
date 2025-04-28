import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FaSearch,
  FaBuilding,
  FaCheck,
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGlobe,
  FaUserTie,
  FaRegClock,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const RecruitersManagement = () => {
  const navigate = useNavigate();
  const [recruiters, setRecruiters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [notes, setNotes] = useState('');
  const [selectedRecruiter, setSelectedRecruiter] = useState(null);
  const [industries, setIndustries] = useState([]);

  // Fetch recruiters and industries
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/recruiters`
        );
        // console.log(response.data.data);
        setRecruiters(response.data.data);

        // Extract unique industries
        const uniqueIndustries = [
          ...new Set(response.data.data.map((r) => r.industry)),
        ];
        setIndustries(uniqueIndustries);
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
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/recruiters/status/${id}`,
        { status: newStatus }
      );

      setRecruiters(
        recruiters.map((recruiter) =>
          recruiter._id === id ? { ...recruiter, status: newStatus } : recruiter
        )
      );

      if (selectedRecruiter?._id === id) {
        setSelectedRecruiter({ ...selectedRecruiter, status: newStatus });
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const saveNotes = async (id) => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/api/recruiters/${id}`,
        { notes }
      );

      setRecruiters(
        recruiters.map((recruiter) =>
          recruiter._id === id ? { ...recruiter, notes } : recruiter
        )
      );

      if (selectedRecruiter?._id === id) {
        setSelectedRecruiter({ ...selectedRecruiter, notes });
      }
    } catch (error) {
      console.error('Error saving notes:', error);
    }
  };

  const viewRecruiterDetails = (recruiter) => {
    setSelectedRecruiter(recruiter);
    setNotes(recruiter.notes || '');
    navigate(`/admin/recruiters/${recruiter._id}`);
  };

  const filteredRecruiters = recruiters.filter((recruiter) => {
    const matchesSearch =
      recruiter.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recruiter.contactPerson
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      recruiter.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === 'all' || recruiter.status === selectedStatus;

    const matchesIndustry =
      selectedIndustry === 'all' || recruiter.industry === selectedIndustry;

    return matchesSearch && matchesStatus && matchesIndustry;
  });

  const statusCounts = recruiters.reduce((acc, recruiter) => {
    acc[recruiter.status] = (acc[recruiter.status] || 0) + 1;
    return acc;
  }, {});

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
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

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Recruiters Management
        </h1>
        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3">
          <div className="relative flex-1 sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search recruiters..."
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
            {/* 'reviewed', 'pending', 'shortlisted', 'rejected' */}
            <option value="reviewed">
              Reviewed ({statusCounts.reviewed || 0})
            </option>
            <option value="pending">
              Pending ({statusCounts.pending || 0})
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
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
          >
            <option value="all">All Industries</option>
            {industries.map((industry, index) => (
              <option key={index} value={industry}>
                {industry}
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
                Total Recruiters
              </p>
              <p className="text-2xl font-semibold text-gray-800 mt-1">
                {recruiters.length}
              </p>
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <FaBuilding size={18} />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-500">Approved</p>
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
              <p className="text-sm font-medium text-gray-500">Pending</p>
              <p className="text-2xl font-semibold text-gray-800 mt-1">
                {statusCounts.pending || 0}
                
              </p>
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-yellow-50 text-yellow-600">
              <FaRegClock size={18} />
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

      {/* Recruiters Table */}
      <div className="bg-white shadow-sm rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Industry
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Registered
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRecruiters.map((recruiter) => (
                <tr
                  key={recruiter._id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => viewRecruiterDetails(recruiter)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        {recruiter.companyName.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">
                          {recruiter.companyName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {recruiter.companyWebsite || 'No website'}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {recruiter.contactPerson}
                    </div>
                    <div className="text-sm text-gray-500">
                      {recruiter.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {recruiter.industry}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {new Date(recruiter.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        recruiter.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : recruiter.status === 'approved'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {recruiter.status.charAt(0).toUpperCase() +
                        recruiter.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          updateStatus(recruiter._id, 'shortlisted');
                        }}
                        className="text-gray-500 hover:text-green-600 p-1 rounded-full hover:bg-green-50"
                        title="Approve"
                      >
                        <FaCheck size={16} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          updateStatus(recruiter._id, 'rejected');
                        }}
                        className="text-gray-500 hover:text-red-600 p-1 rounded-full hover:bg-red-50"
                        title="Suspend"
                      >
                        <FaTimes size={16} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = `mailto:${recruiter.email}`;
                        }}
                        className="text-gray-500 hover:text-blue-600 p-1 rounded-full hover:bg-blue-50"
                        title="Send Email"
                      >
                        <FaEnvelope size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recruiter Details Modal */}
      {selectedRecruiter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="flex flex-col items-center">
                    <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-3xl font-bold mb-4">
                      {selectedRecruiter.companyName.charAt(0)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {selectedRecruiter.companyName}
                    </h3>
                    <p className="text-gray-500">
                      {selectedRecruiter.industry}
                    </p>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaUserTie className="mr-2" />
                      {selectedRecruiter.contactPerson}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaEnvelope className="mr-2" />
                      {selectedRecruiter.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaPhone className="mr-2" />
                      {selectedRecruiter.phone || 'Not provided'}
                    </div>
                    {selectedRecruiter.linkedin && (
                      <div className="flex items-center text-sm text-blue-500">
                        <FaLinkedin className="mr-2" />
                        <a
                          href={selectedRecruiter.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                    )}
                    {selectedRecruiter.companyWebsite && (
                      <div className="flex items-center text-sm text-blue-500">
                        <FaGlobe className="mr-2" />
                        <a
                          href={selectedRecruiter.companyWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          Company Website
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        Company Information
                      </h4>
                      <div className="mt-2 p-4 bg-gray-50 rounded-lg text-sm text-gray-700">
                        {selectedRecruiter.companyDescription ||
                          'No description provided'}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        Status
                      </h4>
                      <div className="mt-2 flex items-center space-x-4">
                        <select
                          value={selectedRecruiter.status}
                          onChange={(e) => {
                            setSelectedRecruiter({
                              ...selectedRecruiter,
                              status: e.target.value,
                            });
                            updateStatus(selectedRecruiter._id, e.target.value);
                          }}
                          className="block w-48 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="pending">Pending</option>
                          <option value="approved">Approved</option>
                          <option value="suspended">Suspended</option>
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
                          placeholder="Add private notes about this recruiter..."
                          value={selectedRecruiter.notes || ''}
                          onChange={(e) =>
                            setSelectedRecruiter({
                              ...selectedRecruiter,
                              notes: e.target.value,
                            })
                          }
                        />
                        <button
                          onClick={() => saveNotes(selectedRecruiter._id)}
                          className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                        >
                          Save Notes
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-3 pt-4">
                      <button
                        onClick={() =>
                          (window.location.href = `mailto:${selectedRecruiter.email}`)
                        }
                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      >
                        <FaEnvelope className="mr-2" />
                        Send Email
                      </button>
                      {selectedRecruiter.phone && (
                        <button
                          onClick={() =>
                            (window.location.href = `tel:${selectedRecruiter.phone}`)
                          }
                          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                        >
                          <FaPhone className="mr-2" />
                          Call Recruiter
                        </button>
                      )}
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

export default RecruitersManagement;
