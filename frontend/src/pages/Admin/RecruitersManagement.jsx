import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FaSearch,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaUser,
  FaFilePdf,
  FaGlobeAmericas,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const RecruitersManagement = () => {
  const navigate = useNavigate();
  const [recruiters, setRecruiters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecruiter, setSelectedRecruiter] = useState(null);

  // Fetch recruiters
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/recruiters`
        );
        console.log(response.data.data);
        setRecruiters(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const viewRecruiterDetails = (recruiter) => {
    // console.log("selected recruiter", recruiter);
    setSelectedRecruiter(recruiter);
    // navigate(`/admin/recruiters/${recruiter._id}`);
  };

  const filteredRecruiters = recruiters.filter((recruiter) => {
    // console.log(recruiter);
    return (

      recruiter.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recruiter.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

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
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Recruiters Management
        </h1>
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
      </div>

      <div className="bg-white shadow-sm rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Recruiter
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Experience
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Registered
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
                        {recruiter.fullName.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">
                          {recruiter.fullName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {recruiter.yearsOfExperience}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {recruiter.email}
                    </div>
                    <div className="text-sm text-gray-500">
                      {recruiter.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {recruiter.yearsOfExperience}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {new Date(recruiter.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
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

      {selectedRecruiter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">
                Recruiter Details
              </h2>
              <button
                onClick={() => setSelectedRecruiter(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6">
              {/* Profile Section */}
              <div className="flex items-start gap-6 mb-6">
                <div className="bg-blue-100 text-blue-800 rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold">
                  {selectedRecruiter.fullName.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {selectedRecruiter.fullName}
                  </h3>
                  <p className="text-gray-600">
                    {selectedRecruiter.yearsOfExperience} experience
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    {selectedRecruiter.preferredTimezone}
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <FaEnvelope className="text-gray-500 mr-3" />
                  <a
                    href={`mailto:${selectedRecruiter.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {selectedRecruiter.email}
                  </a>
                </div>

                <div className="flex items-center">
                  <FaPhone className="text-gray-500 mr-3" />
                  <span className="text-gray-700">
                    {selectedRecruiter.phone || 'Not provided'}
                  </span>
                </div>

                <div className="flex items-center">
                  <FaLinkedin className="text-gray-500 mr-3" />
                  <a
                    href={selectedRecruiter.linkedInProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              {/* CV Section */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-800 mb-2">CV</h4>
                <a
                  href={selectedRecruiter.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:underline"
                >
                  <FaFilePdf className="mr-2" />
                  View PDF
                </a>
              </div>

              {/* Additional Info */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-800 mb-2">
                  How they found us
                </h4>
                <p className="text-gray-700">
                  {selectedRecruiter.howDidYouHear || 'Not specified'}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() =>
                    (window.location.href = `mailto:${selectedRecruiter.email}`)
                  }
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                >
                  <FaEnvelope />
                  Email
                </button>

                {selectedRecruiter.phone && (
                  <button
                    onClick={() =>
                      (window.location.href = `tel:${selectedRecruiter.phone}`)
                    }
                    className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded"
                  >
                    <FaPhone />
                    Call
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecruitersManagement;
